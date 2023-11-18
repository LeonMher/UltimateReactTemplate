const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", //controls generation of source maps
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("DevEnvironmentVariable"),
    }),
  ],
};
