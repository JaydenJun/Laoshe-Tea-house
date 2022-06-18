<template>
  <div class="tea">
    <!-- 顶部搜索框 -->
    <el-row :gutter="10">
      <!-- logo -->
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="tealogo">
          <img src="/img/logo.png" alt="">
        </div>
      </el-col>
      <!-- 搜索框 -->
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="input">
          <el-input v-model="kw" @keyup.enter.native="gocell" placeholder="请输入搜索内容" class="input-with-select" value="">
            <el-button slot="append" @click="gocell" icon="el-icon-search">搜索</el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>

    <!-- 茶类 -->
    <el-row class="teatype" v-if="data1">
      <el-col :xs="8" :sm="8" :md="8" :lg="4" :xl="4" v-for="{ teaclass_name, teaclass_id, i } in data1.data" :key="i">
        <span class="" @click="n = teaclass_id" :class="{ active: n == teaclass_id }">
          {{ teaclass_name }}
        </span>
      </el-col>
    </el-row>
    <!-- 茶类小盒子 -->
    <el-row class=" teacell" :gutter="10" v-if="data">
      <tea-cell v-for="item in data.data" :key="item.tea_id" :items="item" />
    </el-row>

    <!-- 大图 -->
    <el-row :gutter="10" class="bigpic">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="grid-content bg-purple">
          <img class="bigpic" src="/img/bigpic.jpeg" alt="">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TeaCell from '../components/TeaCell.vue'
export default {
  components: { TeaCell },
  data() {
    return {
      kw: '',
      data: null,
      data1: null,
      n: '1'
    }
  },
  watch: {
    n() {
      this.getdata3()
    }
  },
  mounted() {
    this.getdata1()
    this.getdata3()
  },
  methods: {
    gocell() {
      this.getdata2();
      this.kw = ''
      this.n = ''
    },
    // 茶分类请求
    getdata1() {
      const url = 'http://localhost:3000/v1/users/teas'
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data1 = res.data
      })
    },
    // 搜索请求
    getdata2() {
      const url = 'http://localhost:3000/v1/users/s?tea_name=' + this.kw
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data
      })
    },
    //点击茶分类的请求
    getdata3() {
      const url = 'http://localhost:3000/v1/users/teatype?teaclass_sid=' + this.n
      console.log(url);
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tea {
  width: 88vw;
  margin: 5vh auto;
  // background-color: #eee;

  .tealogo {
    display: flex;
    justify-content: end;

    img {
      // width: 10vw;
      height: 40px;
      display: block;
      margin-right: 0;
    }
  }

  .el-input {
    width: 65%;
  }

  .teatype {
    margin-top: 5vh;
    width: 100%;
    padding: 0 5vw 0 5vw;
    text-align: center;

    .el-col {
      text-align: center;
      margin-bottom: 3vh;

      span {
        font-size: 1.2em;
        user-select: none;
        padding: 1px 15px !important;

        &.active {
          background-color: #1BAD5B;
          border: 1px solid #eee;
          border-radius: 2vw;
          padding: 0.6vh 2vw;

        }
      }
    }
  }

  .teacell {
    margin: 3vh auto;
    padding: 0 4vw;

    a {
      text-decoration: none;
      color: black;
    }

    img {
      display: block;
      margin: 0 auto;
      width: 15vw;
    }

    h2 {
      text-align: center;
      margin: 2vh;
    }

    p {
      padding: 0 1vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 3vh;
    }
  }

  .bigpic {
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;

    .el-col {
      padding: 0 !important;
    }
  }
}
</style>