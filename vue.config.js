const consoleInfo = require('./console');

module.exports = {
    publicPath: './',
    lintOnSave: process.env.NODE_ENV !== 'production',
    outputDir: process.env.outputDir,
    productionSourceMap: false,
    filenameHashing: false,
    configureWebpack: {},
    // 添加打包分析工具,使用方法：npm run build --report
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch');
            }
        }
    },
    devServer: {
        port: 1024,
        host: 'localhost',
        https: false,
        open: true
    }
}
