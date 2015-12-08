# 评价星星

---

>简易生成星星的组件

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