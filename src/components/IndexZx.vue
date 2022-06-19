<template>
  <div class="index-zx">
    <el-row :gutter="10">
      <el-col :xs="24" :md="12"
        ><div class="grid-content bg-purple">
          <h3>茶馆历史</h3>
          <div><img src="../assets/img/index/aasdss_11.jpg" alt="" /></div>
          <div class="his">
            <h4>北京老舍茶馆</h4>
            <p>
              始建于1988年，其前身可追溯到1979年的前门大碗茶。老舍茶馆位于天安门广场西南面，与北京古商业街大栅栏为邻，地理位置独特，文化底蕴深厚。
            </p>
            <p>
              老舍茶馆以“振兴古国茶文化，扶植民族艺术花”为经营宗旨，现营业面积5000多平方米，是集京味茶文化、戏曲文化、餐饮文化等于一身，融书茶馆、餐茶馆、清茶馆、大茶馆、野茶馆、清音桌等六大老北京传统茶馆形式于一体的京味茶馆文化集萃地，包含茶事服务、文化演出、特色餐饮和茶礼品四大经营业态。店内开设有京味茶文化产品服务体验售卖区、艺苑、四合茶院、品珍楼、演出大厅等经营场所，另有老二分大碗茶摊、戏迷乐京剧票房和老北京传统商业博物馆三大公益项目。
            </p>
            <p>
              自开业以来，老舍茶馆共接待了包括美国前总统布什、前国务卿基辛格，俄罗斯前总理普里马科夫，德国前总理科尔等来自80个国家的180多位外国元首政要，众多社会名流和700多万中外游客，拥有全国16家连锁店，被誉为展示民族文化精品的
              “窗口”和联结中外人民友谊的“桥梁”;有着“北京城市名片”和“京味人文地标”的美誉;先后被评为国家文化产业示范基地、国家3A级旅游景区(点)、全国文明单位、全国百佳茶馆之首和北京市著名商标。
            </p>
          </div>
        </div></el-col
      >
      <el-col :xs="24" :md="12" v-if="data"
        ><div class="grid-content bg-purple-light">
          <h3>茶闻资讯</h3>
          <div class="xq">
            <div v-for="i in data.data" :key="i.class_id">
              <div>
                <a href="">
                  <img :src="'http://localhost:8080' + i.new_pic" alt="" />
                </a>
              </div>
              <div>
                <h4>{{ i.new_title }}</h4>
                <p>
                  {{i.new_subtitle }}
                </p>
                <div>
                  <span>{{
                    moment
                      .unix(new Date(i.new_time).getTime() / 1000)
                      .format("yyyy年MM月DD日 HH:mm")
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "http://localhost:3000/v1/users/xiang?xiao=5";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index-zx {
  width: 88vw;
  margin: 0 auto;
  text-align: center;
  h3 {
    // padding: 10vh 0;
  }
  div {
    position: relative;
    padding: 3px;

    img {
      width: 100%;
    }
    .his {
      bottom: 1px;
      margin-top: -380px;
      padding: 0 15px 1px 15px;
      background-color: #eee;
      opacity: 0.8;
      h4 {
        padding-top: 2px;
        margin: 0;
      }
    }
  }
  .xq {
    max-height: 100vh;
    overflow-y: auto;
    > div {
      display: flex;
      > div:first-child {
        width: 20%;
        img {
          width: 100%;
        }
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 80%;
        p {
          padding: 0;
          margin: 3px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h4 {
          margin: 3px 0;
        }
        > div {
          display: inline-block;
          width: 100%;
          span {
            display: inline-block;
            margin: 0 5px;
          }
        }
      }
    }
  }
}
</style>
