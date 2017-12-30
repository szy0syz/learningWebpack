# learningWebpack
Jerry learning wepback

## 概念
webpack是一个模块打包器。任何静态资源都可以视作模块，然后模块之间也可以相互依赖，通过webpack对模块进行处理后，可以打包成我们想要的静态资源。

## 版本

> "webpack": "^3.6.0"

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

## demo0：webpack初体验

- `index.html`引入`bundle.js`
- webpack使用入口文件打包`wepback ./enrty bundle.js`

我靠，这么弱鸡的demo。其实demo是弱鸡了点，但我们其实是想拿到最简单的webpack打包代码，看看webpack到底是咋回事。

```js
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.write('hello');

/***/ })
/******/ ]);
```

- 以下是解析：
  1. 1 
  2. 2
  3. 3
  4. 4

## demo1：CLI方式使用加载器

- 使用cli命令`webpack ./entry.js bundle.js`生成js和css的打包文件`bundle.js`
    - 跟 `gulp` 原理一样，`require`代码文件流是从又往左流的：首先最后边读取`style.css`文件，然后经过`css-loader` 进行转换，再经过 `style-loader` 转换成可以加载js代码，最后丢该webpack就行了
    - 具体代码请见[demo1](/demo1/entry.js)

```js
// 通过两个loader先转换再插入到打包流中
require('!style-loader!css-loader!./style.css');
document.write('hello');
```

## demo2：config方式使用加载器

- 新建webpack.config.js
- 同时使用`style-loader` 和 `'css-loader'`
- 在entry.js相应地方引入模块`style.css`

```js
// webpack.config.js
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

///////////////////

// entry.js
// css已经被当做模块加载大流中，我们直接引用
require('./style.css');
document.write('hello');
```

## demo3: 插件



## demo4：url-loader



## demo5：别名

## Log

- 2017-12-30：完全不记得我写过这个东西啊，我的文献哪里来的？我晕死！
