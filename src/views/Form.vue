<template>
  <div>
    <el-form :model="dynamicValidateForm" 
              ref="dynamicValidateForm"
              :rules="rules" 
              label-width="100px" 
              class="demo-dynamic">
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
        <el-form-item
            prop="bank"
            label="銀行"
        >
            <el-input v-model="dynamicValidateForm.bank"></el-input>
        </el-form-item>
        <!--注意正常验证表单项是prop，而这里是:prop。
:prop="'productGroup.'+index+'.num'"是拼接的形式，前面是v-for绑定的数组，中间是数组索引index，最后是表单项绑定的v-model的名称，然后用点.把它们连接起来。这三项都必须保证正确，错一个都无法验证。-->
        <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
        >
            <el-input v-model="domain.value" @input="handleInput"></el-input>
        </el-form-item>
        <el-form-item
            v-for="(domain2, index) in vForData"
            :label="' v-for域名' + index"
            :key="domain2.key"
            :prop="'domains.' + index + '.value'"
            :rules="[
                {required: true, message: 'v-for域名不能为空', trigger: 'blur'},
                {max:3, message: '長度至多為3', trigger: 'change'}
            ]"
        >
            <el-input v-model="domain2.value"></el-input>
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
    name: "elform",
    data() {
      const validateBank = (rule, value, callback) => {
        // 注意 el-input value 值要能收到 
        // <el-form :model="dynamicValidateForm" 
        // <el-input v-model 的值必須在form model下 `v-model="dynamicValidateForm.bank"` 
        // 且 <el-form-item 的 prop 的值要等於同次級的名   `prop="bank"`
        if (value) {
          setTimeout(() => {
            const reg = /([\d]{4})([\d]{4})([\d]{4})([\d]{4})([\d]{0,})?/;
            if (!reg.test(value)) {
              callback(new Error('请输入正确的银行卡号'));
            } else {
              callback();
            }
          }, 200);
        } else {
          callback();
        }
      };
      const validateStrAndNum = (rule, value, callback) => {
        if (value) {
          setTimeout(() => {
            const reg = /^[\w\s]+$/;
            if (!reg.test(value)) {
              callback(new Error('仅可为英数字与空白'));
            } else {
              callback();
            }
          }, 200);
        } else {
          callback();
        }
      };
      const validateDecimal = (rule, value, callback) => {
        if (value) {
            const maxDigitLen = 2
            let digitLength = null
            try {
              digitLength = `${value}`.split('.')[1].length //判斷小數點位數
            } catch (err) {
              digitLength = 0
            }
            const isValid = digitLength <= maxDigitLen && !isNaN(value)

            if (isValid) {
              callback();
            } else {
              callback(new Error('小數點位數限制兩位'));
            }
  
        } else {
          callback();
        }
      };
      return {
        domain: {
          value: 0
        },
        rules: {
          'bank': [
            {max: 16, message: '長度至多為16', trigger: 'change'},
            {validator: validateBank }
          ],
          'domains.0.value': [
            {required: true, message: '域名不能为空', trigger: 'blur'},
            {max:5, message: '長度至多為5'},
            //{validator: validateStrAndNum },
            {validator: validateDecimal }
          ],
        },
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
      handleInput(inputValue) {
        const decimalLen = 2 
        let maxNum = 5000
        let maxLen = maxNum.toString().length
        let inputLen = inputValue.length

        let displayValue = inputLen > maxLen ? maxNum : inputValue;
        this.dynamicValidateForm.domains[0].value = displayValue
      },
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
