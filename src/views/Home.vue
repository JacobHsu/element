<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-button type="text" @click="showDialog">打开嵌套表单的 組件 Dialog</el-button>
    <DialogForm msg="DialogForm from Home.vue"
                :dialogFormVisible="dialogVisible" 
                :form="dialogDataForm"
                @hide="hideDialog" ></DialogForm>



    <hr>

    <el-button @click="show = !show">Click Me fade 淡入淡出</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>

    <el-button @click="show3 = !show3">Click Me collapse 展開摺疊</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import DialogForm from '@/components/DialogForm.vue'  

export default {
  name: 'home',
  data: () => ({
    show: true,
    show3: true,
    dialogVisible: false,
    dialogDataForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
    },
  }),
  components: {
    DialogForm,
    //HelloWorld
  },
  methods: {
      showDialog() {
          this.dialogVisible = true;
      },
      hideDialog(isHide) {
          // this.dialogVisible = false;
          this.dialogVisible = isHide;
      }
  }
}
</script>


<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>