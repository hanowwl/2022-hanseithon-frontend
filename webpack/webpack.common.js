const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    app: path.resolve("src", "index.tsx"),
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },

  output: {
    path: path.resolve("build"),
    publicPath: "/",
    filename: "static/js/[name].[fullhash].js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },

      {
        test: /\.(png|jp(e*)g|gif)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "image/[name].[ext]",
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.svg?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("public", "index.html"),
      filename: "index.html",
      favicon: "../src/assets/svg/logo-temp.svg",
      minify: isProduction
        ? {
            collapseWhitespace: true,
            removeComments: true,
          }
        : false,
    }),
    new ForkTsCheckerWebpackPlugin(),
    new EnvironmentPlugin(["NODE_ENV"]),
  ],
};
