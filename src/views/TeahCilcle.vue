<template>
  <div class="teah">
    <!-- 顶部标题 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div class="top-logo"></div>
          <div class="top-title">
            <span class="span-1">茶艺圈 以茶会友 </span>
            <span class="span-2"> “振兴古国茶文化， 扶植民族艺术花”</span>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 内容区域 -->
    <el-row :gutter="20">
      <!-- 左边内容 -->
      <el-col :span="6" :xs="0">
        <div class="grid-content bg-purple">
          <div class="left-1">
            <p>茶友圈</p>
            <el-divider></el-divider>
            <span
              >话题互动，分享感受与发现，聚集茶行业海量亲历者、内行人、学者专家、爱好者，沟通交流，建立信任和连接，发现更多志同道合</span
            >
          </div>
        </div>
      </el-col>
      <!-- 中间内容 -->
      <el-col :span="12" :xs="24">
        <div class="grid-content bg-purple-light">
          <!-- 公告区域 -->
          <div class="center-1">
            <el-carousel height="50px" direction="vertical" :autoplay="true">
              <el-carousel-item v-for="item in 3" :key="item">
                <p>公告： 关于刷积分、刷评论、积分兑换</p>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 热点选择区域 -->
          <div class="center-2">
            <el-menu :default-active="$route.path" router mode="horizontal">
              <el-menu-item index="/teah/latest">最新发布</el-menu-item>
              <el-menu-item index="/teah/hottest">热帖</el-menu-item>
              <el-menu-item index="/teah/week">周热点</el-menu-item>
              <el-menu-item index="/teah/month">月热点</el-menu-item>
              <el-menu-item index="/teah/play">发帖</el-menu-item>
            </el-menu>
          </div>
          <router-view />
        </div>
      </el-col>
      <!-- 右边内容 -->
      <el-col :span="6" :xs="0">
        <div class="grid-content bg-purple">
          <div class="right-1">
            <p>热门帖子</p>
            <router-link to=""> 更多 </router-link>

            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
            <router-link to="">大杂烩</router-link>
            <el-divider></el-divider>
          </div>
        </div>
      </el-col>
    </el-row>
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
.teah {
  width: 88vw;
  margin: 0 auto;
  background-image: linear-gradient(#f6f7fb, #ffffff);
  text-align: center;
  a {
    text-decoration: none;
  }

  // 顶部区域样式
  .el-row {
    user-select: none;
    .el-col {
      .bg-purple-dark {
        display: flex;
        overflow: hidden;
        height: 80px;
        line-height: 80px;
        // logo样式
        .top-logo {
          width: 180px;
          margin-right: 80px;

          img {
            width: 100%;
            height: 25px;
          }
        }
        // 标题样式
        .top-title {
          display: inline-block;
          line-height: 80px;
          .span-1 {
            display: inline-block;
            color: white;
            font-size: 30px;
          }
          .span-2 {
            display: inline-block;
            color: white;
            font-size: 25px;
            margin-left: 5px;
          }
        }

        background-image: linear-gradient(#d49030, #734d43);
      }
    }
  }
  // 内容区域样式

  .el-row {
    // 左边内容区域
    .left-1 {
      border: 1px solid #e8ebf3;
      padding: 10px 5px;
      background-color: #ffffff;

      margin-top: 50px;

      .el-button {
        margin-top: 10px;
        margin-left: 5px;
      }

      p {
        font-size: 20px;
        color: #605e7e;
      }
      span {
        color: #605e7e;
      }
    }
    // 中间内容区域
    // 广告区域
    .center-1 {
      margin-top: 50px;

      .el-carousel {
        .el-carousel__item {
          p {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 50px;
            margin: 0;
          }
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #acaac4;
        }
      }
    }
    // 右边热门圈子区域
    .right-1 {
      background-color: #ffffff;
      border: 1px solid #e8ebf3;
      margin-top: 50px;
      padding: 5px 10px;
      span {
        color: #605e7e;
        font-size: 18px;
      }
    }
    // 中间热点区域
    // .center-2 {
    //   display: flex;
    //   justify-content: space-between;
    //   background-color: #ffffff;
    //   border: 1px solid #e8ebf3;
    //   padding: 20px;
    //   a {
    //     color: #a7b4c9;
    //     padding: 10px 10px;
    //     text-align: center;
    //     &.active {
    //       background-color: #3390ff;
    //       color: white;
    //       border-radius: 4px;
    //     }
    //   }
    // }
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
  }
}
</style>
