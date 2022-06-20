<template>
  <div>
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
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
    <el-form-item label="演出类型" prop="family_sid">
        <el-input placeholder="数字1-4" type="text" v-model="ruleForm.family_sid"></el-input>
      </el-form-item>
      <el-form-item label="标题" prop="show_title">
        <el-input type="text" v-model="ruleForm.show_title"></el-input>
      </el-form-item>
      <el-form-item label="star" prop="show_star">
        <el-input type="text" v-model="ruleForm.show_star"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="show_content">
        <el-input v-model="ruleForm.show_content"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="show_address">
        <el-input v-model="ruleForm.show_address"></el-input>
      </el-form-item>
      <!-- <el-form-item label="图片" prop="show_spic">
        <el-input v-model="ruleForm.show_spic"></el-input>
      </el-form-item> -->
      <el-form-item label="时间" prop="show_time">
        <el-input v-model="ruleForm.show_time"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="show_predict">
        <el-input v-model="ruleForm.show_predict"></el-input>
      </el-form-item>
      <el-form-item label="surplus" prop="show_surplus">
        <el-input v-model="ruleForm.show_surplus"></el-input>
      </el-form-item>
      <el-form-item label="sold" prop="show_sold">
        <el-input v-model="ruleForm.show_sold"></el-input>
      </el-form-item>
      <el-form-item label="notice" prop="show_notice">
        <el-input v-model="ruleForm.show_notice"></el-input>
      </el-form-item>
      <el-form-item label="notes" prop="show_notes">
        <el-input v-model="ruleForm.show_notes"></el-input>
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
        family_sid:"",
        show_title: "",
        show_star: "",
        show_content: "",
        show_address: "",
        show_spic: "",
        show_time: "",
        show_predict: "",
        show_surplus: "",
        show_sold: "",
        show_notice: "",
        show_notes: "",
        
      },
    };
  },
  methods: {
    handleUploadSuccess(res) {
      // 当文件上传成功后触发
    this.ruleForm.show_spic=res.urls[0]
      console.log(res.urls[0]);
    },

    submitForm() {
      const url = "/v1/admin/inserts";
      const params = `family_sid=${this.ruleForm.family_sid}&show_title=${this.ruleForm.show_title}&show_star=${this.ruleForm.show_star}&show_content=${this.ruleForm.show_content}&show_address=${this.ruleForm.show_address}&show_spic=${this.ruleForm.show_spic}&show_time=${this.ruleForm.show_time}&show_predict=${this.ruleForm.show_predict}&show_surplus=${this.ruleForm.show_surplus}&show_sold=${this.ruleForm.show_sold}&show_notice=${this.ruleForm.show_notice}&show_notes=${this.ruleForm.show_notes}`;

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
