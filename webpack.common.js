const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const webpack = require('webpack')
const path = require('path')

const paths = [
  'cosmology',
  'cosmology/articles.html',
  'cosmology/articles/lectures/black-hole.html',
  'cosmology/articles/podcasts/other-planets.html',
  'cosmology/articles/researches/cosmic-distance.html',
  'cosmology/errors/404.html',
  'cosmology/errors/500.html',
  'cosmology/errors/505.html'
]

module.exports = {
  entry: {
    index: './src/index.js',
    filterTags: './src/javascripts/filterTags.js',
    popup: './src/javascripts/popup.js',
    showTests: './src/tests/showTests.js',
    testDistance: './src/tests/cosmic-distance.js',
    bigBang: './src/tests/big-bang.js',
    blackHole: './src/tests/black-hole.js',
    moonFall: './src/tests/moon-fall.js',
    spaceInside: './src/tests/space-inside.js',
    aboutStars: './src/tests/about-stars.js',
    searchVanilla: './src/javascripts/search-vanilla.js',
    reactBasics: './src/javascripts/react-basics.jsx',
    searchReact: './src/javascripts/search.jsx'
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
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
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
      filename: './index.html',
      chunks: ['index', 'popup']
    }),

    // Ошибки
    new HtmlWebpackPlugin({
      template: './src/errors/404.html',
      filename: './errors/404.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/errors/500.html',
      filename: './errors/500.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/errors/505.html',
      filename: './errors/505.html',
      chunks: ['index']
    }),

    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index', 'filterTags']
    }),

    new HtmlWebpackPlugin({
      template: './src/cards.html',
      filename: './cards.html',
      chunks: ['index', 'popup']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html',
      chunks: ['index', 'filterTags']
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index']
    }),

    // Страницы раздела статей (articles)

    // Страницы раздела исследований (researches)
    new HtmlWebpackPlugin({
      template: './src/articles/researches/cosmic-distance.html',
      filename: './articles/researches/cosmic-distance.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/researches/big-bang.html',
      filename: './articles/researches/big-bang.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/researches/black-hole.html',
      filename: './articles/researches/black-hole.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/researches/moon-fall.html',
      filename: './articles/researches/moon-fall.html',
      chunks: ['index']
    }),

    // Страницы раздела лекций (lectures)
    new HtmlWebpackPlugin({
      template: './src/articles/lectures/black-hole.html',
      filename: './articles/lectures/black-hole.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/lectures/universe-secrets.html',
      filename: './articles/lectures/universe-secrets.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/lectures/universe-smell.html',
      filename: './articles/lectures/universe-smell.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/lectures/eclipse.html',
      filename: './articles/lectures/eclipse.html',
      chunks: ['index']
    }),

    // Страницы раздела подкастов (podcasts)
    new HtmlWebpackPlugin({
      template: './src/articles/podcasts/other-planets.html',
      filename: './articles/podcasts/other-planets.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/podcasts/star-weight.html',
      filename: './articles/podcasts/star-weight.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/podcasts/water-oxygen.html',
      filename: './articles/podcasts/water-oxygen.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/podcasts/moon-questions.html',
      filename: './articles/podcasts/moon-questions.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/podcasts/universe-is-not-infinite.html',
      filename: './articles/podcasts/universe-is-not-infinite.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/podcasts/cosmic-web.html',
      filename: './articles/podcasts/cosmic-web.html',
      chunks: ['index']
    }),

    // Страницы раздела тестов (tests)
    new HtmlWebpackPlugin({
      template: './src/tests/cosmic-distance-test.html',
      filename: './tests/cosmic-distance-test.html',
      chunks: ['index', 'testDistance', 'showTests']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/big-bang-test.html',
      filename: './tests/big-bang-test.html',
      chunks: ['index', 'bigBang', 'showTests']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/black-hole-test.html',
      filename: './tests/black-hole-test.html',
      chunks: ['index', 'blackHole', 'showTests']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/moon-fall-test.html',
      filename: './tests/moon-fall-test.html',
      chunks: ['index', 'moonFall', 'showTests']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/space-inside-test.html',
      filename: './tests/space-inside-test.html',
      chunks: ['index', 'spaceInside', 'showTests']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/about-stars-test.html',
      filename: './tests/about-stars-test.html',
      chunks: ['index', 'aboutStars', 'showTests']
    }),

    // Поиск
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['index', 'searchReact']
      // 'searchVanilla' для ванильного поиска
    }),

    // Основы react
    new HtmlWebpackPlugin({
      template: './src/react-basics.html',
      filename: './react-basics.html',
      chunks: ['reactBasics']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/header.html'),
        location: 'header',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new SitemapPlugin({ base: 'https://hseadc.github.io/cosmology/', paths })
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
