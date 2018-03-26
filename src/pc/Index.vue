<template>
	<div class="container" @mousewheel="handleMouse">
		<div class="header-bg">
			<div class="header-lbt">
				<el-carousel indicator-position="outside" arrow="never" :height="bgheight + 'px'" interval="2000">
				    <el-carousel-item v-for="(item, index) in headerbgs" :key="index">
				      <img :src="item.img" />
				    </el-carousel-item>
				</el-carousel>
			</div>
			<div class="introduce" :style="{height:bgheight + 'px'}">
				<div class="box">				
					<div class="logo"></div>
					<h1>哈哈哈哈</h1>
					<h3>个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍</h3>
					<button @click="handleRun">关于我</button>
				</div>
			</div>
		</div>
		<!-- 导航 -->
		<div class="nav" :class="{posit: isPosit}">
			<ul>
				<li :class="{active:pages == 1}" @click="pages = 1">首页</li>
				<li :class="{active:pages == 2}" @click="pages = 2">关于我</li>
				<li :class="{active:pages == 3}" @click="pages = 3">技能</li>
				<li :class="{active:pages == 4}" @click="pages = 4">经历</li>
				<li :class="{active:pages == 5}" @click="pages = 5">项目</li>
				<li :class="{active:pages == 6}" @click="pages = 6">联系我</li>
			</ul>
		</div>
		<!-- 关于我 -->
		<div class="about">
			<h2><span>关于我</span></h2>
			<div class="content">
				<p>我是来自深圳的前端开发工程师，2014年的中山大学软件工程本科毕业生，2014年4月份开始第一份前端开发工作，至今已经有两年多前端开发经验。</p>
				<p>有着坚实的前端开发基础，并且一直保持对新技术的学习热情。熟练使用HTML5、CSS3以及JavaScript(jQuery,Zepto)；对流行的前端开发框架，比如Bootstrap3和Foundation5都有实际开发项目；能熟练使用前端开发工具，比如Gulp.js、Seajs、WebPack和Less等等；学习了AngularJS和React，但更加喜欢轻巧、高性能、可组件化的MVVM框架Vue.js，并在实际的开发项目中使用；学习了Node.js(Express)、ECMAScript6，MongoDB等技术，希望在往后的开发项目中得到实践提升。这里是 自己的前端开发记录 。后面也有新的前端开发实习生加入团队，锻炼了一定的管理能力。</p>

				<p>乐于分享，长期活跃在GitHub上，有不少开源的项目。有 个人的技术博客 ，使用Jekyll搭建，分享一些前端开发经验和工具。 在前端开发社区发布过教程，比如 一个简单的 vue.js 实践教程 ，希望自己的学习经验能带给别人帮助。 英语过了六级，对英文书籍和网站的阅读无太多障碍，翻译了 《The Majesty Of Vue.js》 一书。</p>
				<p>爱读书，爱听歌，爱游泳，爱跑步，爱爬山。代码不是生活的全部。</p>
			</div>
			<a href="javascript:void(0)" class="button">前往我的GitHub</a>
		</div>
		<!-- 技能 -->
		<div class="skill">
			<h2><span>技能</span></h2>
			<p class="title">前端开发需要一个持续和长期的学习，需要在各种领域都有充足的知识储备，需要对新技术的学习保持热情。前端开发工程师技术栈中最重要的就是原生JavaScript，《JavaScript高级编程》和《Javascript权威指南》都通读了几遍，最近重新拜读《JavaScript语言精粹》一书。</p>
			<div class="chart">
				
			</div>
		</div>
		<!-- 经历 -->
		<div class="live">
			<h2><span>经历</span></h2>
		</div>
		<!-- 项目 -->
		<div class="project">
			<h2><span>项目</span></h2>
		</div>
		<!-- 联系我 -->
		<div class="relation">
			<h2><span>联系我</span></h2>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				headerbgs:[
					{img:"../../static/img/header-bg1.jpg"},
					{img:"../../static/img/header-bg2.jpg"},
					{img:"../../static/img/header-bg3.jpg"},
					{img:"../../static/img/header-bg4.jpg"}
				],
				bgheight:500,
				isPosit:false,
				pages:1
			}
		},
		methods:{
			handleMouse(e){
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight,
					scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollHeight >= windowHeight){
					this.isPosit = true;
				}else if(scrollHeight < windowHeight){
					this.isPosit = false;
				}
				if(e.deltaY < 0) {
					console.log("鼠标向上滚了");
				}
				if(e.deltaY > 0) {
					console.log("鼠标向下滚了")
				}
			},
			handleRun(){
				scrollTo(0, 800)
			}
		},
		watch:{
			pages: function (newP, oldP){
				var otop = 0;
				if(newP == 1) {
					otop = 0;
					this.isPosit = false;
				}
				if(newP == 2) {otop = 800;}
				if(newP == 3) {otop = 1500;}
				if(newP == 4) {otop = 2300;}
				if(newP == 5) {otop = 3050;}
				if(newP == 6) {otop = 4000;}
				var timer = null;
				cancelAnimationFrame(timer);
				timer = requestAnimationFrame(function fn(){
					var oTop = document.body.scrollTop || document.documentElement.scrollTop;
					if(oTop > otop){
						scrollTo(0,oTop-50);
						timer = requestAnimationFrame(fn);
					}else{
						cancelAnimationFrame(timer);
					} 
				});
			}
		},
		created(){
			var height = document.documentElement.clientHeight || document.body.clientHeight;
			this.bgheight = height;
		}
	}
