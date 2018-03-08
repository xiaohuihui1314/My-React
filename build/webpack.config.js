const webpack = require("webpack"),
    path = require("path"),
    // html模板
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    // 打包版本时间戳
    version = require("./version"),
    // 将要处理的目录包括进来
    APP_PATH = path.resolve(__dirname, '../src');
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件
const assetsPath = function(_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? "static"
        : "static"
    return path.posix.join(assetsSubDirectory, _path)
};
module.exports = {
    /*
     context 应该配置为绝对路径，假如入口起点为src/main.js，则可以配置：
     {
     context: path.resolve('./src'),
     entry: './main.js'
     }
     */
    context: path.resolve(__dirname, '../src'),
    // 配置页面入口js文件
    entry: [
        // 一定要加上，否则代码修改页面不刷新
        'webpack-hot-middleware/client?reload=true',
        // 主程序入口
        './main.js'
    ],
    watch: true,
    // 配置打包输出相关
    output: {
        // 打包输出目录
        path: version("dist"),
        // 入口js的打包输出文件名
        filename: '[name].[hash].js',
        // 按需加载的文件命名
        chunkFilename: '[name].[chunkhash:8].js'
    },
    devtool: 'source-map',//调试
    module: {
        /*
         配置各种类型文件的加载器, 称之为loader
         webpack当遇到import ... 时, 会调用这里配置的loader对引用的文件进行编译
         */
        rules: [
            {
                /*
                 使用babel编译ES6/ES7/ES8为ES5代码
                 使用正则表达式匹配后缀名为.js的文件
                 */
                test: /\.js$/,
                // include 必须匹配选项
                include: APP_PATH,
                // exclude 排除node_modules目录下的文件, npm安装的包不需要编译
                exclude: /node_modules/,
                /*
                 use指定该文件的loader, 值可以是字符串或者数组.
                 使用数组可以让文件传入多个loader，loader的处理顺序是从最后一个开始
                 babel-loader用来编译js文件.
                 */
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                // scss需要下载sass-loader、node-sass
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        // 自动补全的扩展名
        extensions: ['.js', '.scss', '.json', '.css'],
    },
    /*
     配置webpack插件
     plugin和loader的区别是, loader是在import时根据不同的文件名, 匹配不同的loader对这个文件做处理,
     而plugin, 关注的不是文件的格式, 而是在编译的各个阶段, 会触发不同的事件, 让你可以干预每个编译阶段.
     */
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // html模板
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../template/index.html'),
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        //热加载
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        //自动注入库定义
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
        }),
        // new OpenBrowserPlugin({url: 'http://localhost:8088'})
    ]
};