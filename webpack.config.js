const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
	module.exports = {
	// JavaScript 执行入口文件
	entry : path.resolve(__dirname, './main.js'),
	output : {
		// 把所有依赖的模块合并输出到一个 bundle.js 文件
		filename : 'bundle.js',
		// 输出文件都放到 dist 目录下
		path : path.resolve(__dirname, './dist')
	},
	//设置开发模式
	mode : 'development',
	plugins : [
		// make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
    })
	],

	devServer : {
		contentBase : "./dist", //本地服务器所加载的页面所在的目录
		inline : true, //实时刷新
		hot : true,
		host : '192.168.2.103',
		port : 3000,
		disableHostCheck : true,
	},
	module : {
		rules : [{
				// //编译.vue结尾的文件
				test : /\.vue$/,
				loader : 'vue-loader'
			}, {
				test : /\.css$/,
				loader : 'css-loader'
			}, {
				test : /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader : 'file-loader'
			}
		]
	},

	resolve : {
		alias : {
			'vue' : 'vue/dist/vue.js'
		}
	}
};
