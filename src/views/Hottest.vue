<template>
  <!-- 用户发帖区域 -->
  <div class="center-3">
    <span>我是热帖</span>
    <!-- 用户头像上传区域 -->
    <div class="center-3-1">
      <div class="center-3-1-1">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <router-link to="">人在草木</router-link>
    </div>
    <p>三榜达人，连中三元，万里挑一，一二人也！找找都有谁？</p>
    <div>
      <div class="block">
        <span class="demonstration"></span>
        <el-image :src="src1"></el-image>
      </div>
    </div>
    <div class="center-3-2">
      <router-link to="">评论</router-link>
      <span>5</span>
      <i class="el-icon-chat-line-square"> </i>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>

      <i class="el-icon-thumb"> </i>
      <router-link to="">点赞</router-link>
      <span>8</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 照片墙照片路径地址
      src1: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      // 评论输入框双向绑定变量
      textarea: "",
      // 用户上传头像双向绑定变量
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
// 用户发帖区域
.center-3 {
  flex-direction: column;
  justify-items: center;
  background-color: #ffffff;
  border: 1px solid #e8ebf3;
  padding: 20px;
  margin-top: 50px;
  .center-3-1 {
    display: flex;
    justify-content: flex-start;

    // 用户上传头像样式
    .center-3-1-1 {
      width: 178px;
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
    a {
      line-height: 178px;
    }
  }

  // 照片墙区域
  div {
    width: 100%;
  }
  // 评论区域样式
  .center-3-2 {
    display: flex;
    justify-content: space-between;

    i {
      margin: 10px;
    }
    a {
      color: #3390ff;
    }
    span {
      display: inline-block;
      margin-top: 10px;
    }
  }
}
</style>
