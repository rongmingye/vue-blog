<!-- archive.vue 文章归档页面 -->

<template>
	<div id="archive">
		<ul>
			<li v-for="item in articleList" class="date-article">
				<i class="el-icon-success ic"></i><span class="date">{{item.createTime}}</span>
				<router-link :to="'/detial/'+item.id" class="title">{{item.title}}</router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import {getArticleListByDate} from '../config/api.js'

	export default {
		data(){
			return {
				articleList: []
			}
		},
		mounted: function(){
			this.$nextTick(function(){
				this.getArticleListByDate();
			})
		},
		methods: {
			// 文章归档，获取所有文章
			getArticleListByDate: function(){
				this.$http.post(getArticleListByDate).then(res=>{
					this.articleList = res.data.result;
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>

<style>
	#archive .date-article{
		position: relative;
		color: #999;
		border-left: 1px solid #d9d9d9;
		padding: 16px 0 16px 25px;
	}
	#archive .date{
		margin-right: 20px;
	}
	#archive .ic{
		position: absolute;
		left: 0px;
	    top: 50%;
	    margin-left: -8px;
	    margin-top: -8px;
	}
	#archive .title{
		color: #999;
	}
	#archive .title:hover{
		text-decoration: underline;
	}
</style>