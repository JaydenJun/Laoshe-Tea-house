<template>
  <div>
    <div>
      
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <!-- 当前表单项可以检验form.name是否符合验证规则 -->
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        age: ""
      },
      rules: {
        age: [
          {required: true, message: "请输出年龄", trigger: "blur"}
        ],
        phone: [
          {required: true, message: "请输出手机号", trigger: "blur"},
          {pattern: /^1[3-9]\d{9}$/, message: "手机号不合法", trigger: "blur"}
        ],
        name: [
          // required    name字段为必填项
          // message     如果验证失败后显示的错误消息
          // trigger     验证触发方式，blur即是焦点失去后触发验证
          {required: true, message: "请输出姓名", trigger: "blur"}
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      // console.log("提交表单：", this.form);
      // 验证  ref="form" 的表单对象
      // form对象的validate()方法用于表单是否符合规则，验证完毕后将会
      // 执行回调方法 (valid)=>{}， 回传回来的valid用于描述是否验证成功
      this.$refs['form'].validate((valid)=>{
        if(valid){  // 如果验证成功，valid将会返回true
          console.log("提交表单：", this.form);
        }else {
          console.warn("请完善表单");
        }
      })
    },
  },
};
</script>
