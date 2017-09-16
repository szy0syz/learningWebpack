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
- `webpack [entry.js] [output.js]`
- `webpack -w`  提供watchfa方法，实时进行打包更新
- `webpack -p`  对打包后的文件j信息压缩
- `webpack -d`  提供 source map，方便调试
- `webpack --config`  以某个 config作为打包
- `webpack --help`  更多命令
- 如果全局安装后最好像gulp一样在项目内也安装一道：`npm install webpack --save-dev`


## demo1：CLI方式使用加载器

- 使用cli命令`webpack ./entry.js bundle.js`生成js和css的打包文件`bundle.js`
    - 跟 `gulp` 原理一样，`require`代码文件流是从又往左流的：首先最后边读取`style.css`文件，然后经过`css-loader` 进行转换，再经过 `style-loader` 转换成可以加载js代码，最后丢该webpack就行了
    - 具体代码请见[demo1](/demo1/entry.js)

```js
// 通过两个loader先转换再插入到打包流中
require('!style-loader!css-loader!./style.css');
document.write('hello');
```