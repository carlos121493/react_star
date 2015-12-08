'use strict'
var React = require('react');
var _ = require('lodash');
var noop = function(){};
//star
var Star = React.createClass({
	getClassName:function(){
		var num = this.props.num;
		var choosed = this.props.choosed;
		if(num+0.5===choosed && this.props.ifHalf){
			return "half_star";
		}
		return num<choosed?"all_star":"zero_star";
	},
	handleHover:function(e){
		this.props.starHover({event:e,num:this.props.num});
	},
	handleClick:function(e){
		this.props.starClick({event:e,num:this.props.num});
	},
	render:function(){
		// body...
		return (<li ref="star_item" className={this.getClassName()} data-num={this.props.num} onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleHover} onMouseMove={this.handleHover}></li>);
	}
})

//stars collections
var StarBar = React.createClass({
	PropTypes:{
		initNum:React.PropTypes.number,
		starNum:React.PropTypes.number,
		color:React.PropTypes.string,
		half:React.PropTypes.bool,
		size:React.PropTypes.number,
		style:React.PropTypes.object,
		className:React.PropTypes.string,
		beforeRender:React.PropTypes.func,
		init:React.PropTypes.func,
		hover:React.PropTypes.func,
		click:React.PropTypes.func,
		useHover:React.PropTypes.bool,
		disableClick:React.PropTypes.bool,
		disableHover:React.PropTypes.bool 
	},
	getDefaultProps:()=>{
		return  {
			initNum:0,
			starNum:5,
			color:'#ff8208',
			half:true,//todo
			size:15,
			style:{},
			className:"",
			hover:noop,
			click:noop,
			useHover:false,
			disableClick:false,
			disableHover:false 
		}
	},
	//生命周期
	getInitialState:function(){
		this.currentStar = this.props.initNum
		return {
			num:this.props.initNum
		}
	},
	getOffsetL:function(dom){
		// if(dom.parentElement){
		// 	return dom.offsetLeft + this.getOffsetL(dom.parentElement);
		// }
		return dom.offsetLeft;
	},
	componentDidMount:function(){
		var self = this;
		var container = self.refs.stars_container;
		self.containerL = self.getOffsetL(container.children[0]);
	},
	getSingleW:function(){
		return this.singleW || (this.getOffsetL(this.refs.stars_container.children[1])-this.containerL)
	},
	shouldComponentUpdate:function(){
		return !(this.props.disableClick && this.props.disableHover);
	},
	ifHalfNum:function(num,x,isRemember){
		var self = this;
		var choose_num = num+1;
		if(self.props.half && (x-self.containerL-self.getSingleW()*num)<self.getSingleW()/2){
			choose_num -= 0.5
		}
		isRemember && (self.currentStar = choose_num);
		return choose_num;
	},
	handleClick:function(props){
		var self = this;
		var event = props.event;
		var num = props.num;
		self.setState({num:self.ifHalfNum.call(self,num,event.clientX,true)});

	},
	handleHover:function(props){
		var self = this;
		var event = props.event;
		var num = props.num;
		self.hover && self.hover(event,num);
		//如果是移出事件
		if(event.type=="mouseout"){
			!self.props.useHover && self.setState({num:self.currentStar});
		} else {
			self.setState({num:self.ifHalfNum.call(self,num,event.clientX)});
		}
	},
	getStyles:function(){
		return _.extend({},this.props.style,{
			fontSize:this.props.size,
			color:this.props.color
		});
	},
	render:function(){
		var self = this;
		var stars = _.range(self.props.starNum);
		var classNames = "star_wrapper iconfont "+self.props.className;
		
		return (
			<ul className={classNames} style={self.getStyles()} ref="stars_container">
				{stars.map(function(index){
					return <Star num={index} ifHalf={self.props.half} choosed={self.state.num} starClick={self.handleClick} starHover={self.handleHover} key={index} />;
				})}
			</ul>
		)
	}
})

// module StarBars {
// 	export StarBar
// };
module.exports = StarBar;