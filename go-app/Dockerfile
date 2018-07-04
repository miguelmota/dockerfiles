FROM golang:latest

# expose default port
EXPOSE 8000

# set environment path
ENV PATH /go/bin:$PATH

# cd into the api code directory
WORKDIR /go/src/github.com/myorg/myapp

# create ssh directory
RUN mkdir ~/.ssh
RUN touch ~/.ssh/known_hosts
RUN ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

# allow private repo pull
RUN git config --global url."https://GITHUB_TOKEN_GOES_HERE:x-oauth-basic@github.com/".insteadOf "https://github.com/"

# copy the local package files to the container's workspace
ADD . /go/src/github.com/myorg/myapp

# install the program
RUN go install github.com/myorg/myapp

# start application
CMD ["myapp"]
