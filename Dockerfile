FROM node:16.20.2-slim

WORKDIR /projects

RUN apt-get update && apt-get install -y lsof

COPY "print_Dockfile.sh text is here"
RUN "print_Dockfile.sh text is here"
