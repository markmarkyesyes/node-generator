const webpack = require("webpack");
const path = require("path");

let config = require("./webpack-base.config");

config.mode = "development";

config.devServer = {
    contentBase: path.join(__dirname, "public/"),
    publicPath: "/dist/",
    hotOnly: true
};

config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config;