<template>
	<div id="hot">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			    <span>热门</span>
			</div>
			<div v-for="(item, i) in hotList">
				<router-link :to="'/detial/'+item.id" class="text" >
					<i>{{i+1}}</i> 、{{item.art_title}}
				</router-link>
			</div>
		</el-card>
	</div>
</template>

<script>
import articleList from '../assets/articleList.json'
import {getHotArticle} from '../config/api.js'

export default {
	name: 'hot',
	data(){
		return {
			hotList: []
		}
	},
	mounted: function(){
		this.$nextTick(function(){
			this.getHotArticle();
		})
	},
	methods: {
		// 获取热门文章标题列表
		getHotArticle: function(){
			var params = {
				hot: true
			}
			this.$http.post(getHotArticle, params).then(res=>{
				this.hotList = res.data.result;
			}).catch(err=>{
				console.log(err);
			})
		}
	}
}
</script>

<style>
	#hot .text{
		display: block;
		text-decoration: none;
		color: #000;
		padding: 5px 0;
	}
	#hot .text:hover{
		color: #2185d0;
		font-weight: bold;
	}
</style>