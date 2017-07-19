FROM node:8.1.4

COPY . /dromedary/

RUN apt-get update
RUN apt-get install default-jre -y
RUN (cd /dromedary; npm install)
RUN (cd /dromedary; npm install gulp -g)

WORKDIR /dromedary
ENTRYPOINT gulp
