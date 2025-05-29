#include "paste_handler.hpp"
#include <userver/components/component.hpp>
#include <userver/logging/log.hpp>
#include <userver/server/http/http_status.hpp>
#include <userver/storages/postgres/io/row_types.hpp>
#include <cstdint>
#include <tuple>
#include <chrono>

namespace service_template {

PasteRetrieveHandler::PasteRetrieveHandler(
    const userver::components::ComponentConfig& config,
    const userver::components::ComponentContext& context)
    : HttpHandlerJsonBase(config, context),
      pg_cluster_(context.FindComponent<userver::components::Postgres>("postgres-db-1").GetCluster()) {}

    userver::formats::json::Value PasteRetrieveHandler::HandleRequestJsonThrow(
    const userver::server::http::HttpRequest& request,
    const userver::formats::json::Value&,
    userver::server::request::RequestContext&) const {
    try {

         // Добавляем CORS заголовки для всех запросов
         request.GetHttpResponse().SetHeader(std::string_view("Access-Control-Allow-Origin"), "*");
         request.GetHttpResponse().SetHeader(std::string_view("Access-Control-Allow-Methods"), "GET,POST,PUT,PATCH,DELETE,OPTIONS");
         request.GetHttpResponse().SetHeader(std::string_view("Access-Control-Allow-Headers"), "authorization, origin, content-type, accept");
         request.GetHttpResponse().SetHeader(std::string_view("Allow"), "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS");

         // Если это OPTIONS запрос, возвращаем пустой JSON
        if (request.GetMethod() == userver::server::http::HttpMethod::kOptions) {
            return userver::formats::json::MakeObject();
        }

        // Получаем идентификатор из URL
        const std::string identeficator = request.GetPathArg("id");

        // Получаем время из параметра запроса
        const std::string time_str = request.GetArg("time");
        if (time_str.empty()) {
            request.GetHttpResponse().SetStatus(userver::server::http::HttpStatus::kBadRequest);
            return userver::formats::json::MakeObject("error", "Time parameter is required");
        }

        // Преобразуем строку в число
        const std::int64_t request_time = std::stoll(time_str);

        // Получаем данные из базы
        const auto result = pg_cluster_->Execute(
            userver::storages::postgres::ClusterHostType::kMaster,
            "SELECT title, content, expiration, access, user_id, views "
            "FROM hello_schema.pastes "
            "WHERE identeficator = $1",
            identeficator
        );

        if (result.IsEmpty()) {
            request.GetHttpResponse().SetStatus(userver::server::http::HttpStatus::kNotFound);
            return userver::formats::json::MakeObject("error", "Paste not found");
        }

        // Формируем ответ
        const auto [title, content, expiration, access, user_id, views] = 
            result.AsSingleRow<std::tuple<std::string, std::string, std::int64_t, bool, int, int>>(
                userver::storages::postgres::kRowTag);

        // Проверяем срок действия пасты
        LOG_DEBUG() << "Expiration: " << expiration << " Request time: " << request_time;
        if (expiration < request_time) {
            request.GetHttpResponse().SetStatus(userver::server::http::HttpStatus::kGone);
            return userver::formats::json::MakeObject("error", "Paste has expired");
        }

        // Увеличиваем счетчик просмотров
        pg_cluster_->Execute(
            userver::storages::postgres::ClusterHostType::kMaster,
            "UPDATE hello_schema.pastes SET views = views + 1 WHERE identeficator = $1",
            identeficator
        );
        
        return userver::formats::json::MakeObject(
            "title", title,
            "content", content,
            "expiration", expiration,
            "access", access,
            "user_id", user_id,
            "views", views
        );
    } catch (const std::exception& ex) {
        request.GetHttpResponse().SetStatus(userver::server::http::HttpStatus::kInternalServerError);
        return userver::formats::json::MakeObject("error", ex.what());
    }
}

}  // namespace service_template 