.PHONY: all
all: build run

.PHONY: install
install: build

.PHONY: build
build:
	@docker build -t example .

.PHONY: run
run: create
	@docker run --mount type=bind,src=/tmp/data,target=/data -it example

.PHONY: create
create:
	@mkdir -p /tmp/data
	@echo "hello world" > /tmp/data/hello.txt
