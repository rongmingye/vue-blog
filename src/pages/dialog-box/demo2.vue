<template>
  <div class="page-wrap" id="dialog-box2">
    <my-dialog id="dialog" @confirm="confirm" @cancel="cancel"></my-dialog>
  </div>
  </template>
  
  <script>
  // 点击确定/取消按钮，创建一个新弹框，重叠
  import myDialog from './dialog.vue'

  export default {
    name: '',
    props: {},
    components: {myDialog},
    data: function() {
      return {
        count: 1,
        dialogX: 80,
        dialogY: 80,
        lastDialogElem: null,
      }
    },
    mounted: function() {
      this.lastDialogElem = document.querySelector('#dialog')
    },
    methods: {
      confirm() {
        this.renderNewDialog()
      },
      cancel() {
        this.renderNewDialog()
      },
      renderNewDialog() {
        this.count++
        this.dialogX += 10
        this.dialogY += 10
        let fragment = document.createDocumentFragment();
        let clonedNode = this.lastDialogElem.cloneNode(true)
        clonedNode.setAttribute('id', 'dialog' + this.count)
        clonedNode.style.left = this.dialogX + 'px'
        clonedNode.style.top = this.dialogY + 'px'
        fragment.appendChild(clonedNode)
        document.querySelector('#dialog-box2').appendChild(fragment)
        this.lastDialogElem = clonedNode
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