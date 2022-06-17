<template>
  <div>
    <div style="text-align:right;padding:15px" >
      <router-link
        to="/admin/showdset"
        style="text-decoration: none;padding:10px:display:block;font-size:20px"
        >插入数据</router-link
      >
    </div>
    <el-upload
      class="upload-demo"
      drag
      action="http://127.0.0.1:3000/upload"
      name="uploadFile"
      multiple
      :on-success="handleUploadSuccess"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip"></div>
    </el-upload>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="名称" prop="tea_name">
        <el-input type="text" v-model="ruleForm.tea_name"></el-input>
      </el-form-item>
      <el-form-item label="标题" prop="tea_subtitle">
        <el-input type="text" v-model="ruleForm.tea_subtitle"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        tea_name: "",
        tea_subtitle: "",
        tea_pic: "",
      },
    };
  },
  methods: {
    handleUploadSuccess(res) {
      // 当文件上传成功后触发
      this.ruleForm.tea_spic = res.urls[0];
      console.log(res.urls[0]);
    },

    submitForm() {
      const url = "http://127.0.0.1:3000/v1/admin/insertsb";
      const params = `tea_name=${this.ruleForm.tea_name}&tea_subtitle=${this.ruleForm.tea_subtitle}&tea_pic=${this.ruleForm.tea_pic}`;

      console.log(params);
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert(res.data.msg);
          // this.$router.push("/admin/shows");
        } else {
          alert(res.data.msg);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped></style>
