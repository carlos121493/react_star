# react_star [![spm version](http://spmjs.io/badge/react_star)](http://spmjs.io/package/react_star)

---

star project with react

## Install

```
$ spm install react_star --save
```

## Usage

```js
var react_star = require('react_star');
// use react_star
```

参数配置
---

# 整体相关
- starNum[number][默认5]:总共需要显示星星的数量
- initNum[number][默认0]:起始高亮星星的数值
- half[bool][默认false]:是否支持半颗星的情况
- style[object][默认{}]:星星的样式必须符合react的style样式
- className[string][默认""]:默认class可多个

# 星星相关
- color[bool][默认#ff8208]:星星的颜色,默认黄色
- size[number][默认15]:默认星星的大小,默认15px

# 开启事件
- useHover[bool][默认false]:是否支持hover确定数量(默认click确定数量，hover会显示，但是移出的时候回回到之前的数量),
- disableClick[bool][默认false]:是否不开启点击事件,
- disableHover[bool][默认false]:是否不开启hover事件

# 事件相关[默认为空函数]
- 统一参数function(event,num){}
- event是鼠标的事件，num是鼠标当前触发交互的星星
- hover:鼠标移动，移入，移出事件()
- click:鼠标点击事件()

其他扩展情况可通过继承组件来进行

---

案例效果
---

## 只显示星星
````html
<div class="star_container"></div>
````

````javascript
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var StarBar = require('StarBar');
var options = {
	"disableClick":true,
	"disableHover":true
}

ReactDOM.render(
  <StarBar {...options} />,
  $(".star_container")[0]
);
````

## 改变整体参数

````html
<style type="text/css">
.ceshi{
	padding: 0 10px;
}
</style>
<div class="star_container"></div>
````

````javascript
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var StarBar = require('StarBar');
var options = {
	"initNum":3.5,
	"starNum":20,
	"half":true,
	"style":{"backGround":"#000"},
	"className":"ceshi"
}

ReactDOM.render(
  <StarBar {...options} />,
  $(".star_container")[0]
);
````

## 改变星星参数

````html
<div class="star_container"></div>
````

````javascript
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var StarBar = require('StarBar');
var options = {
	"color":"#0ae",
	"size":20
}

ReactDOM.render(
  <StarBar {...options} />,
  $(".star_container")[0]
);
````


## 改变回调参数

````html
<div class="star_container"></div>
````

````javascript
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var StarBar = require('StarBar');
var options = {
	"hover":function(event,num){
		if(event.type == "mouseout"){
			console.log(num);
		}
	},
	"click":function(event,num){
		console.log(event.clientX);
	}
}

ReactDOM.render(
  <StarBar {...options} />,
  $(".star_container")[0]
);
````