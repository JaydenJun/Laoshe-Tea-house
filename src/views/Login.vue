<template>
  <div class="login">
    <!-- 外框 -->

    <div class="login_box">
      <!-- 表单 -->
      <div
        style="
          width: 100%;
          text-align: center;
          background-color: #eee;
          margin-bottom: 50px;
        "
      >
        <router-link to="/"
          ><img style="width: 50%" src="../assets/log2.png" alt=""
        /></router-link>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <p class="biao">
          <span>账号登录</span
          ><router-link to="/register">没有账号？立即注册</router-link>
        </p>
        <el-form-item label="手机号" prop="phone">
          <el-input
            placeholder="请输入手机号"
            type="text"
            v-model="ruleForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <img
            src="http://127.0.0.1:3000/v1/users/v1/code"
            id="code2"
            
            title="看不清点击换一张"
          /><br />
          <input type="text" id="code" v-model="ruleForm.code" value="" />
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
          <el-button style="width: 98px" @click="resetForm('ruleForm')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var phones = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入手机号"));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        pass: "",
        code:""
      },
      rules: {
        phone: [
          { validator: phones, trigger: "blur" },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 8,
            max: 16,
            // pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/,
            message: "密码必须包含字母和数字，且在8-15位之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm); //登录成功，这里判断数据库有没有  手机号
          const params = `user_phone=${this.ruleForm.phone}&user_pwd=${this.ruleForm.pass}&code=${this.ruleForm.code}`;
          const url = "http://127.0.0.1:3000/v1/users/login";
          this.axios.post(url, params).then((res) => {
            console.log(res);
            if (res.code == 200) {
              this.$message({
                //提示成功信息
                message: "登录成功！",
                type: "success",
                //   this.$router.push("/login"); //成功跳转 到主页或者购物界面
              });
            } else {
              this.$message.error("账号有误，请从新输入"); //，这里提示
              return false;
            }
          });
        } else {
          this.$message.error("账号有误，请从新输入"); //，这里提示
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(https://img1.baidu.com/it/u=2042976038,4015865224&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500)
    no-repeat;
  background-size: cover;
  .login_box {
    padding: 50px 50px 50px 0;
    text-align: center;
    width: 400px;
    background-color: #eee;
    opacity: 0.95;
    margin: 120px auto;
    border-radius: 10px;
  }
  .logo {
    width: 100%;
    display: block;
    text-align: center;
  }
  .biao {
    display: flex;
    justify-content: space-evenly;
    span {
      font-size: 30px;
    }
    a {
      text-decoration: none;
      line-height: 50px;
    }
  }
}
</style>
