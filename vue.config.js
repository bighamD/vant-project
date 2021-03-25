module.exports = {
  lintOnSave: false,
  publicPath: './',

  configureWebpack: {
    mode: 'development',
    // publicPath: '.'
    devServer: {
      proxy: {
        '/': {
          target: 'http://116.62.161.102/education/a',
          pathRewrite: { '^/': '' },
        },
      },
    }
  }
};
