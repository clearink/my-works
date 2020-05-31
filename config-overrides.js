const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackExternals,
} = require("customize-cra");
const path = require("path");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    assets: path.resolve(__dirname, "src/assets"),
    components: path.resolve(__dirname, "src/components"),
    hooks: path.resolve(__dirname, "src/hooks"),
    utils: path.resolve(__dirname, "src/utils"),
  }),
  addWebpackExternals({})
);
