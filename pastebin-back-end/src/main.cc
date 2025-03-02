#include "crow.h" // IWYU pragma: keep


int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")([](){
        return "Hello, Crow!";
    });

    app.port(8080).multithreaded().run();
    return 0;
}