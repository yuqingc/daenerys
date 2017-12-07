const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: {
        vendor: ['react', 'react-dom'],
        index: './src/index.tsx'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),//用来删除未引用的模块(dead code)
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),//把环境变量设为 production, react 等库会自动根据该环境变量优化代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
            }),//把引用的第三方库全部打包在vendor中，下次浏览器可以缓存这一部分
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
            }),
        new webpack.HashedModuleIdsPlugin()//解决vendor的hash变化的问题，用于生产环境
    ],
    output: {
        filename: '[name].[chunkhash].js',
    }
});