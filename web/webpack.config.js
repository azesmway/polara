const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const appDirectory = path.resolve(__dirname, '../')

const babelConfig = require('../babel.config')

// Babel loader configuration
const babelLoaderConfiguration = {
  test: /\.(tsx|jsx|ts|js)?$/,
  exclude: [
    {
      and: [
        // babel will exclude these from transpling
        path.resolve(appDirectory, 'node_modules'),
        path.resolve(appDirectory, 'ios'),
        path.resolve(appDirectory, 'android')
      ],
      // whitelisted modules to be transpiled by babel
      not: []
    }
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // Presets and plugins imported from main babel.config.js in root dir
      presets: babelConfig.presets,
      plugins: ['react-native-web', ...(babelConfig.plugins || [])]
    }
  }
}

// Image loader configuration
const imageLoaderConfiguration = {
  test: /\.(png|jp(e*)g|gif)$/,
  type: 'asset/resource'
}

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: ['@svgr/webpack', 'url-loader']
}

// File loader configuration
const fileLoaderConfiguration = {
  test: /\.(woff(2)?|ttf|otf|eot|svg|css)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }
  ]
}

module.exports = argv => {
  return {
    entry: path.resolve(appDirectory, 'index'),
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: true,
      port: 8080
    },
    output: {
      clean: true,
      path: path.resolve(appDirectory, 'web/dist'),
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].js'
    },
    resolve: {
      extensions: ['.web.js', '.js', '.web.ts', '.ts', '.web.jsx', '.jsx', '.web.tsx', '.tsx'],
      alias: {
        'react-native': 'react-native-web',
        'react-native-svg': 'react-native-svg-web',
        'react-native-linear-gradient': 'react-native-web-linear-gradient',
      }
    },
    module: {
      rules: [babelLoaderConfiguration, imageLoaderConfiguration, fileLoaderConfiguration, svgLoaderConfiguration]
    },
    plugins: [
      // Fast refresh plugin
      new ReactRefreshWebpackPlugin(),

      // Plugin that takes public/index.html and injects script tags with the built bundles
      new HtmlWebpackPlugin({
        template: path.resolve(appDirectory, 'web/public/index.html')
      }),

      // Defines __DEV__ and process.env as not being null
      new webpack.DefinePlugin({
        __DEV__: argv.mode !== 'production' || true,
        process: { env: {} }
      })
    ],
    optimization: {
      // Split into vendor and main js files
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial'
          }
        }
      }
    }
  }
}
