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

export default {
	name: 'home',
	components: { articleItem },
	data(){
		return {
			articleList: this.$store.state.articleList || []
		}
	},
	computed: {
	},
	created: function() {
		this.$store.dispatch('initData')
	},
	methods: {
		
	}
}
</script>

<style scoped>

</style>