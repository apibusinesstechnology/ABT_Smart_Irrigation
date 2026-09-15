module.exports = {
  mutate: ["src/**/*.ts"],
  testRunner: "jest",
  jest: {
    projectType: "custom",
    configFile: "jest.config.js"
  }
};
