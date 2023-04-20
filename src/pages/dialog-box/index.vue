<template>
  <div class="dialog-box">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: '',
    props: {},
    data: function() {
        return {
    }
    },
    created: function() {

  },
    methods: {
  }
}
</script>

<style lang="less" scoped>
.dialog-box {
  width: 100vw;
  height: 100vh;
  background: #fff;
}
</style>