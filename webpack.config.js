var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    /*plugins: [commonsPlugin],*/
    //页面入口文件配置
    entry: './src/js/index.js',
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: 'build.js'
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.js$/,
            loader: 'jsx-loader?harmony'
        }, {
            test: /\.html$/,
            loader: "html"
        }, {
            test: /\.vue/,
            loader: "vue"
        }]
    }
};
