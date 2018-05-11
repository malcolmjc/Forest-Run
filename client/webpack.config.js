var path = require("path");
var webpack = require("webpack");

var CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientDest = "build";

module.exports = env => {
  return {
    entry: "./app/app.ts",
    output: {
      path: path.resolve(__dirname, clientDest),
      filename: "bundle.js",
      publicPath: "/"
    },
    devtool: "eval-source-map",
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.tsx?$/,
          loader: "tslint-loader",
          exclude: /node_modules/,
          options: { failOnHint: true, configuration: require("./tslint.json") }
        },
        { test: /\.tmx?$/, loader: "tmx-loader" },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          exclude: /node_modules/
        },
        { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
        { test: /\.(jpe?g|png|gif|svg|json)$/i, loader: "file-loader" }
      ]
    },
    resolve: { extensions: [".tsx", ".ts", ".js", ".json"] },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: true,
        include: /\.min\.js$/
      }),
      new CopyWebpackPlugin([{ from: "assets", to: "mapAssets" }]),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
        inject: "body"
      })
    ]
  };
};
