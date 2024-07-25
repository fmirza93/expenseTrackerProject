module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/src/tests/**/*.[jt]s?(x)"],
};
