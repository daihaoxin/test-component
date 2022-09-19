const path = require('path');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./devServer');
module.exports = {
  entry: './src/select.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    clean: true,
    filename: 'webpack-numbers.js',
    // library: 'webpackNumbers',
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
    path: path.resolve(process.cwd(), 'dist'),
  },
  /**
   * 逐个或者使用一个正则表达式，来排除它们
   */
  /* externals: [
    'library/one',
    'library/two',
    // 匹配以 "library/" 开始的所有依赖
    /^library\/.+$/,
  ], */
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  devServer,
  module: {
    rules: [...rules],
  },
  resolve: {
    /**
     * 解析目录时要使用的文件名。
     */
    mainFiles: ['index'],
    extensions: ['.ts', '.tsx', '.vue', '.js', '.json', '.jsx'],
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
  },
  plugins,
  optimization: {
    moduleIds: 'deterministic',
    /**
     * 将runtime包装器提取出来
     */
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
