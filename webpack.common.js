const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/cards.html',
      filename: './cards.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),

    // Страницы раздела статей (articles)
    new HtmlWebpackPlugin({
      template: './src/articles/cosmic-distance.html',
      filename: './articles/cosmic-distance.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/gravity.html',
      filename: './articles/gravity.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/universe.html',
      filename: './articles/universe.html'
    }),

    // Страницы раздела карточек (cards)
    new HtmlWebpackPlugin({
      template: './src/cards/asteroid.html',
      filename: './cards/asteroid.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/cards/black-hole.html',
      filename: './cards/black-hole.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/cards/galaxy.html',
      filename: './cards/galaxy.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/cards/nebula.html',
      filename: './cards/nebula.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/cards/planet.html',
      filename: './cards/planet.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/cards/star.html',
      filename: './cards/star.html'
    }),

    // Страницы раздела тестов (tests)
    new HtmlWebpackPlugin({
      template: './src/tests/dark.html',
      filename: './tests/dark.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/space-test.html',
      filename: './tests/space-test.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/star-test.html',
      filename: './tests/star-test.html'
    })

    // Article
    // new HtmlWebpackPlugin({
    //   template: './src/articles/superorganisms/S_Popup.html',
    //   filename: './superorganisms/S_Popup.html'
    // }),

    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/analytics.html'),
    //     location: 'analytics',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
