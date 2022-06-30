FROM node:16.13.2

LABEL mantainer rui@getclearapp.com

EXPOSE 19000

RUN apt-get update && apt-get -y install android-tools-adb
USER node
WORKDIR /home/node

# sometimes we'll get ECONNRESET when running npm install
RUN npm config rm proxy
RUN npm config rm https-proxy

WORKDIR /home/node/haut-rn
CMD ["bash"]
