# element

https://jacobhsu.github.io/element/


[Element](https://element.eleme.cn/#/zh-CN)，一套為開發者、設計師和產品經理準備的基於 Vue 2.0 的桌面端組件庫  
[快速上手](https://element.eleme.cn/#/zh-CN/component/quickstart)  

ElementUI/[vue-cli-plugin-element](https://github.com/ElementUI/vue-cli-plugin-element) 

First you need to install `@vue/cli` globally 
```js
vue create element
merge 
cd element
```

[npm 安装](https://element.eleme.cn/#/zh-CN/component/installation) 

`npm i element-ui -S`  

package.json
```js
  "dependencies": {
    "core-js": "^2.6.5",
    "element-ui": "^2.7.2",
    "vue": "^2.6.10"
  },
```

多國語兼容 `vue-i18n`  

組件 [內置過渡動畫](https://element.eleme.cn/#/zh-CN/component/transition)


## Docs

[Button 按钮](https://element.eleme.io/#/zh-CN/component/button)    
[Layout 布局](https://element.eleme.io/#/zh-CN/component/layout)  
[Select 选择器](https://element.eleme.io/#/zh-CN/component/select)

## debug

`<style lang="scss" scoped>`

Failed to resolve loader: `sass-loader`
You may need to install it.

Vue2+element UI 项目中需要用到 `<style lang="scss">`
`npm install node-sass`  


## router

`npm i vue-router --save`  

## npm 

[![NPM](https://nodei.co/npm/gh-pages.png?downloads=true&stars=true)](https://nodei.co/npm/gh-pages/)  https://jacobhsu.github.io/element/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
