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
      action="http://47.110.235.8:3000/upload"
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
      <el-button
        :disabled="textarea == '' ? true : false"
        id="btn1"
        :plain="true"
        @click="postdata"
        >发表帖子</el-button
      >
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loginid", "loginname"]),
  },
  data() {
    return {
      // 评论框值
      ring_pic: "",
      textarea: "",

      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations(["updateLoginStates", "updateLoginState"]),
    postdata() {
      const url = "/v1/users/sendring";
      const params = `ring_details=${this.textarea}&ring_pic=${this.ring_pic}&user_sid=${this.loginid}`;
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (this.loginid != null) {
          this.$message({
            showClose: true,
            message: "恭喜你，发表成功",
            type: "success",
          });
          this.$router.push("/teah");
        } else {
          this.$message({
            showClose: true,
            message: "用户未登录，请登录后在进行发表，谢谢！",
            type: "success",
          });
        }

        // console.log("用户id", this.loginid);
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
    #btn1 {
      padding: 10px 10px;
      border: 1px solid #3390ff;
      background-color: #3390ff;
      border-radius: 4px;
      color: white;
      margin-top: 20px;
      margin-right: 10px;
      &:hover {
        background-color: #046ff1;
      }
    }

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
