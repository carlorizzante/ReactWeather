var webpack = require("webpack");

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    root: __dirname,
    alias: {
      // Greeter: "public/components/Greeter.jsx",
      openWeatherMap: "app/api/openWeatherMap.js"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
        // include: /(public)/
      }
    ]
  },
  devtool: "cheap-module-eval-souce-map"
};
