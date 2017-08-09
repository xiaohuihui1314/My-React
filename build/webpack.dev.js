const express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackConfig = require('./webpack.config.js'),

// 创建一个express实例
    app = express();

// 调用webpack并把配置传递过去
compiler = webpack(webpackConfig);

// 使用 webpack-dev-middleware 中间件
const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    noInfo: true,
});
// 使用 webpack-hot-middleware 中间件
const hotMiddleware = webpackHotMiddleware(compiler);
// 注册中间件
app.use(devMiddleware);
// 注册中间件
app.use(hotMiddleware);
// 监听 8088端口，开启服务器
app.listen(8088, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:8088')
});