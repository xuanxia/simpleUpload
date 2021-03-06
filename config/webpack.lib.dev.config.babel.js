/**
 * 用于输出 ru.development.js 文件
 **/

import merge from 'webpack-merge';
import baseConfig from './webpack.lib.base.config.babel.js';

// 基本库
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 从基础设置继承

const config =  merge.smart(baseConfig, {
    output: {
        filename: '[name]/development.js',
    },

    plugins: [
        // 输出包文件分析图
        new BundleAnalyzerPlugin()
    ]
});

export default config;