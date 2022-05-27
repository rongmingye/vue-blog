<template>
  <div class="colletion">
    <ul>
      <li v-for="(item, index) in colletionList" class="colletion-item" :key="index">
        <h4 class="colletion-title">
          <a v-bind:href="item.colletion_link" target="_blank">{{item.colletion_title}}</a>
        </h4>
        <div class="colletion-desc">{{item.colletion_desc}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getColletionList } from '@/api/index.js'

export default {
  data() {
    return {
      colletionList: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      // this.getColletionList();
    });
  },
  methods: {
    // 获取收藏列表
    getColletionList: function() {
      this.$http
        .post(getColletionList)
        .then(res => {
          this.colletionList = res.data.result;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.colletion {
  .colletion-item {
    display: block;
    color: #000;
    border: 1px solid #ebeef5;
    margin-top: 10px;
    padding: 20px;
  }
  .colletion-title {
    font-size: 24px;
    font-weight: bold;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    a:hover {
      color: #2185d0;
    }
  }
  .colletion-desc {
    text-indent: 20px;
    padding-top: 10px;
  }
}
</style>