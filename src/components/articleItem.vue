<template>
	<div class="article_card clearfix">
		<div class="card_left float_left">
			<img class="item_logo" src="" alt="">
		</div>
		<div class="card_right float_left" >
			<h4 class="item_title"><router-link :to="'/detial/'+article.id">{{article.title}} </router-link></h4>
			<div class="item_tags"><span v-for="(tag, index) in article.tags" :key="index" class="tag">{{tag}}</span></div>
			<div class="item_desc">{{article.description}}</div>
			<div class="item_meta">
				<span>{{article.createTime}}</span>
				<span>publish by {{article.author}}</span>
				<span>浏览 {{article.readNum}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'articleItem',
	props: ['article'],
}
</script>

<style>
	.article_card{
		display: block;
		color: #000;
		border: 1px solid #ebeef5;
		margin-top: 10px;
		padding: 10px 5px;
	}
	.article_card:hover{
		box-shadow: 0 0 5px 1px #ddd;
	}
	.card_left {

	}
	.item_logo {
		width:175px;
		height:119px;
	}
	.card_right {
		width: 64%;
		padding-left: 10px;
	}
	.item_title{
		font-size: 24px;
		font-weight: bold;
		-webkit-margin-before: 0;
   		-webkit-margin-after: 0;
	}
	.item_title a:hover{
		color: #2185d0;
	}
	.item_tags{
		margin-top: 10px;
	}
	.tag{
		display: inline-block;
		height: 32px;
		line-height: 32px;
		font-size: 12px;
		padding: 0 10px;
		border: 1px solid rgba(64,158,255,.2);
		margin-right: 10px;
		color: #409eff;
		border-radius: 4px;
		background-color: rgba(64,158,255,.1);
	}
	.item_desc{
		text-indent: 20px;
		font-size: 14px;
		margin: 10px 0;
	}
	.item_meta{
		font-size: 12px;
		font-weight: bolder;
		font-style: italic;
	}
	.item_meta span{
		margin-right: 20px;
	}
	
</style>