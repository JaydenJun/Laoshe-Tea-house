<template>
  <div class="teadetails">
    <el-row v-for="n in 5" :key="n">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <div class="teatype">
          <h3>红茶 历史沿革 主要品种(品质特征) 制作工艺 价值功效 </h3>
          <p>详情</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="img">
          <img src="/img/武夷岩茶.webp" alt="">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.teadetails {
  width: 88vw;
  margin: 0 auto;
  background-color: #eee;
  margin-top: 5vh;

  .el-row {
    display: block;
    margin: 0 auto;
    margin-bottom: 5vh;
    background: #d3dce6;  
  }

  .el-col {
    border-radius: 4px;
    img {
      display: block;
      margin: 0 auto;
      width: 100%;
      border-radius: 1vh;
    }

    .teatype {
     
      border-radius: 4px;
      height: 100%;

      h3 {
        padding: 2vh 8vw 2vh 8vw;
        margin: 0;
      }

      p {
        padding: 0 8vw 2vh 8vw;
        margin: 0;
        font-size: 1em;
      }
    }

    .img {
      background: #e5e9f2;
      border-radius: 4px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
</style>