.PHONY: all
all: build run

.PHONY: install
install: build

.PHONY: build
build:
	@docker build -t example .

.PHONY: run
run:clean create
	@docker run --name example --mount type=bind,src=/tmp/data,target=/data -it example

.PHONY: create
create:
	@mkdir -p /tmp/data
	@echo "hello world" > /tmp/data/hello.txt

.PHONY: attach
attach:
	@docker exec -it example bash -c "echo 'modified' > /data/hello.txt"

.PHONY: ls
ls:
	@docker exec -it example ls /data

.PHONY: cat
cat:
	@cat /tmp/data/hello.txt

.PHONY: clean
clean:
	@docker rm -f $$(docker ps -aq)
