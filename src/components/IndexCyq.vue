<template>
  <div class="index-cyq">
    <div>
      <h3>茶友圈</h3>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="6"
          ><div class="grid-content bg-purple">
            <img src="/img/茶友圈1.png" alt="" @click="csss"/></div
        ></el-col>
        <el-col :xs="24" :sm="12" :md="6"
          ><div class="grid-content bg-purple" >
            <img src="/img/茶友圈2.png" alt="" @click="csss"/></div
        ></el-col>
        <el-col :xs="24" :sm="12" :md="6"
          ><div class="grid-content bg-purple">
            <img src="/img/茶友圈3.png" alt="" @click="csss"/></div
        ></el-col>
        <el-col :xs="24" :sm="12" :md="6"
          ><div class="grid-content bg-purple">
            <img src="/img/茶友圈4.png" alt="" @click="csss"/></div
        ></el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {
  methods:{
    csss(){
      this.$router.push('/teah')
    }
  }
};
</script>

<style lang="scss" scoped>
.index-cyq {
  width: 88vw;
  margin: 0 auto;
  margin-bottom: 5vh;
  h3 {
    text-align: center;
    // padding: 8vh 0;
  }
  img {
    width: 70%;
    border: 1px solid #ccc;
     transition: 0.7s;
     &:hover{
        transform: scale(1.1);
    }
  }
}
</style>