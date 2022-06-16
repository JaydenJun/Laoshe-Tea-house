<template>
  <div class="teadetails">
    <el-row>
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <div class="teatype" v-if="data" v-html="data.data[0].tea_details">
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="img">
          <img src="/img/西湖龙井.webp" alt="">
        </div>
        <div class="img">
          <img src="/img/西湖龙井.webp" alt="">
        </div>
        <div class="img">
          <img src="/img/西湖龙井.webp" alt="">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['tea_id'],
  data() {
    return {
      data: null
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata() {
      const url = 'http://localhost:3000/v1/users/teadetails?tea_id=' + this.tea_id
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data
      })

    }
  }
}
</script>

<style lang="scss">
.teadetails {
  width: 88vw;
  margin: 0 auto;
  background-color: #eee;
  margin-top: 5vh;

  .el-row {
    display: block;
    margin: 0 auto;
    margin-bottom: 5vh;
  }

  .el-col {
    border-radius: 4px;

    img {
      display: block;
      margin: 0 auto;
      width: 65%;
      height: 35vh;
      border-radius: 1vh;
    }

    .teatype {
      border-radius: 4px;
      height: 100%;

      h3 {
        padding: 2vh 5vw 2vh 5vw;
        margin: 0;
      }

      p {
        padding: 0 5vw 2vh 5vw;
        margin: 0;
        font-size: 1em;
        text-indent: 2em
      }
    }

    .img {
      border-radius: 4px;
      height: 100%;
      display: flex;
      align-items: center;
      margin-top: 10vh;
    }
  }
}
</style>