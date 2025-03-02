PROJECT_NAME = PasteBin
NPROCS ?= $(shell nproc)
PRESETS ?= debug release

.PHONY: build
build:
	rm -rf build
	cmake . -B build
	cmake --build build

.PHONY: start
start:
	cmake . -B build
	cmake --build build
	./build/$(PROJECT_NAME)