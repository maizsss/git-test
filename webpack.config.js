var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //�����
    /*plugins: [commonsPlugin],*/
    //ҳ������ļ�����
    entry: './src/js/index.js',
    //����ļ��������
    output: {
        path: 'dist/js',
        filename: 'build.js'
    },
    module: {
        //����������
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
