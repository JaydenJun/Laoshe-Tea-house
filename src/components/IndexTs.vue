<template>
  <div class="index-ts">
    <h2>特色茶馆</h2>
    <div>
      <el-row :gutter="10">
        <el-col :xs="24" :md="12" :lg="6" v-for="n in 4" :key="n"
          ><div class="grid-content bg-purple widths">
            <div>
              <img src="../assets/img/Home_files/b4.jpg" alt="" />
              <h4>话剧</h4>
              <p>
                简介Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat, ratione iusto. Repudiandae, deleniti error. Cumque vel
                aliquid nobis sed a, excepturi dolores! Nisi, mollitia sunt.
                Ducimus ea quos beatae dolorem!
              </p>
            </div>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.index-ts {
  width: 88vw;
  margin: 0 auto;
  text-align: center;
  h2 {
    // padding: 10vh 0;
    margin: 30px 0;
  }
  div {
    // padding: 0 3px;
    h4 {
      margin: 5px 0;
    }
    img {
      width: 80%;
    }
  }
}
</style>