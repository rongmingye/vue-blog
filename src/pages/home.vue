<!-- home.uve 首页 -->
<template>
	<div>
		<div v-for="(item, index) in articleList" :key="index">
			<articleItem :article="item" ></articleItem>
		</div>
		<p style="text-align: center; height:50px; line-height: 50px; color:#999">
			所有的文章已经被你看完了~
		</p>
	</div>
</template>

<script>
import articleItem from '../components/articleItem.vue'
import mockJson from '../assets/articleList.json'
import {getArticleList} from '../config/api.js'

export default {
	name: 'home',
	components: { articleItem },
	data(){
		return {
			articleList: mockJson.articleList
		}
	},
	created: function() {
		// this.getArticles();
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

<style scoped>

</style>