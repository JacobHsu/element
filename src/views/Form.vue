<template>
  <div>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
        >
            <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <!--注意正常验证表单项是prop，而这里是:prop。
:prop="'productGroup.'+index+'.num'"是拼接的形式，前面是v-for绑定的数组，中间是数组索引index，最后是表单项绑定的v-model的名称，然后用点.把它们连接起来。这三项都必须保证正确，错一个都无法验证。-->
        <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="[
                {required: true, message: '域名不能为空', trigger: 'blur'},
                {max:2, message: '長度至多為2'}
            ]"
        >
            <el-input v-model="domain.value"></el-input>
        </el-form-item>
        <el-form-item
            v-for="(domain, index) in vForData"
            :label="' v-for域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="[
                {required: true, message: 'v-for域名不能为空', trigger: 'blur'},
                {max:3, message: '長度至多為3', trigger: 'change'}
            ]"
        >
            <el-input v-model="domain.value"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            <el-button @click="addDomain">新增域名</el-button>
            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    name: "form",
    data() {
      return {
        vForData: [{
            value: ''
        }],
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>
