module.exports = {
  entry: "./entry.js", // 设置打包的入口文件，每有一个键值对，就是一个入口文件
  output: { // 配置打包结果的输出
    path: __dirname,       // 定义输出的文件夹
    filename: "bundle.js" // 定义了打包结果文件的名称
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};