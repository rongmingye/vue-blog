<!-- home.uve 首页 -->
<template>
	<div>
		<div v-for="item in articleList">
			<articleLi v-bind:item="item" />
		</div>
		<p style="text-align: center; height:50px; line-height: 50px; color:#999">
			所有的文章已经被你看完了~
		</p>
	</div>
</template>

<script>
import articleLi from '../components/articleLi.vue'
import articleList from '../assets/articleList.json'
import {getArticleList} from '../config/api.js'

export default {
	name: 'home',
	components: {articleLi},
	data(){
		return {
			articleList: articleList
		}
	},
	mounted: function(){
		this.$nextTick(function(){
			this.getArticles();
		})
	},
	methods: {
		// 获取文章列表
		getArticles: function(){
			var params = {
				type: "home"
			}
			this.$http.post(getArticleList, params).then((res)=>{
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