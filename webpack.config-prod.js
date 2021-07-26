var path = require("path");

/**
 *
 */
module.exports = {
  watch: false,
  mode: "production",
  entry: {
    preload: path.resolve(__dirname, "./src/index.ts"),
    style: path.resolve(__dirname, "./src/style.ts"),
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",

          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
};
