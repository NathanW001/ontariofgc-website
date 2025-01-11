#'#!/bin/sh' 

docker kill onfgc
docker rmi onfgc
docker build -t onfgc .
docker run --rm -it -d --label=sh.acme.autoload.domain=ontariofgc.ca -p 80:80 -p 443:443 --name onfgc onfgc
