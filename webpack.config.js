// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = { 
  
  // https://webpack.js.org/concepts/#entry
  entry: './src/js/index.js',  
  
  // https://webpack.js.org/concepts/output/
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './bundle.js'
  },

  // https://webpack.js.org/concepts/modules/
  module: {
    rules: [
      {
        // Apply rule for .js
        test: /\.js$/,
        exclude: /(node_modules)/,
        // Set loaders to transform files.
        use: {
          loader: 'babel-loader',
        }
      },
      {
        // Apply rule for .css files
        test: /\.css$/,
        // Set loaders to transform files.
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },    
          {
            loader: "css-loader",
          },
          { 
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            }, 
          },
          {
            loader: 'resolve-url-loader'
          },
        ]
      },
      {
        // Apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        // Set loaders to transform files.
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: './images',
              name: "[name].[ext]"
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ]
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        // Set loaders to transform files.
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};