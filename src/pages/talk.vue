<!-- talk.vue 啐言啐语页面 -->

<template>
	<div>
		<div v-for="item in articleList">
			<articleLi v-bind:item="item" />
		</div>
	</div>
</template>

<script>
	import {getArticleList} from '../config/api.js'
	import articleLi from '../components/articleLi.vue'
	export default {
		components: {articleLi},
		data(){
			return {
				articleList: []
			}
		},
		mounted: function(){
			this.$nextTick(function(){
				this.getArticles();
			})
		},
		methods: {
			// 获取文章
			getArticles: function(){
				var params = {
					type: "talk"
				}
				this.$http.post(getArticleList, params).then(res=>{
					this.articleList = res.data.result;
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>

<style>
	
</style>