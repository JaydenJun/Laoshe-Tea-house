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
            v-focus
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
                placeholder="请输入结果"
                type="text"
                v-model="ruleForm.code"
                autocomplete="off"
                @keyup.enter.native="submitForm('ruleForm')"
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
import { mapMutations } from "vuex";
export default {
  // 自动获取焦点事件
  directives: {
    //注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: function (el) {
        // 聚焦元素
        el.querySelector("input").focus();
      },
    },
  },

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
      userid: "",
      user_name: "",
      ruleForm: {
        phone: "",
        pass: "",
        code: "",

        a: "http://47.110.235.8:3000/v1/users/v1/code",
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
    ...mapMutations(["updateLoginState", "updateLoginStates", "namess"]),
    chat() {
      this.ruleForm.a =
        "http://47.110.235.8:3000/v1/users/v1/code?t=" + Date.now();
    },
    usel() {
      let url = "/v1/users/userph?user_phone=" + this.ruleForm.phone;
      console.log(url);
      this.axios.get(url).then((res) => {
        this.userid = res.data.data[0].user_id;
        console.log(res.data.data[0].user_id);
        console.log(res);
        this.user_name = res.data.data[0].user_name;
        // 更新当前登录的用户名到 vuex中
        this.updateLoginStates(this.userid);
        this.namess(this.user_name);
        this.updateLoginState(this.user_name);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm); //登录成功，这里判断数据库有没有  手机号
          const params = `user_phone=${this.ruleForm.phone}&user_pwd=${this.ruleForm.pass}&code=${this.ruleForm.code}`;
          const url = "/v1/users/login";

          this.axios.post(url, params).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              this.$message({
                showClose: true,
                message: "登录成功",
                type: "success",
              });

              this.usel();

              this.$router.push("/"); //成功跳转 到主页或者购物界面
            } else if (res.data.code == 505) {
              this.$message.error("账号有误，请从新输入");
              return false;
            } else {
              this.$message.error("验证码错误！"); //，这里提示
              this.ruleForm.a =
        "http://47.110.235.8:3000/v1/users/v1/code?t=" + Date.now();
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
    padding: 30px 50px 20px 0;
    text-align: center;
    width: 400px;
    background-color: #eee;
    opacity: 0.95;
    margin: 50px auto;
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
