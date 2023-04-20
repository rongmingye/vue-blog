<template>
  <div class="page-wrap">
    <header class="page-wrap-header">
      页面配置
    </header>
    <el-form ref="form" :model="form" label-width="150px" size="mini" class="form-wrap">
      <el-form-item label="弹框文字内容">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="弹框文字内容颜色">
        <el-color-picker v-model="form.titleColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="确定按钮文字">
        <el-input v-model="form.confirmText"></el-input>
      </el-form-item>
      <el-form-item label="取消按钮文字">
        <el-input v-model="form.cancelText"></el-input>
      </el-form-item>
      <el-form-item label="确定文字颜色">
        <el-color-picker v-model="form.confirmColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="取消文字颜色">
        <el-color-picker v-model="form.cancelColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="页面背景颜色">
        <el-color-picker v-model="form.pageBackground"></el-color-picker>
      </el-form-item>
      <el-form-item label="弹框背景颜色">
        <el-color-picker v-model="form.dialogBackground"></el-color-picker>
      </el-form-item>
      <el-form-item label="弹框边框颜色">
        <el-color-picker v-model="form.borderColor"></el-color-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>

    <div class="demo-page-wrap" :style="{background: form.pageBackground}">
      <my-dialog :configObj="form"></my-dialog>
    </div>
  </div>
</template>

<script>
  import myDialog from './dialog.vue'

export default {
  name: '',
  components: {myDialog},
  props: {},
  data: function() {
      return {
        form: {
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
  created: function() {
    this.getDialogDetail()
  },
  methods: {
      save() {
        this.$http.UpdateDialogConfig(this.form).then(res => {
          this.$message.success('保存成功')
        })
        .catch(err => {
          console.log(err)
        });
      },
      cancel() {

      },
      getDialogDetail() {
        this.$http.getDialogDetail('').then(res => {
          if (res.data) {
            this.form = res.data
          }
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
  padding: 20px;
}

.page-wrap-header {
  padding: 20px 50px;
  font-size: 20px;
}
.form-wrap {
  width: 600px;
}

.demo-page-wrap {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 375px;
  height: 612px;
  border: 1px solid #ddd;
  transform: scale(0.7);
  transform-origin: top right;
}
</style>