<template>
  <div class="register">
    <div class="register_box">
      <!-- 头像 -->
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/img/bt.png" alt=""
        /></router-link>
      </div>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="sigin"
      >
        <p>已有账号？<router-link to="/login">登录</router-link></p>
        <el-form-item label="用户名" prop="user">
          <el-input
            type="text"
            v-model="ruleForm.user"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone">
          <el-input
            maxlength="11"
            type="text"
            v-model="ruleForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input
            maxlength="16"
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var users = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        user: "",
        phone: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        user: [
          { validator: users, trigger: "blur" },
          {
            pattern: /^[\u4e00-\u9fa5a-zA-Z0-9]{6,12}$/,
            message: "用户名仅支持中英文、数字和下划线,且不能为纯数字",
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
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{8,16}$/,
            message: "密码必须包含字母和数字，且在8-16位之间",
            trigger: "blur",
          },
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    //ruleForm是所有数据的 自取的参数名
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        // console.log(valid);   //
        if (valid) {
          this.$message({
            message: "注册成功！",
            type: "success",
          }); //提示成功信息
          console.log(this.ruleForm); //注册数据，这里判断数据库有没有同样的手机号
          this.$router.push("/login"); //成功跳转 登录地址
        } else {
          this.$message.error("请重新注册"); //有重复的，这里提示
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
body {
  margin: 0;
  padding: 0;
}
.register {
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(https://img1.baidu.com/it/u=2042976038,4015865224&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500)
    no-repeat;
  background-size: cover;
}
.register_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.8);

  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -110%);
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 1px solid #eee;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .sigin {
    width: 470px;
    margin-top: 18px;
    p {
      margin: 5px;
      transform: translateX(350px);
      a {
        text-decoration: none;
        color: #409eff;
      }
    }
  }
  .btns {
    display: flex;

    justify-content: center;
  }
}
</style>
