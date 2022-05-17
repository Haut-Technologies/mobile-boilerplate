# Mobile Application Boilerplate for Full Stack Assessment

This is intended to be used with the [Back End Boilerplate](https://github.com/Haut-Technologies/back-end-boilerplate) where `backEndURLBase` in `App.tsx` should be changed to the back end server's address. If you aren't running the back end server on the same machine as what you run `npm run schema` on then you'll also need to modify `package.json` appropriately.

## Quick start

Install Node Version Manager: https://github.com/nvm-sh/nvm

Then run these commands

```sh
nvm install 16 # install and use latest version of Node 16
npm install # install project dependencies
npx expo login # login to your expo account
npm run schema # fetches the GraphQL schema from the server
npm run relay # generates types and code for the GraphQL client
npm start # start development server and test application using expo go mobile app
```

## Using VSCode for Editing

The following extensions are used by the team:

- ESLint `dbaeumer.vscode-eslint`
- GraphQL `GraphQL.vscode-graphql`
- Prettier - Code formatter `esbenp.prettier-vscode`
