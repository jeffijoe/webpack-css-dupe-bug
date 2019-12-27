const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(_, argv) {
  const prod = argv.mode === "production";
  return {
    mode: "development",
    devtool: "source-map",
    entry: {
      app: path.resolve(__dirname, "src/index.js")
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      publicPath: "/"
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist")
    },
    optimization: {
      minimizer: [] // Disable minification for easier debugging
    },
    plugins: [
      new HtmlWebpackPlugin(),
      prod && new MiniCssExtractPlugin({ filename: "bundle.css" })
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            prod ? MiniCssExtractPlugin.loader : { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[name]__[local]___[hash:base64:5]"
                }
              }
            },
            {
              loader: "sass-loader",
              options: { sassOptions: { outputStyle: "compact" } }
            }
          ]
        }
      ]
    }
  };
};
