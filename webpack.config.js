const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/index.js",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    contentBase: './dist'
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};