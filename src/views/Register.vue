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
          <span>欢迎注册</span
          ><router-link to="/login">已有账号？立即登录</router-link>
        </p>
        <el-form-item label="用户" prop="uname">
          <el-input
            placeholder="请输入用户"
            type="text"
            v-model="ruleForm.uname"
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
        <el-form-item label="手机号" prop="phone">
          <el-input
            placeholder="请输入手机号"
            type="text"
            v-model="ruleForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item style="display:flex:">
          <div
            @click="chat"
            style="background-color: #333; margin-bottom: 10px"
          >
            <img
              width="150px"
              :src="ruleForm.a"
              id="code2"
              title="看不清点击换一张"
            />
          </div>
          <div style="margin-left: -100px; width: 300px">
            <el-form-item
              label="验证码"
              prop="code"
              style="margin: 0 50px 30px 0"
            >
              <el-input
                style="display: inline-block"
                placeholder="验证码"
                type="text"
                v-model="ruleForm.code"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </div>
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

var aaaa = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
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
        code: "",
        uname: "",
        a: "http://127.0.0.1:3000/v1/users/v1/code",
      },
      rules: {
        uname: [
          { validator: aaaa, trigger: "blur" },
          {
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
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
    chat() {
      this.ruleForm.a =
        "http://127.0.0.1:3000/v1/users/v1/code?t=" + Date.now();
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm); //登录成功，这里判断数据库有没有  手机号
          const params = `user_name=${this.ruleForm.uname}&user_phone=${this.ruleForm.phone}&user_pwd=${this.ruleForm.pass}&codes=${this.ruleForm.code}`;
          const url = "http://127.0.0.1:3000/v1/users/register";
          this.axios.post(url, params).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              this.$message({
                //提示成功信息
                message: "注册成功！",
                type: "success",
              });
              this.$router.push("/login"); //成功跳转
            } else {
              this.$message.error("注册失败"); //，这里提示
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
    padding: 20px 50px 10px 0;
    text-align: center;
    width: 400px;
    background-color: #eee;
    opacity: 0.95;
    margin: 30px auto;
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
