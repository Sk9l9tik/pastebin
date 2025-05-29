#include <cstdint>
#include <string>
#include <userver/clients/dns/component.hpp>
#include <userver/clients/http/component.hpp>
#include <userver/engine/task/task.hpp>
#include <userver/server/handlers/http_handler_base.hpp>
#include <userver/server/handlers/http_handler_json_base.hpp>
#include <userver/server/http/http_request.hpp>
#include <userver/server/http/http_response.hpp>
#include <userver/server/server.hpp>
#include <userver/utils/daemon_run.hpp>
#include <userver/formats/json.hpp>
#include <userver/storages/postgres/postgres.hpp>
#include <userver/clients/http/client.hpp>
#include <userver/utest/using_namespace_userver.hpp>
#include <userver/utils/datetime.hpp>

namespace service_template {

class PasteHandler final : public userver::server::handlers::HttpHandlerJsonBase {
public:
    static constexpr std::string_view kName = "paste-handler";

    PasteHandler(const userver::components::ComponentConfig& config,
                 const userver::components::ComponentContext& context)
        : HttpHandlerJsonBase(config, context),
        pg_cluster_(context.FindComponent<userver::components::Postgres>("postgres-db-1").GetCluster()),
        http_client_(context.FindComponent<userver::components::HttpClient>().GetHttpClient()){}
        //hash_url_(config["hash-url"].As<std::string>()){}
    
    userver::formats::json::Value HandleRequestJsonThrow(
        const userver::server::http::HttpRequest& request,
        const userver::formats::json::Value& request_json,
        userver::server::request::RequestContext&) const override {
        try {
            // Получаем адрес источника из заголовка Origin
            const std::string origin = request.GetHeader("Origin");
            
            // Добавляем CORS заголовки для всех запросов
            request.GetHttpResponse().SetHeader(std::string_view("Access-Control-Allow-Origin"), origin.empty() ? "*" : origin);
            request.GetHttpResponse().SetHeader(std::string_view("Access-Control-Allow-Methods"), "GET,POST,PUT,PATCH,DELETE,OPTIONS");
            request.GetHttpResponse().SetHeader(std::string_view("Access-Control-Allow-Headers"), "authorization, origin, content-type, accept");
            request.GetHttpResponse().SetHeader(std::string_view("Allow"), "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS");

            // Если это OPTIONS запрос, возвращаем пустой JSON
            if (request.GetMethod() == userver::server::http::HttpMethod::kOptions) {
                return userver::formats::json::MakeObject();
            }

            // Получаем идентификатор с сервиса /generate
            const std::string identeficator = GetIdenteficator();

            // Извлекаем данные из JSON
            const std::string title = request_json["title"].As<std::string>();
            const std::string content = request_json["content"].As<std::string>();
            const std::int64_t expiration = request_json["expiration"].As<std::int64_t>();
            // const auto expiration = userver::utils::datetime::Stringtime(expiration_str);   
            const bool access = request_json["access"].As<bool>();
            const int user_id = request_json["user_id"].As<int>();

            // Вставляем данные в базу
            const auto result = pg_cluster_->Execute(
                userver::storages::postgres::ClusterHostType::kMaster,
                "INSERT INTO hello_schema.pastes (identeficator, title, content, expiration, access, user_id) "
                "VALUES ($1, $2, $3, $4, $5, $6)",
                identeficator, title, content, expiration, access, user_id
            );

            // Формируем ссылку с адресом фронтенда из Origin
            const std::string frontend_url = origin.empty() ? "http://127.0.0.1:8080/404" : origin;
            const std::string link = frontend_url + "/paste/" + identeficator;

            // Возвращаем ссылку в ответе
            return userver::formats::json::MakeObject("link", link);
        } catch (const std::exception& ex) {
            // В случае ошибки возвращаем 500
            request.GetHttpResponse().SetStatus(userver::server::http::HttpStatus::kInternalServerError);
            return userver::formats::json::MakeObject("error", ex.what());
        }
    }

private:

    std::string GenerateCode() const {
        const std::string chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        std::string result;
        std::random_device rd;
        std::mt19937 gen(rd());
        std::uniform_int_distribution<> distr(0, chars.size() - 1);

        for (int i = 0; i < 6; ++i) {
            result += chars[distr(gen)];
        }

        // Инкрементируем счетчик
        counter_.fetch_add(1, std::memory_order_relaxed);

        return result;
    }
    mutable std::atomic<int> counter_ {0};

    // Функция для получения идентификатора с сервиса /generate
    std::string GetIdenteficator() const {
        
        return GenerateCode();

        // const auto response_url = http_client_.CreateRequest()
        //     .get(hash_url_)
        //     .timeout(std::chrono::seconds(1))
        //     .retry(5)
        //     .perform();

        // if (response_url->status_code() != userver::server::http::HttpStatus::kOk) {
        //     // throw std::runtime_error("Failed to get identeficator");
        //     return "1233444";
        // }

        // const auto json = userver::formats::json::FromString(response_url->body());
        // return json["code"].As<std::string>();
    }
    
    userver::storages::postgres::ClusterPtr pg_cluster_;
    userver::clients::http::Client& http_client_;
    const std::string hash_url_ = "http://172.18.0.3:38637/generate";
};

void AppendHello(userver::components::ComponentList& component_list) {
  component_list.Append<PasteHandler>();
  component_list.Append<userver::components::Postgres>("postgres-db-1");
  component_list.Append<userver::clients::dns::Component>();
}

}  // namespace service_template