.PHONY: all
all: build run

.PHONY: install
install: build

.PHONY: build
build:
	@docker build -t geth .

.PHONY: run
run: clean
	@docker run --name geth -p 8545:8545 -p 8546:8546 -it geth

.PHONY: clean
clean:
	@docker rm -f $$(docker ps -aq)

.PHONY: up
up:
	@docker-compse up

.PHONY: attach
attach:
	sudo docker exec -it geth geth attach ipc:/.rinkeby/geth.ipc
