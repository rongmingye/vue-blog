import Api from '@/api/index.js';

export default {
    getArticleList: function(state, params) {
        Api.getArticleList().then(res => {
            if (res.code == 200) {
                state.articleList = res.data;
            }
        });
    },

    getMusicList: function(state, params) {
        Api.getMusicList().then(res => {
            if (res.code == 200) {
                state.musicList = res.data;
            }
        });
    },
}
