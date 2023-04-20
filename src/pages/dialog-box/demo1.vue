<template>
  <div class="page-wrap">
    <my-dialog :left="dialogX" :top="dialogY" @confirm="confirm" @cancel="cancel"></my-dialog>
  </div>
</template>

<script>
// 点击确定/取消按钮，弹框位置随机变化
import myDialog from './dialog.vue'
export default {
  name: 'dialog-box1',
  props: {},
  components: {myDialog},
  data: function() {
    return {
      dialogElem: null,
      dialogX: null,
      dialogY: null,
    }
  },
  methods: {
    randomPos() {
      let screenW = window.screen.availWidth
      let screenH = window.screen.availHeight
      let x = 10 + Math.random() * (screenW - 220)
      let y = 10 + Math.random() * (screenH - 200)
      return {x: x, y: y}
    },
    confirm() {
      let pos = this.randomPos()
      this.dialogX = pos.x + 'px'
      this.dialogY = pos.y + 'px'
    },
    cancel() {
      let pos = this.randomPos()
      his.dialogX = pos.x + 'px'
      this.dialogY = pos.y + 'px'
    }
  }
}
</script>

<style lang="less" scoped>
  .page-wrap {
    width: 100%;
    height: 100%;
    background: #eee;
  }
</style>