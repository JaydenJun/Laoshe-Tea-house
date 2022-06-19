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
      action="http://127.0.0.1:3000/upload"
      multiple
      name="uploadFile"
      :on-success="handleUploadSuccess"
      list-type="picture-card"
      :limit="1"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="ring_pic" alt="" />
    </el-dialog>
    <div class="btn">
      <button @click="postdata">发布</button>
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

      dialogVisible: false,
      user: 2,
    };
  },
  methods: {
    postdata() {
      const url = "http://127.0.0.1:3000/v1/users/sendring";
      const params = `ring_details=${this.textarea}&ring_pic=${this.ring_pic}&user_sid=${this.user}`;
      this.axios.post(url, params).then((res) => {
        console.log(res);
        alert(res.data.msg)
      });
    },
    // 图片上传
    // 图片上传
    handleUploadSuccess(res) {
      // 当文件上传成功后触发
      this.ring_pic = res.urls[0];
      console.log(res.urls[0]);
    },
    handlePictureCardPreview(file) {
      this.ring_pic = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss">
.play {
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 50px;
  h1 {
    font-size: 18px;
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
      padding: 10px 30px;
      font-size: 20px;
      border: 1px solid rgb(62, 168, 218);
      &:hover {
        background-color: rgb(9, 150, 243);
      }
    }
  }
}
</style>
