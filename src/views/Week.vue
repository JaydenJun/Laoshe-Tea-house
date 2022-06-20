<template>
  <!-- 用户发帖区域 -->
  <div class="center-3">
    <div class="center-3-1"></div>
    <span>人在草木</span>
    <p>三榜达人，连中三元，万里挑一，一二人也！找找都有谁？</p>
    <div>
      <div class="block">
        <span class="demonstration"></span>
      </div>
    </div>
    <div class="center-3-2">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
      <router-link to="">点击发表评论</router-link>
    </div>
    <div>
      <el-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px"
      >
        点击查看评论信息
      </el-button>

      <el-drawer
        title="历史评论信息"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
      >
        <span>我来啦!</span>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 评论输入框双向绑定变量
      textarea: "",

      // 历史评论信息
      drawer: false,
      direction: "rtl",
    };
  },
  methods: {
    // 历史评论信息
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 评论框
    handleChange(val) {
      console.log(val);
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
  padding: 30px;
  margin-top: 50px;
  .center-3-1 {
    display: flex;
    justify-content: flex-start;
  }

  // 评论区域样式
  .center-3-2 {
    padding: 20px;
    i {
      margin: 10px;
    }
    a {
      color: #3390ff;
    }
    span {
      margin-top: 10px;
    }
  }
}
</style>
