<template>
  <div class="play">
    <h1>亲！请输入您要发布的帖子内容吧</h1>
    <div class="play-input">
      <el-input
        style="height: 100px"
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="200"
        show-word-limit
        :autosize="{ minRows: 2, maxRows: 4 }"
      >
      </el-input>
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
    <div class="btn">
      <button>发布</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 评论框值
      ring_pic: "",
      textarea: "",
    };
  },
  methods: {
    // 图片上传
    handleUploadSuccess(res) {
      // 当文件上传成功后触发

      console.log(res);
    },
  },
};
</script>

<style lang="scss">
.play {
  background-color: #ffffff;
  margin-top: 10px;
  h1 {
    color: gray;
  }
  .play-input {
    margin: 20px 20px;
  }

  .btn {
    margin-top: 20px;
    background-color: #ffffff;
    height: 50px;

    button {
      background-color: rgb(62, 168, 218);
      color: white;
      border-radius: 4px;
      padding: 15px 20px;
      font-size: 20px;
      border: 1px solid rgb(62, 168, 218);
    }
  }
}
</style>
