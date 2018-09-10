<template>
	<div class="clearfix" style="height: 100%;">
		<h3 style="float: left; width: 20vw; font-size: 24px">O叶</h3>
		<ul class="nav" style="float: left;">
			<li v-for="(item, i) in nav" :class="{active: selectedIndex == i}" @click="selectNav(i)">
				<router-link :to="item.path">{{item.title}}</router-link>		
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		mounted: function(){
			this.$nextTick(function(){
				// 如果path是/manage则记下index，添加管理标签，刷新保持/manage页面
				if(this.$route.path=='/manage'){
					this.nav.push({path:'/manage', title: '管理'});
					this.selectedIndex =  this.nav.length-1;
					sessionStorage.setItem("selectedIndex", this.nav.length-1);
				}
			})
		},
		data(){
			return {
				nav: [
					{path: '/home', title: '首页'},
					{path: '/talk', title: '碎言'},
					{path: '/colletion', title: '收藏'},
					{path: '/archive', title: '归档'},
					{path: '/about', title: '关于'}
				],
				selectedIndex: sessionStorage.selectedIndex || 0,
			}
		},
		methods: {
			// 选择nav, 记下其index
			selectNav: function(i){
				this.selectedIndex = i;
				sessionStorage.setItem("selectedIndex", i);
			}
		}
	}
</script>

<style>
	.nav li{
		float: left;
		padding: 0 15px;
	}
	.nav li a{
		font-size: 18px
	}
	.nav .active a{
		font-weight: bolder;
	}
</style>