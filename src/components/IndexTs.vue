<template>
  <div class="index-ts">
    <h2>特色茶馆</h2>
    <div>
      <el-row :gutter="10">
        <el-col :xs="24" :md="12" :lg="6"
          ><div class="grid-content bg-purple widths">
            <div @click="tss">
             <img src="/img/评书专场.png" alt=""  />
              <h4>评书专场</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;老舍茶馆在电视台、电台录制播出《三国》、《东汉》、《大隋唐》、《康熙私访》、《水浒》、《红楼梦》、《鹿鼎记》、《智圣东方朔》等十几部长篇评书
              </p>
            </div>
          </div>
          
          </el-col>
        <el-col :xs="24" :md="12" :lg="6"
          ><div class="grid-content bg-purple widths">
            <div @click="tss">
              <img src="/img/相声专场2.png" alt="" />
              <h4>相声专场</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;老舍茶馆相声团队大咖云集，戴九安、魏建洲、夏言、梁显超、佟楠
                、臧威等优秀的相声演员，为您演绎精彩佳段，带您领略原汁原味的传统艺术魅力。用相声带给您轻松快乐的午后休闲时光，即满足您对生活品质的高追求，又满足您放松精神，开怀一笑的本意。
              </p>
            </div>
          </div></el-col
        >
        <el-col :xs="24" :md="12" :lg="6"
          ><div class="grid-content bg-purple widths">
            <div @click="tss">
              <img src="/img/鼓曲专场.png" alt="" />
              <h4>鼓曲专场</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京味综艺《四季北京.茶》，通过四季节气变化，将演出内容与北京生活场景相结合，在三十年上万场次演出经验基础上，结合现代科技手段、融合京味传统文化倾力打造。
                演出涵盖：京剧、鼓曲、杂技、魔术、口技、手影戏、北京京跤、中国功夫等传统文化内容，累计接待国内外观众百万人次,
                曾被列为北京市首批重点推介旅游演出项目。
              </p>
            </div>
          </div></el-col
        >
        <el-col :xs="24" :md="12" :lg="6"
          ><div class="grid-content bg-purple widths">
            <div @click="tss">
              <img src="/img/综艺演出.png" alt="" />
              <h4>综艺演出</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在茶馆观看曲艺表演，曾是老北京人休闲娱乐的“标配”。欣赏着韵味浓郁的传统鼓曲唱段，再喝上一口醇香舒爽的大碗儿茶，这样的“旧景重现”也算得上是一种老北京的文化传承。北京曲艺团作为北京唯一一家地方性曲艺专业团体，一直致力于曲艺艺术的传承与发展。为此，北京曲艺团与北京前门老舍茶馆合作开展非遗鼓曲驻场演出，以老舍茶馆作为发展“阵地”，为京城的观众们送上曲种丰富的鼓曲专场，不仅有原汁原味的传统鼓曲作品，还有弘扬社会主义核心价值观的新创作品。单弦、京韵大鼓、北京琴书、梅花大鼓、河南坠子、西河大鼓、京东大鼓等多个非遗曲种轮番上场，并且不定期邀请曲艺界的艺术家来到鼓曲驻场演出进行助演。让您在不同的曲韵中感受世间百态，了解文学典故，收获幸福感。
              </p>
            </div>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    tss(){
      this.$router.push('/trait')
    }
  }
};
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
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  div {
    // padding: 0 3px;
    padding: 10px;
    h4 {
      margin: 5px 0;
    }
    img {
      width: 80%;
      border: 1px solid #aaa;
      transition: 0.7s;
     &:hover{
        transform: scale(1.05);
    }
    }
  }
}
</style>
