<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <div id="from">
            <h1>
              欢迎注册
              <p>
                已有账号？
                <router-link to="/login">登录</router-link>
              </p>
            </h1>
            <!-- 
        ref：获取组件对象
        :model ：指明表单绑定的数据对象，管理ruleForm; 用于验证，由data中的ruleForm收集表单数据
        v-model：双向数据绑定ruleForm, 在data中声明rulrForm用于双向数据绑定
        :rules :通过rules对象对表单进行表单验证
        rules：用于定义form中每个表单项的规则。指明错误消息，如果表单不通过将会通过prop中显示错误消息
        prop:
       -->
            <div class="form-item">
              <el-form :rules="rules" :model="ruleForm" ref="form" class="item">
                <!-- 用户名-->
                <el-form-item label="用戶名" prop="name" label-width="70px">
                  <el-input
                    v-model="ruleForm.name"
                    placeholder="请设置用户名"
                  ></el-input>
                </el-form-item>
                <!-- 手机号 -->
                <el-form-item label="手机号" prop="phone" label-width="70px">
                  <el-input
                    v-model="ruleForm.phone"
                    placeholder="请设置手机号"
                  ></el-input>
                </el-form-item>
                <!-- 密码-->
                <el-form-item label="密码" prop="password" label-width="70px">
                  <el-input
                    type="password"
                    v-model="ruleForm.password"
                    placeholder="请设置登录密码"
                  ></el-input>
                </el-form-item>
                <!-- 邮箱 -->
                <el-form-item label="邮箱" prop="email" label-width="70px">
                  <el-input
                    v-model="ruleForm.email"
                    placeholder="请设置邮箱"
                  ></el-input>
                </el-form-item>
                <!-- 注册 -->
                <el-form-item>
                  <el-button type="primary" @click="submitForm"
                    >立即创建</el-button
                  >
                  <input
                    id="reset"
                    type="reset"
                    @click="resetForm('ruleForm')"
                    value="重置"
                  />
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    // 手机号验证
    var phonenumber = (rule, value, callback) => {
      const phonenumber = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        // Number.isInteger是es6验证数字是否为整数的方法,实际输入的数字总是识别成字符串
        // 所以在前面加了一个+实现隐式转换

        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (phonenumber.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 100);
    };
    // 邮箱验证
    var chekemail = (rule, value, callback) => {
      const chekemail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (chekemail.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 100);
    };

    return {
      ruleForm: {
        email: "",
        phone: "",
        name: "",
        password: "",
      },
      rules: {
        name: [
          // required：name字段为必填项
          //  message：如果验证失败后显示的信息
          // trigge：验证触发方式，blur即焦点失去后触发验证
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3到 10个字符", trigger: "blur" },
          {
            required: true,
            pattern: /^[u4e00-\u9fa5_a-zA-Z0]+$/,
            message: "姓名不支持特殊字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码设置不符合要求", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "手机号必填", trigger: "blur" },
          { validator: phonenumber, trigger: "blur" },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "手机号不合法",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请填写正确的邮箱", trigger: "blur" },
          { validator: chekemail, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      // valid用于表单
      this.$refs["form"].validate((valid) => {
        if (valid) {
          // 如果验证成功，valid将会返回true
          console.log("提交表单：", this.ruleForm);
        } else {
          console.warn("请完善表单");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.grid-content {
  width: 100%;
  height: 100%;
  background: url("https://passport.baidu.com/static/passpc-account/img/reg_bg_min.jpg");
 
  position: fixed;
}
#from {
  width: 500px;
  height: 500px;
  
  margin: 200px auto;
  padding: 10px;

  background: rgba(252, 252, 252, 0.8);
  border-radius: 20px;
}

.form-item {
  width: 400px;
  height: 50px;
  text-align: center;
  padding: 20px;
}
h1 {
  color: black;
}
p {
  font-size: 10px;
  color: gray;
  text-decoration: none;
  margin-left: 100px;
}
#reset {
  padding: 10px 20px;
  width: 80px;
  margin-left: 10px;
  border-radius: 4px;
  background-color: #bdcefc;
  color: white;
  border-color: #bdcefc;
}
</style>
