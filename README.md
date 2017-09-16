# learningWebpack
Jerry learning wepback

## 概念
webpack是一个模块打包器。任何静态资源都可以视作模块，然后模块之间也可以相互依赖，通过webpack对模块进行处理后，可以打包成我们想要的静态资源。

## 特点

- 支持CommonJS和AMD模块，意思也就是我们基本可以无痛迁移旧项目；
- 支持模块加载器和插件机制，可以对模块灵活定制。特别是`babel-loader`，有效的支持es6；
- 可以通过配置，打包成多个文件。有效利用浏览器的缓存功能提升性能；
- 将样式文件和图片等静态资源也可以视为模块进行打包。配合`loader`加载器，可以支持`sass`、`less`等CSS预处理器；
- 内置有`source map`，即使打包在一起依旧方便调试。

## 安装及使用

- `npm install webpack -g`
- webpack [entry.js] [output.js]
- webpack -w  提供watchfa方法，实时进行打包更新
- webpack -p  对打包后的文件j信息压缩
- webpack -d  提供 source map，方便调试
- webpack --config  以某个 config作为打包
- webpack --help  更多命令
- 如果全局安装后最好像gulp一样项目内也安装一道：`npm install webpack --save-dev`
