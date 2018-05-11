var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientDest = "build/";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./app/app.ts",
  output: {
    path: path.resolve(__dirname, clientDest),
    filename: "[name].js",
    publicPath: clientDest
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        loader: "tslint-loader",
        exclude: /node_modules/,
        options: {
          failOnHint: true,
          configuration: require("./tslint.json")
        }
      },
      { test: /\.tmx?$/, loader: "tmx-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg|json)$/i,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: "body"
    })
  ]
};
