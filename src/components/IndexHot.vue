<template>
  <div class="index-hot">
    <div>
      <div>
        <h3>热销商品</h3>
        <el-row :gutter="10">
          <el-col :xs="24" :md="12" :lg="6" v-for="i in 4" :key="i"
            ><div class="grid-content bg-purple box">
              <div><img src="../assets/img/index/1.png" alt="" /></div>
              <span>价格</span>
              <p>标题</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                saepe laudantium sapiente accusamus perferendis consectetur.
                Alias quam eaque voluptates pariatur repudiandae minus id
                eveniet perspiciatis, consectetur eum, cupiditate, quaerat
                nostrum.
              </p>
              <div>
                <span>品种</span>
                <span>年份</span>
                <span>销量</span>
              </div>
            </div></el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      width: 100%;
    }
  }
}
</style>