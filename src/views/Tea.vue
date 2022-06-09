<template>
  <div class="tea">
    <!-- 顶部搜索框 -->
    <el-row :gutter="10">
      <!-- logo -->
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="tealogo">
          <img src="/img/logo_baike@2x.png" alt="">
        </div>
      </el-col>
      <!-- 搜索框 -->
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="input">
          <el-input v-model="selected" placeholder="请输入内容" class="input-with-select" value="">
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>

    <!-- 茶类 -->
    <el-row class="teatype">
      <el-col :xs="8" :sm="8" :md="8" :lg="4" :xl="4" v-for="n in 6" :key="n">
        <span class="">
          普洱茶
        </span>
      </el-col>
    </el-row>
    <!-- 茶类小盒子 -->
    <el-row class="teacell" :gutter="10">
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="i in 8" :key="i">
        <router-link to="/teadetails">
          <div>
            <img src="/img/西湖龙井.webp" alt="">
            <h2>
              西湖龙井
            </h2>
            <p>
              西湖龙井是中国十大名茶之一，属绿茶，其产于浙江省杭州市西湖龙井村周围群山，并因此得名，具有1200多年历史；清乾隆游览杭州西湖时，盛赞西湖龙井茶，把狮峰山下胡公庙前的十八棵茶树封为“御茶”。西湖龙井按外形和内质的优次分作1～8级。
              特级西湖龙井茶扁平光滑挺直，色泽嫩绿光润，香气鲜嫩清高，滋味鲜爽甘醇，叶底细嫩呈朵。清明节前采制的龙井茶简称明前龙井，美称女儿红，“院外风荷西子笑，明前龙井女儿红。”西湖龙井茶与西湖一样，是人、自然、文化三者的完美结晶，是西湖地域文化的重要载体。
            </p>
          </div>
        </router-link>
      </el-col>
    </el-row>

    <!-- 大图 -->
    <el-row :gutter="10" class="bigpic">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="grid-content bg-purple">
          <img class="bigpic" src="/img/tea2.jpeg" alt="">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  },
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