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
    <div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <div class="play-button">
      <span>发布</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 评论框值
      text: "",
      textarea: "",
      // 照片墙值
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss">
.play {
  background-color: #ffffff;
  margin-top: 10px;
  .play-input {
    margin: 20px 20px;
  }
  .play-button {
    user-select: none;
    text-align: center;
    margin-top: 40px;
    span {
      background-color: rgb(62, 168, 218);
      color: white;
      border-radius: 4px;
      padding: 15px 40px;
      font-size: 20px;
    }
  }
}
</style>
