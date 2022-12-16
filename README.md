# Mobile Application Boilerplate for Full Stack Assessment

This is intended to be used with the [Back End Boilerplate](https://github.com/Haut-Technologies/back-end-boilerplate) where `backEndURLBase` in `App.tsx` should be changed to the back end server's address. If you aren't running the back end server on the same machine as what you run `npm run schema` on then you'll also need to modify `package.json` appropriately.

## Quick start

Install docker and docker-compose
- For MacOS:
  - `brew install --cask docker`
- For Windows: https://docs.docker.com/desktop/windows/install/

You can run the following commands in the next sections within a Docker container by running
```sh
docker-compose build haut-rn
docker-compose run --service-ports --rm haut-rn
```
and replacing `localhost` in `package.json` with `host.docker.internal` if running MacOS or Windows.

If running Linux, don't use docker and instead make sure you are running node 16.13.2 and install the expo CLI globally
```
npm install --global expo-cli@5.4.12
```

## Testing with Expo Go App

Install Expo Go app on a test device: https://expo.dev/client

## Setting up the back end

Clone [this repository](https://github.com/Haut-Technologies/back-end-boilerplate) and follow the instructions in the README. If running the back end on a different computer than the test device, you'll need to export the environment variable `BACK_END_URL` to an IP address of computer running the back end with the port number e.g. `export BACK_END_URL="172.30.1.12:3030"`.

Then run these commands

```sh
npm install # install project dependencies and generate code
npm start # start development server and test application using expo go mobile app
```

> Scanning the generated QR code through Expo Go on Android may not work so try to "Enter URL manually" by copying the URL printed by `npm start` e.g.
> `› Metro waiting on exp://ek-939.clearcharles.haut-rn.exp.direct:80`

## Using VSCode for Editing

The following extensions are used by the team:

- ESLint `dbaeumer.vscode-eslint`
- GraphQL `GraphQL.vscode-graphql`
- Prettier - Code formatter `esbenp.prettier-vscode`
