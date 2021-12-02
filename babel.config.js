module.exports = (api) => {
  return {
    presets: [
      [
        "@quasar/babel-preset-app",
        {
          polyfills: ["es6.object.entries"],
        },
        api.caller((caller) => caller && caller.target === "node")
          ? { targets: { node: "current" } }
          : {},
      ],
    ],
  };
};
