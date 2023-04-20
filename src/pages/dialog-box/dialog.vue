<template>
  <div class="dialog" :style="{left: left, top: top, 'border-color': configObj.borderColor, 'background': configObj.dialogBackground}">
    <div class="dialog-body" :style="{color: configObj.titleColor}">
      {{configObj.title || '请关闭弹框'}}
    </div>
    <div class="dialog-bottom" :style="{'border-color': configObj.borderColor,}">
      <span class="bottom-btn btn-cancel" :style="{color: configObj.cancelColor}" @click="cancel($event)">
        {{ configObj.cancelText || '取消'}}
      </span>
      <span class="bottom-btn btn-confirm" :style="{color: configObj.confirmColor}" @click="confirm($event)">
        {{ configObj.confirmText || '确定' }}
      </span>
    </div>
  </div>
</template>
  
  <script>
  // 点击确定/取消按钮，弹框位置随机变化
  export default {
    name: 'my-dialog',
    props: {
      left: String,
      top: String,
      configObj: {
        type: Object,
        default: () => {}
      }
    },
    data: function() {
      return {
        configProps: {
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
    create() {
      if (Object.keys(this.configObj).length) {
        this.configProps = this.configObj
      }
    },
    methods: {
      confirm() {
        this.$emit('confirm')
      },
      cancel() {
        this.$emit('cancel')
      },
    }
  }
  </script>
  
  <style lang="less" scoped>
  .dialog {
    position: fixed;
    left: 80px;
    top: 80px;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px 15px 0 15px;
    box-sizing: border-box;
    background: #fff;
  }
  .dialog-body {
    margin-top: 20px;
    height: 50px;
    color: #646566;
  }
  .dialog-bottom {
    display: flex;
    padding: 10px 0;
    border-top: 1px solid #ddd;
  }
  .bottom-btn {
    display: inline-block;
    text-align: center;
    width: 50%;
    color: #333;
    -webkit-tap-highlight-color: transparent;
  }
  .btn-cancel {
    border-right: 1px solid #ddd;
    color: #333;
  }
  .btn-confirm {
    color: #07f;
  }
  </style>