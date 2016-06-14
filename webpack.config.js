module.exports = {
  entry: "./app/app.jsx",
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
