<template>
  <div>
    <el-form>
      <el-form-item label="身份证">
        <el-upload
          class="upload-demo"
          drag
          action="http://localhost:3000/upload"
          name="uploadFile"
          multiple
          :on-success="handleUploadSuccess"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
    </el-form>
    <hr />
    <!-- 验证码 -->
    <div>
      <h1 id="msg" style="color: red">&nbsp;</h1>
      <h1 id="ename" style="color: red"></h1>
      <input
        type="text"
        id="uname"
        value="dingding"
      /><br />

      <input type="text" id="upwd" value="123456" /><br />
      <img
        src="http://127.0.0.1:3000/pro2/v1/code"
        id="code2"
        @click="cha3"
        title="看不清点击换一张"
      /><br />
      <input type="text" id="code" value="" />
      <button @click="login">用户注册</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleUploadSuccess(res) {
      // 当文件上传成功后触发
      console.log(res);
    },
  },
  methods: {
    cha3() {
      console.log(123);
      var code2 = document.getElementById("code2");
      code2.src =
        "http://127.0.0.1:3000/pro2/v1/code?t=" + new Date().getTime();
    },
    login(){

    }
  },
};
</script>

<style lang="scss" scoped></style>
