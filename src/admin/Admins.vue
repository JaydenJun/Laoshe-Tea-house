<template>
  <div id="logins">
    <h1>超级管理员登录</h1>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label=" 密码">
        <el-input v-model="formLabelAlign.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="logindata">立即登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapMutations(["anamess"]),
    logindata() {
      const url = "/v1/admin/login";
      const params = `aname=${this.formLabelAlign.name}&apwd=${this.formLabelAlign.password}`;
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("登录成功");
          
          this.$router.push("/admin");
          this.anamess(this.formLabelAlign.name)
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#logins {
  width: 500px;
  height: 300px;
  margin: 50px auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  h1 {
    margin-bottom: 60px;
    color: gray;
  }
  .el-form {
    text-align: center;
    .el-button {
      margin-left: 5px;
    }
    .el-input {
      margin-right: 80px;
    }
  }
}
</style>