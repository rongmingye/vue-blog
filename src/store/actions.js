export default {
    initData: function(context) {
        context.commit('getArticleList');  
        context.commit('getMusicList');  
    },
}