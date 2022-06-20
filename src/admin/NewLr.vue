<template>
  <div>
    <fieldset>
      <legend style="font-size: 20px">新闻与咨询录入界面</legend>

      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="new_title">
          <el-input type="text" v-model="ruleForm.new_title"></el-input>
        </el-form-item>

        <!-- <el-form-item label="图片" prop="new_pic">
          <el-input v-model="ruleForm.new_pic"></el-input>
        </el-form-item> -->
        <el-form-item label="时间" prop="new_time">
          <el-input
            v-model="ruleForm.new_time"
            type="date"
            style="width: 200px"
          ></el-input>
        </el-form-item>

        <el-form-item label="热点内容" prop="new_subtitle">
          <el-input v-model="ruleForm.new_subtitle"></el-input>
        </el-form-item>
        <el-form-item label="咨询内容" prop="new_content">
          <el-input v-model="ruleForm.new_content"></el-input>
        </el-form-item>
        <el-upload
          class="upload-demo"
          drag
          action="http://47.110.235.8:3000/upload"
          name="uploadFile"
          multiple
          :on-success="handleUploadSuccess"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip"></div>
        </el-upload>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        new_title: "",
        new_pic: "",
        new_content: "",
        new_subtitle: "",
        new_time: "",
      },
    };
  },
  methods: {
    // 图片上传
    handleUploadSuccess(res) {
      // 当文件上传成功后触发
      this.ruleForm.new_pic = res.urls[0];
      console.log(res.urls[0]);
    },

    submitForm(formName) {
      console.log(this.ruleForm);
      const url = "/v1/admin/insertsbd";
      const params = `new_title=${this.ruleForm.new_title}&new_content=${this.ruleForm.new_content}&new_time=${this.ruleForm.new_time}&new_subtitle=${this.ruleForm.new_subtitle}&new_pic=${this.ruleForm.new_pic}`;

      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("录入成功");
          this.$router.push("/admin/news");
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
