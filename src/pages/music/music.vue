<template>
    <div class="" id="page_music">
        <ul class="music_list_wrapper">
            <li class="muisc_list_item" v-for="(item, index )in musicList" :key="index"></li>
        </ul>
    </div>
</template>

<script>

import { mapState, mapGetters } from "vuex";

export default {
    name: "page_music",
    data: function() {
        return {
       
        }
    },
    computed: {
        ...mapState({
            musicList: 'musicList',
            currentMusic: currentMusic,
        })
    },

    methods: {

    },
}
</script>

<style scoped>


</style>