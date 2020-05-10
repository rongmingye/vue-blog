<!-- talk.vue 啐言啐语页面 -->

<template>
	<div>
		<div v-for="(item, index) in articleList" :key="index">
			<articleItem :article="item" ></articleItem>
		</div>
	</div>
</template>

<script>
	import { getArticleList } from '../config/api.js'
	import articleItem from '../components/articleItem.vue'
	import mockJson from '../common/articleList.json'


	export default {
		components: {articleItem},
		data(){
			return {
				articleList: mockJson.articleList
			}
		},
		created: function(){
			// this.getArticles();
		},
		methods: {
			// 获取文章
			getArticles: function(){
				var params = {
					type: "talk"
				}
				this.$http.post(getArticleList, params).then(res=>{
					if(res.code == 200) {
						this.articleList = res.data.result;
					}
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>

<style scoped>
	
</style>