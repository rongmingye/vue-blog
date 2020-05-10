<!-- detial.vue 详细页面 -->

<template>
	<div id="detial">
		<div class="title">
			<h3>{{article.title}}</h3>
			<div class="meta">
				<span>{{article.createTime}}</span>
				<span>publish by {{article.author}}</span>
				<span>浏览 {{article.readNum}}</span>
			</div>
		</div>
		<div class="content" v-html="article.content"></div>
	</div>
</template>

<script>
import {getArticleById} from '../config/api.js'
import {addReadNum} from '../config/api.js'
import {articleFormat} from '../common/util.js'

	export default {
		data(){
			return {
				article: [],
			}
		},
		mounted: function(){
			this.$nextTick(function(){
				this.getArticleData();
				this.addReadNum();
			})
		},
		methods: {
			// 根据id获取文章
			getArticleData: function(){
				var params =  {
					id: this.$route.params.id
				}
				this.$http.post(getArticleById, params).then(res=>{
					this.article = res.data.result;
					this.article.content = articleFormat(res.data.result.content);
				}).catch(err=>{
					console.log(err);
				})
			},
			// 阅读加一
			addReadNum: function(){
				var params =  {
					id: this.$route.params.id
				}
				this.$http.post(addReadNum, params).then(res=>{
					
				}).catch(err=>{
					console.log(err);
				})
			}

		},
		watch: {
			$route: {
				handler: function(val, oldVal){
					this.getArticleData();
				},
				deep: true
			}
		}
	}
</script>

<style>
	#detial .title{
		text-align: center;
		border-bottom: 2px solid #ccc;
	}
	#detial .title h3{
		font-weight: bolder;
		font-size: 24px;
		height: 40px;
		line-height: 40px;
	}
	#detial .title .meta{
		font-size: 12px;
		padding: 10px 0;
	}
	#detial .title .meta span{
		margin-right: 20px;
	}

	#detial .content{
		margin-top: 20px;
		padding: 0 20px 0 20px;
	}
</style>