</script>

<style>
	.container{
		width: 100%;
	}
	.el-carousel__indicators{
		display: none;
	}
	.header-bg{
		position: relative;
	}
	.introduce{
		position: absolute;
		top: 0;
		z-index: 999;
		width: 100%;
	}
	.introduce>.box{
		margin: auto;
		margin-top: 200px;
		color: #fff;
		text-align: center;
		line-height: 60px;
	}
	.introduce>.box>.logo{
		width: 100px;
		height: 100px;
		border: 3px solid;
		border-radius: 50%;
		border-top-color: green;
		border-left-color: pink;
		border-right-color: #fff;
		border-bottom-color: yellowgreen;
		margin: auto;
		-webkit-animation:circle 3s infinite linear;
	}
	@-webkit-keyframes circle{
		0%{
			transform:rotate(0deg);
		}
		100%{
			transform:rotate(360deg);
		}
	}
	.introduce>.box>h1{
		font-size: 48px;
	}
	.introduce>.box>h3{
		font-weight: normal;
	}
	.introduce>.box>button{
		background: #ef7674;
		color: #fff;
		border: none;
		border-radius: 3px;
		width: 100px;
		height: 40px;
		font-size: 16px;
		outline: none;
		cursor: pointer;
	}
	.nav{
		height: 140px;
		width: 100%;
		background: #fff;
		z-index: 9999;
	}
	.posit{
		position: fixed;
		top: 0;
	}
	.nav ul{
		width: 50%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		color: #5b4c5c;
		font-size: 20px;
		font-weight: bold;
		line-height: 140px;
	}
	.active{
		color: #ef7674;
	}
	.nav ul li:hover{
		color: #ef7674;
		cursor: pointer;
	}
	/*关于我*/
	.about{
		height: 650px;
		background: #f3f3f3;
		padding: 120px;
		color: #5b4c5c;
	}
	h2{
		text-align: center;
		color: #5b4c5c;
		font-size: 40px;
		font-weight: normal;
		margin-bottom: 30px;
	}
	h2>span{
		border-bottom: 5px solid #ef7674;
	}
	.content{
		line-height: 25px;
	}
	.content>p{
		margin-top: 5px;
	}
	.about>.button{
		display: block;
		width: 150px;
		height: 50px;
		line-height: 45px;
		text-align: center;
		margin-top: 40px;
		border: 3px solid #5b4c5c;
		border-radius: 10px;
		background: #f3f3f3;
		color: #5b4c5c;
		font-size: 16px;
		font-weight: bold;
	}
	.about>.button:hover{
		background: #5b4c5c;
		color: #fff;
	}
	/*技能*/
	.skill{
		height: 800px;
		padding: 120px;
	}
	.skill>.title{
		width: 70%;
		margin: auto;
		line-height: 25px;
		color: #5b4c5c;
	}
	.skill>.chart{
		width: 80%;
		margin: auto;
	}
	/*经历*/
	.live{
		height: 800px;
		background: #f3f3f3;
		padding: 120px;
	}
	/*项目*/
	.project{
		height: 800px;
		padding: 120px;
	}
	/*联系我*/
	.relation{
		height: 800px;
		background: #f3f3f3;
		padding: 120px;
	}
</style>