<template>
  <div class="page-wrap" :style="{background: configObj.pageBackground}">
    <my-dialog :left="dialogX + 'px'" :top="dialogY + 'px'" :configObj="configObj" @confirm="confirm" @cancel="cancel"></my-dialog>
  </div>
  </template>
  
  <script>
  // 点击确定/取消按钮，弹框位置left/top += 10
  import myDialog from './dialog.vue'
  export default {
    name: 'dialog-box3',
    props: {},
    components: {myDialog},
    data: function() {
      return {
        dialogX: 80,
        dialogY: 80,
        configObj: {
          title: '请关闭弹框',
          titleColor: '#333',
          confirmText: '确定',
          cancelText: '取消',
          confirmColor: '#07f',
          cancelColor: '#333',
          pageBackground: '#eee',
          dialogBackground: '',
          borderColor: '#ddd',
        }
      }
    },
    created(){
      this.getDialogDetail()
    },
    methods: {
      confirm() {
        if(this.dialogX + 200 < window.screen.availWidth + 10
          && this.dialogY + 130 < window.screen.availHeight + 10) {
          this.dialogX += 10 
          this.dialogY += 10
        }
      },
      cancel() {
        if(this.dialogX > -10
          && this.dialogY + 130 < window.screen.availHeight) {
          this.dialogX -= 10 
          this.dialogY += 10
        }
      },
      getDialogDetail() {
        this.$http.getDialogDetail('').then(res => {
          this.configObj = res.data
        })
        .catch(err => {
          console.log(err)
        });
      },
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