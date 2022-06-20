<template>
  <div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="tea_id" prop="tea_id">
        <el-input type="text" v-model="ruleForm.tea_id"></el-input>
      </el-form-item>
      <el-form-item label="teaclass_sid" prop="teaclass_sid">
        <el-input type="text" v-model="ruleForm.teaclass_sid"></el-input>
      </el-form-item>
      <el-form-item label="茶名称" prop="tea_name">
        <el-input type="text" v-model="ruleForm.tea_name"></el-input>
      </el-form-item>
      <el-form-item label="茶标题" prop="tea_subtitle">
        <el-input type="textarea" v-model="ruleForm.tea_subtitle"></el-input>
      </el-form-item>
      <el-form-item label="茶详情" prop="tea_details">
        <el-input type="textarea" v-model="ruleForm.tea_details"></el-input>
      </el-form-item>
      <!-- 第一张图片 -->
      <el-upload class="upload-demo" drag action="http://47.110.235.8:3000/upload" name="uploadFile" multiple
        :on-success="one">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip"></div>
      </el-upload>
      <!-- 第二张图片 -->
      <el-upload class="upload-demo" drag action="http://47.110.235.8:3000/upload" name="uploadFile" multiple
        :on-success="two">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip"></div>
      </el-upload>
      <!-- 第三章图片 -->
      <el-upload class="upload-demo" drag action="http://47.110.235.8:3000/upload" name="uploadFile" multiple
        :on-success="three">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip"></div>
      </el-upload>
      <!-- 第四张图片 -->
      <el-upload class="upload-demo" drag action="http://47.110.235.8:3000/upload" name="uploadFile" multiple
        :on-success="four">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip"></div>
      </el-upload>

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
        tea_id: '',
        teaclass_sid: "",
        tea_name: "",
        tea_subtitle: "",
        tea_details: "",
        tea_pic: "",
        tea_spic: "",
        tea_sspic: "",
        tea_ssspic: "",
      },
    };
  },
  methods: {
    one(res) {
      // 当文件上传成功后触发
      this.ruleForm.tea_pic = res.urls[0];
      console.log(res.urls[0]);
    },
    two(res) {
      this.ruleForm.tea_spic = res.urls[0];
      console.log(res.urls[0]);

    },
    three(res) {
      this.ruleForm.tea_sspic = res.urls[0];
      console.log(res.urls[0]);

    },
    four(res) {
      this.ruleForm.tea_ssspic = res.urls[0];
      console.log(res.urls[0]);

    },
    submitForm() {
      const url = "/v1/admin/insertsb";
      const params = `tea_id=${this.ruleForm.tea_id}&teaclass_sid=${this.ruleForm.teaclass_sid}&tea_name=${this.ruleForm.tea_name}&tea_subtitle=${this.ruleForm.tea_subtitle}&tea_details=${this.ruleForm.tea_details}&tea_pic=${this.ruleForm.tea_pic}&tea_spic=${this.ruleForm.tea_spic}&tea_sspic=${this.ruleForm.tea_sspic}&tea_ssspic=${this.ruleForm.tea_ssspic}`;

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

<style lang="scss" scoped>
</style>
