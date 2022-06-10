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
    <div class="btn">
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
    };
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
