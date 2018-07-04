.PHONY: build
build:
	docker build -t node-server .

.PHONY: run
run:
	docker run -p 8080:8080 -t node-server

.PHONY: demo
demo:
	echo "hello" | nc 127.0.0.1 8080
