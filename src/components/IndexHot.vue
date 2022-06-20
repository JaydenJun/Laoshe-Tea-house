<template>
  <div class="index-hot">
    <div>
      <div>
        <h3>茶百科</h3>
        <el-row :gutter="10">
          <el-col :xs="24" :md="12" :lg="6"
            ><div class="grid-content bg-purple box" @click="cbk">
              <div><img src="/img/碧螺春.png" alt="" /></div>
              <h4>碧螺春</h4>
              <p>碧螺春是中国传统名茶，中国十大名茶之一，属于绿茶类</p>
            </div></el-col
          >
          <el-col :xs="24" :md="12" :lg="6"
            ><div class="grid-content bg-purple box" @click="cbk">
              <div><img src="/img/君山银针.png" alt="" /></div>
              <h4>君山银针</h4>
              <p>君山银针是中国名茶之一，中国十大名茶之一。属于黄茶</p>
            </div></el-col
          >
          <el-col :xs="24" :md="12" :lg="6"
            ><div class="grid-content bg-purple box" @click="cbk">
              <div><img src="/img/武夷岩茶.png" alt="" /></div>
              <h4>武夷岩茶</h4>
              <p>武夷岩茶是中国传统名茶，最著名的武夷岩茶是大红袍茶</p>
            </div></el-col
          >
          <el-col :xs="24" :md="12" :lg="6"
            ><div class="grid-content bg-purple box" @click="cbk">
              <div><img src="/img/铁观音.png" alt="" /></div>
              <h4>铁观音茶</h4>
              <p>铁观音茶，属于青茶类，是中国十大名茶之一</p>
            </div></el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cbk() {
      this.$router.push("/tea");
    },
  },
};
</script>

<style lang="scss" scoped>
.index-hot {
  width: 88vw;
  margin: 0 auto;
  h3 {
    // padding: 10vh 0;
    text-align: center;
  }
  .box {
    margin-bottom: 5vw;
    span {
      display: inline-block;
      line-height: 3vh;
      padding-left: 3vh;
    }
    p {
      padding-left: 2vh;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    img {
      height: 180px;
      width: 292px;
      border: 1px solid #aaa;
       transition: 0.7s;
     &:hover{
        transform: scale(1.1);
    }
    }
  }
}
</style>
