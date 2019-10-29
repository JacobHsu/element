<template>
    <div>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="close">取 消 (可正確執行)</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'DialogForm',
  //props: ['msg', 'form', 'dialogFormVisible'],
  props: {
      msg: String,
      dialogFormVisible: Boolean,
      form: Object
  },
  data() {
    return {
        formLabelWidth: '120px',
    }
  },
  created() {
      console.log('DialogForm created... ',  this.msg,  this.form, this.dialogFormVisible) 
  },
  methods: {
    close(){
        // $emit 方法觸發父元件的監聽事件  調用父元件的方法
        // this.$emit('hide');
         this.$emit('hide', false); // 组件内部自己变了告诉外部，外部决定要不要变。  傳送 false
    }
 }
 
}
/**
 * 
 vue2组件之间双向数据绑定问题 https://segmentfault.com/a/1190000011783590
 
 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.
组件内不能修改props的值，同时修改的值也不会同步到组件外层，即调用组件方不知道组件内部当前的状态是什么
在vue2.0中移除了组件的props的双向数据绑定功能，如果需要双向绑定需要自己来实现。
归结为一句话就是：组件内部自己变了告诉外部，外部决定要不要变。  

[Vue warn]: Property or method "msg" is not defined on the instance but referenced during render
.vue 下不能有兩組script 
 */

// .el-select  跑版overwrite 如果有問題 請搜尋 "vue css 深度作用選擇器"
</script>

<style scoped>
.el-select {
  display: flex;
}
</style>





