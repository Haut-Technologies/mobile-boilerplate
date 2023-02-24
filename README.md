# Mobile Application Boilerplate for Full Stack Assessment

This is intended to be used with the [Back End Boilerplate](https://github.com/Haut-Technologies/back-end-boilerplate) where `backEndURLBase` in `App.tsx` should be changed to the back end server's address. If you aren't running the back end server on the same machine as what you run `npm run schema` on then you'll also need to modify `package.json` appropriately.

## Quick start

There are two methods to setup your development environment

1. If using Mac, Linux or WSL, the scripts in package.json should run fine provided you have node v16.13.2 installed (preferrably via [nvm](https://github.com/nvm-sh/nvm)) and install Expo CLI globally with the following command

```
npm install --global expo-cli@5.4.12
```

2. If using Windows but unable to use WSL, have trouble with the above method with Mac, install docker and docker-compose

- For MacOS Terminal using [homebrew](https://brew.sh/):
  - `brew install --cask docker`
- For Windows: https://docs.docker.com/desktop/windows/install/

- Then run the commands in the next sections within a Docker container by running

```sh
docker-compose build haut-rn
docker-compose run --service-ports --rm haut-rn
```

- Replace `localhost` in `package.json` with `host.docker.internal`

> Note that the above command should be run within the project root directory.

- If docker fails to install you may want to install docker desktop through [this](https://www.docker.com/products/docker-desktop/). Be sure to download the one appropriate for your system's CPU (Intel, M1, Apple etc).

> Please commit changes through the `git` CLI within the Docker container if your host OS is Windows instead of via an IDE

## Testing with Expo Go App

You can install the Expo Go mobile App for Android [here](https://m.apkpure.com/expo/host.exp.exponent/download/181-APK-85457c141dc69b6f8a220cda66f2a933) and for iOS you'll have to run Expo Go in the iOS simulator with `expo client:install:ios` then run the following commands on your PC to setup a development server which hot reloads changes to javascript files in real time when running Clear within Expo Go

## Setting up the back end

Clone [this repository](https://github.com/Haut-Technologies/back-end-boilerplate) and follow the instructions in the README. If running the back end on a different computer than the test device, you'll need to export the environment variable `BACK_END_URL` to an IP address of computer running the back end with the port number e.g. `export BACK_END_URL="172.30.1.12:3030"`.

## Install and run the app with Expo Go

```sh
npm install # install project dependencies
npm start # start development server and test application using expo go mobile app
```

> For MacOS users: To run the above within your docker container, first run docker compose and start a container, then access docker desktop application. Within the app there should be a place to `open in terminal`. Type the commands there

> Scanning the generated QR code through Expo Go on Android may not work so try typing the URL printed by `npm start` e.g.
> `› Metro waiting on exp://ek-939.clearcharles.haut-rn.exp.direct:80` into the Expo Go home tab

You might see an error message `›Tunnel URL not found (it might not be ready yet), falling back to LAN URL.` or something similar, the generated URL may be an IP address that looks like `›Metro waiting on exp://123.45.6.7:12345`. Make sure both your PC and phone are connected to the same LAN (you can check by typing in the given URL on a web browser) and scan the QR code.

## Using VSCode for Editing

The following extensions are used by the team:

- ESLint `dbaeumer.vscode-eslint`
- GraphQL `GraphQL.vscode-graphql`
- Prettier - Code formatter `esbenp.prettier-vscode`
