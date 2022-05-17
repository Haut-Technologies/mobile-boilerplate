module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["relay", { artifactDirectory: "./src/__generated__" }],
      [
        "module-resolver",
        {
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            __generated__: "./src/__generated__",
            assets: "./assets",
            components: "./src/components",
            hooks: "./src/hooks",
            screens: "./src/screens",
            utils: "./src/utils",
            libraries: "./src/libraries",
          },
        },
      ],
    ],
  };
};
