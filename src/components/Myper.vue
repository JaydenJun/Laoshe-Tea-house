<template>
  <div>
    <!-- 个人信息 -->
    <i class="el-icon-user-solid mytitle">个人信息</i>
    <hr />
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="头像：">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </el-form-item>
      <!-- 用户名 -->
      <el-form-item label="用户名">
        <el-input
          v-model="form.name"
          placeholder="数据库拿"
          clearable
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <!-- 手机 -->
      <el-form-item label="手机号">
        <el-input
          v-model="form.phone"
          placeholder="数据库拿"
          maxlength="11"
          clearable
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="form.email"
          placeholder="数据库拿"
          clearable
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <!-- 年龄 -->
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: false, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须为数字值' },
        ]"
      >
        <el-input
          clearable
          maxlength="3"
          type="age"
          v-model.number="form.age"
          placeholder="数据库拿"
          style="width: 300px"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即修改</el-button>
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
        age: "",
        email: "",
      },
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$message({
            message: "修改成功！",
            type: "success",
          }); //提示成功信息
          console.log(this.form); //注册数据，这里判断数据库有没有同样的手机号
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mytitle {
  font-size: 2em;
  margin: 9px;
}
</style>