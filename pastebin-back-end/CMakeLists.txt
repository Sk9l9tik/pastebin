cmake_minimum_required(VERSION 3.14)

set(APP_NAME "PasteBin")
project(PasteBin)

include_directories(${CMAKE_SOURCE_DIR}/Crow/include)

find_package(Boost REQUIRED COMPONENTS system)

add_executable(${APP_NAME} src/main.cc)

target_link_libraries(${APP_NAME} PRIVATE Boost::system pthread)