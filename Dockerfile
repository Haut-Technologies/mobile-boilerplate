FROM node:16.13.2

LABEL mantainer rui@getclearapp.com

EXPOSE 19000

RUN apt-get update && apt-get -y install android-tools-adb
USER node
WORKDIR /home/node

# sometimes we'll get ECONNRESET when running npm install
RUN npm config rm proxy
RUN npm config rm https-proxy

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

RUN npm install --global expo-cli@5.4.12
RUN npm install --global eas-cli@0.54.1

WORKDIR /home/node/haut-rn
CMD ["bash"]
