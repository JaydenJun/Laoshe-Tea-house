<template>
  <div class="index-cyq">
    <div>
      <h3>茶友圈</h3>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="6" v-for="i in 4" :key="i"
          ><div class="grid-content bg-purple">
            <img src="../assets/img/index/Snipaste_2022-06-04_11-08-49.png" alt="" /></div
        ></el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.index-cyq {
  width: 88vw;
  margin: 0 auto;
  margin-bottom: 15vh;
  h3 {
    text-align: center;
    // padding: 8vh 0;
  }
  img {
    width: 100%;
  }
}
</style>