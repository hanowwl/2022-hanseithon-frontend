const path = require("path");

const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve("public"),
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
});
