<template>
	<div id="colletion">
		<ul>
			<li v-for="item in colletionList" class="colletion">
				<h4 class="title"><a v-bind:href="item.colletion_link" target="_blank">{{item.colletion_title}}</a></h4>
				<div class="desc">{{item.colletion_desc}}</div>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import {getColletionList} from '../config/api.js'
	export default {
		data(){
			return {
				colletionList: []
			}
		},
		mounted: function(){
			this.$nextTick(function(){
				this.getColletionList();
			})
		},
		methods: {
			// 获取收藏列表
			getColletionList: function(){
				this.$http.post(getColletionList).then(res=>{
					this.colletionList = res.data.result;
				}).catch(err=>{
					console.log(err);
				})
			}
		}

	}
</script>

<style>
	#colletion{

	}
	#colletion .colletion{
		display: block;
		color: #000;
		border: 1px solid #ebeef5;
		margin-top: 10px;
		padding: 20px;
	}
	#colletion .title{
		font-size: 24px;
		font-weight: bold;
		-webkit-margin-before: 0;
   		-webkit-margin-after: 0;
	}
	#colletion .title a:hover{
		color: #2185d0;
	}
	#colletion .desc{
		text-indent: 20px;
		padding-top: 10px;
	}
</style>