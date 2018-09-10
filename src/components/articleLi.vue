<template>
	<div class="clearfix article-card" >
		<div class="left-img" style="float:left;">
			<img src="" alt="" style="height:119px; width:175px;">
		</div>
		<div class="right-content" style="float:left; padding-left:10px; width:64%;">
			<h4 class="item-title"><router-link :to="'/detial/'+item.id">{{item.art_title}} </router-link></h4>
			<div class="item-tags"><span v-for="tag in item.tags" class="tag">{{tag}}</span></div>
			<div class="item-desc">{{item.art_desc}}</div>
			<div class="item-meta">
				<span>{{item.art_timer}}</span>
				<span>publish by {{item.art_author}}</span>
				<span>浏览 {{item.read_num}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'articleLi',
	props: ['item'],
}
</script>

<style>
	.article-card{
		display: block;
		color: #000;
		border: 1px solid #ebeef5;
		margin-top: 10px;
		padding: 10px 5px;
	}
	.article-card:hover{
		box-shadow: 0 0 5px 1px #ddd;
	}
	.article-card .item-title{
		font-size: 24px;
		font-weight: bold;
		-webkit-margin-before: 0;
   		-webkit-margin-after: 0;
	}
	.article-card .item-title a:hover{
		color: #2185d0;
	}
	.article-card .item-tags{
		margin-top: 10px;
	}
	.article-card .tag{
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
	.article-card .item-desc{
		text-indent: 20px;
		font-size: 14px;
		margin: 10px 0;
	}
	.article-card .item-meta{
		font-size: 12px;
		font-weight: bolder;
		font-style: italic;
	}
	.article-card .item-meta span{
		margin-right: 20px;
	}
</style>