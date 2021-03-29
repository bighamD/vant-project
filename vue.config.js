const {resolve} = require('path');

module.exports = {
  lintOnSave: false,
  publicPath: './',

  configureWebpack: {
    mode: 'development',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // publicPath: '.'
    devServer: {
      proxy: {
        '/': {
          // target: 'http://116.62.161.102/education/a',
          target: 'https://8.136.232.173/education/a',

          pathRewrite: { '^/': '' },
        },
      },
    }
  },
  chainWebpack(config) {
    config
      .optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          vantUi: {
            name: 'chunk-vant', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?vant(.*)/ // in order to adapt to cnpm
          },
          axios: {
            name: 'chunk-axios', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?axios(.*)/ // in order to adapt to cnpm
          },
          common: {
            name: 'chunk-commons',
            // minSize: 10,
            minChunks: 3, //  minimum common number/
            priority: 5,
            reuseExistingChunk: true,
            chunks: 'initial',
          }
        }
      })
  }
};
