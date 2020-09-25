module.exports = {
	entry: {
		main: "./src/main.js",
		//page2: ["./src/index.js", "./src/main.js"],支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
    },
    output: {
        //path: "./dist/",
        filename: "[name].bundle.js",// page1.bundle.js 和 page2.bundle.js，并存放到 ./dist/js/page 文件夹下。
        //publicPath: "./dist/"    //网站运行时的访问路径。
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        hot: true,
        inline: true,
        progress: true,
        port:9090 //端口你可以自定义
    },
}
