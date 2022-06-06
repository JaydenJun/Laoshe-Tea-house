<template>
  <div class="login">
    <!-- 外框 -->
    <div class="login_box">
      <!-- 头像 -->
      <div class="logo">
        <img src="../assets/img/bt.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="sigin"
        ><p><router-link to="/register">立即注册</router-link></p>
        <el-form-item label="手机号" prop="phone">
          <el-input
            type="text"
            v-model="ruleForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
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
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/,
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
          this.$message({
            message: "登录成功！",
            type: "success",
          }); //提示成功信息
          console.log(this.ruleForm); //登录成功，这里判断数据库有没有  手机号
          //   this.$router.push("/login"); //成功跳转 到主页或者购物界面
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
.login_box {
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
    p {
      margin: 5px;
      transform: translateX(180px);
      a {
        text-decoration: none;
        color: #409eff;
      }
    }
  }
  .sigin {
    width: 470px;
    margin-top: 18px;
    p {
      margin: 5px;
      transform: translateX(400px);
      a {
        text-decoration: none;
        color: #409eff;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>