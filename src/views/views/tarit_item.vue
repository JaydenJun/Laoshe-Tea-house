<template>
  <div style="width: 88vw; margin: 0 auto">
    <el-row v-if="data">
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <div>
            <div>
              <div class="dingbu">
                <div>
                  <a
                    ><img
                      src="https://img.alicdn.com/imgextra/i1/2251059038/O1CN019X1cxL2GdSLnjQVjL_!!2251059038.png"
                  /></a>
                </div>
                <div>
                  <h3>{{ id.slice(0, -1) }}</h3>
                  <div style="display: inline-flex">
                    <p>
                      <img
                        style="vertical-align: middle"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEUAAACZmZmampqampqZmZmampqbm5uZmZmZmZmZmZmfn5+ampqampqampqampqampqZmZmbm5uampqhoaGcnJyZmZmdnZ2ZmZmZmZmampqZmZmTZYcKAAAAGnRSTlMA0+GMX6Y79KAjCO3p2ce/gnRREw62HH1zR8odNq8AAADzSURBVDjLlZPpcsMgDITDZZz4io+k7ff+D9rUbthAM8N0fzAYrYW0Wk7/QeOmIcZhcs276GXuSejnSxlfLMAYnAsjgF3y+BUwfj0+Vm+A62s8QOdfD3wHIfvfnPOUZ4NyLGC2Y/vVPombgeW3fkv3PDa4lKPDHr3MkO63tKoD5n3TY045IaXrd/3AFwSl+NHUwfqesLJXNDGeMoIwMj3WgVASpN/wWKM6KwmO+JdwywnlFTcwTXZFUeTWAuGuIlObspWB+JHalFCy1mcEn4SS1MI92EZSa1iChlWMW9C4ZRhBhqlZrmbauu3rD6f+9OqPt45v41EVRLtD0nwAAAAASUVORK5CYII="
                      />场次时间：<span>2022.07.01 - 2022.07.05</span>
                    </p>
                    <p>
                      <img
                        style="vertical-align: middle"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAMAAAA2a+hwAAAAhFBMVEUAAACZmZmcnJzp6embm5ukpKSZmZmampqcnJycnJyampqampqZmZmbm5uampqhoaGZmZmZmZmampqZmZmampqbm5ubm5ubm5udnZ2ampqampqampqcnJyampqampqampqampqampqZmZmampqampqZmZmampqampqampqampqbm5uZmZn5NGtbAAAAK3RSTlMA8ycCLwfmoRsV+O/bclgO6+HGvoiCZTYgznpsTD3LsI5F1dG1rZyYkVBe5pWuUAAAAV5JREFUKM91kul2gjAQhRMRkKXIKiJWrXXt9/7vVyYBBY/eH5NM7py5s0Q94G6veZwei6p21AuWlWZAnEzpnxTI/HJz2Gtgtx5xX8B53qe/N5B+P7gVeE9POW2InvVOHfK7mKh8a+KlvTZERmPmx9FvaR4TKG0xkBjhEEFmBHwiE3Umc2xwdKn2oEViBishParOBmknbOVO8rrD7+wC7rbi+dCWBF05dnZuXw9knbUJf7pjg/ckbyNy+yDXNnIFtu8WpLGSWOah+ZKCNPlSEkUUElNwliPnNMzw0F76ybmazag8VWGQbsX561WCsB9VfYrwroGZfcNOGfiEww6c554Se1tocleNMYvIh3sL/pgLYkLpfUjM5sm5BSSf3AtUL4l0PXwoEZlgneLZr7KFwlVT1JrGjE9zlHOKO+wdFWR46ykxaJVuLtrvcINGlvkWzh5o1Qe4Ow7qI4KbM3b/Aa8RJmh4dvkeAAAAAElFTkSuQmCC"
                      />地址：<span><span>北京市 </span>北京老舍茶馆</span>
                    </p>
                  </div>
                  <!---->

                  <div style="display: inline-flex">
                    <div>
                      <label style="padding: 20px">选择服务：</label>
                      <ul>
                        <li
                          v-for="n in data.data"
                          :key="n.spec_id"
                          @click="(lid = n.spec_id),(spetil=n.show_subtitle),(spetilp=n.spec_price)"
                         
                        >
                          <div
                            class="fuwu"
                            :class="{ active: n.spec_id == lid }"
                          >
                            <span>{{ n.show_subtitle }}</span>
                          </div>
                          <!---->
                        </li>

                        <!---->
                      </ul>
                    </div>

                    <div>
                      <label style="padding: 20px">价格介绍：</label>
                      <ul>
                        <li class="fuwus"
                          style="margin: 10px 10px; padding: 5px"
                          v-for="n in data.data"
                          :key="n.spec_id"
                          @click="(lid = n.spec_id)"
                          :class="{ active: n.spec_id == lid }"
                        >
                          <span
                            >{{ n.spec_region }} (￥{{ n.spec_price }}元)</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div style="display: block; text-align: center">
                    <button style="padding: 20px 40px" @click="Order">立即预定</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="biaoti">
                <h4>项目介绍</h4>
                <h4>观看须知</h4>
                <h4>场次通知</h4>
              </div>
              <!-- 公告 -->
              <div>
                <div>
                  <h2 style="text-align: center"><strong>公告</strong></h2>
                  <p>
                    <strong
                      >因各地突发、疫情情况增多，根据防控要求，自2021年7月30日起，老舍茶馆剧场观演要求如下：</strong
                    >
                  </p>
                  <p>
                    <strong>1</strong><strong>、</strong
                    ><strong>观演过程中，请您佩戴好口罩；</strong>
                  </p>
                  <p>
                    <strong>2</strong
                    ><strong>、到店，入场测试体温及健康宝、行程码扫码；</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>以上如给您带来不便，敬请谅解，感谢配合！</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>温馨提示</p>
                  <p>
                    <strong>1</strong
                    ><strong
                      >、本演出需实名制购票，一单一证（一单一证只需输入一位顾客身份证信息即可）；</strong
                    >
                  </p>
                  <p><strong>2</strong><strong>、取票方式：</strong></p>
                  <p>
                    <strong
                      >（1）大麦网：需购票人，下单时预留身份证信息，持身份证原件，演出当天到老舍茶馆一层大厅自助取票机取票；</strong
                    >
                  </p>
                  <p>
                    <strong
                      >（2）老舍茶馆公众号/官网/猫眼演出：购票人收取短信，短信内容包含取票码，演出当天到老舍茶馆一层大厅输入取票码取票；</strong
                    >
                  </p>
                  <p>
                    <strong
                      >3、入场时间：演出开演前，
                      30分钟；演出时间：每晚19:50—21:20</strong
                    >
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>4</strong
                    ><strong
                      >、请您下单前仔细核对订单及观演页面内容信息，演出票一经售出，不支持退换及改签，自行处理，敬请谅解；</strong
                    >
                  </p>
                  <p><strong>5、优待政策：</strong></p>
                  <p>
                    <img
                      src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN01AQDef82GdSLgUdAVr_!!2251059038.png"
                    />
                  </p>
                  <p>
                    <strong
                      >6、老舍茶馆官方客服电话：010-63036830（服务时间早10:00—20:00）</strong
                    >
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>票价内容：此价格实施日期（2021年10月1日起）</strong>
                  </p>
                  <p>
                    <strong
                      ><img
                        src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN01EyNrtD2GdSLmmWvHz_!!2251059038.png"
                    /></strong>
                  </p>
                  <p><strong>项目介绍</strong>：</p>
                  <p>
                    京味综艺《四季北京.茶》，通过四季节气变化，将演出内容与北京生活场景相结合，在三十年上万场次演出经验基础上，结合现代科技手段、融合京味传统文化倾力打造。
                  </p>
                  <p>
                    演出涵盖：京剧、鼓曲、杂技、魔术、口技、手影戏、北京京跤、中国功夫等传统文化内容，累计接待国内外观众百万人次,
                    曾被列为北京市首批重点推介旅游演出项目。<strong
                      >【具体演出节目内容及顺序，以当日演出为准，此介绍仅供参考】</strong
                    >
                  </p>
                  <p>
                    捧一盏香茗，观一场演出，感受一座北京城，使您在愉悦的夜晚流连中，留下一段难忘的记忆！
                  </p>
                  <p>&nbsp;</p>
                  <p style="text-align: left">&nbsp;</p>
                  <p style="text-align: left">
                    <strong>节目及演员介绍：（仅供参考）</strong>
                  </p>
                  <p style="text-align: left"><strong>含灯大鼓：</strong></p>
                  <p style="text-align: left">
                    含灯大鼓起源于清末民初，最初叫“叼灯大鼓”，也叫“衔灯大鼓”。曲调与梅花大鼓完全相同，差别在于演员演唱时须口含灯架。口中灯架橫长近尺，上竖数支点燃的蜡烛，下缀彩色流苏，一场含灯大鼓唱完蜡烛不倒，说唱文化杂耍技艺两者合二为一，可视可听，悦人耳目。
                  </p>
                  <p style="text-align: left"><strong>王玉兰：</strong></p>
                  <p style="text-align: left">
                    国家一级演员，主要表演形式为梅花大鼓、含灯大鼓。代表作品《梅花的故事》、《两头忙》等。曾获得第三届曲艺牡丹表演奖。
                  </p>
                  <p style="text-align: left"><strong>陈秀敏：</strong></p>
                  <p style="text-align: left">
                    国家一级演员，优秀的京韵大鼓表演者，曾荣获第二届中国曲艺节牡丹奖、第六届全军文艺会演曲艺表演一等奖。全国曲艺优秀节目观摩演出二等奖。
                  </p>
                  <p style="text-align: left">
                    <img
                      src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN01QMoNEd2GdSDX5CDys_!!2251059038.png"
                    />
                  </p>
                  <p style="text-align: left"><strong>手影戏：</strong></p>
                  <p style="text-align: left">
                    民间特有艺术形式，依托手部投影幻化出千百种影像。运用灯光反打技术，把手的造型投到屏幕上，同时配上口技，声影结合，并辅以故事情节进行创新。手影戏用十指灵动，演艺天上飞、地上跑、水里游的万众生灵，口技技艺更是惟妙惟肖，令人惊叹。
                  </p>
                  <p style="text-align: left">
                    <strong>许国立：</strong
                    >国家一级演员，曾为近百部影视剧进行配音，出访多个国家进行文化交流。
                  </p>
                  <p style="text-align: left">
                    <img
                      src="https://img.alicdn.com/imgextra/i1/2251059038/O1CN01e70WJW2GdSDX5Ctf0_!!2251059038.png"
                    />
                  </p>
                  <p style="text-align: left"><strong>变脸：</strong></p>
                  <p style="text-align: left">
                    川剧表演艺术的特殊技巧之一。变脸之于川剧，有如喷火之于秦腔，皆属招牌路数、看家绝技。随着剧情的进展，演员在舞蹈动作的掩护下，一张一张地将脸谱扯下来。巧妙动作，掩观众耳目；动作干净利落，一张脸刹那间可以变幻出十四张之多。看过之后，观众无不惊叹，它是揭示剧中人物内心思想感情的一种浪漫主义手法。把不可见的、不可感的抽象的东西变成可见、可感的具体的东西。
                  </p>
                  <p style="text-align: left">
                    <strong>冯亚男</strong>：国家三级演员
                  </p>
                  <p style="text-align: left">
                    <img
                      src="https://img.alicdn.com/imgextra/i2/2251059038/O1CN01YU8mqW2GdSDZI10P9_!!2251059038.png"
                      width="283"
                      height="377"
                    />
                  </p>
                  <p style="text-align: left"><strong>顶坛子</strong></p>
                  <p style="text-align: left">
                    顶坛子，北京老天桥绝活。真瓷小坛、大缸在演员的手中犹如玩具，演员稳稳地在头上做出顶、转、抛等高难度动作。轰动全场。值得一提，老舍茶馆特邀请天桥八大怪之一“坛子周”的后裔传人倾情献艺，重现北京老天桥顶坛子绝技。
                  </p>
                  <p style="text-align: left">
                    <strong>周仁喜</strong
                    >：老北京天桥八大怪之一的传人，曾经多次为国家元首进行演出。其表演是一种传统的杂技艺术，表演用的坛子小的重6斤，大的重20斤，但表演时在演员的身上和头上显得轻盈如鸿、旋转自如，充分的显示了演员高难度的技巧和深厚的表演功底。曾作为主要文化交流节目，出访台湾进行演出。
                  </p>
                  <p style="text-align: left">
                    <img
                      src="https://img.alicdn.com/imgextra/i2/2251059038/O1CN01Qj3XcF2GdSDdBM9Co_!!2251059038.png"
                    />
                  </p>
                  <p style="text-align: left"><strong>中国功夫</strong></p>
                  <p style="text-align: left">
                    2008年随文化局赴芬兰宣传第29届北京奥运会、2009年参加“祖国60华诞”国庆演出，并获得特殊贡献奖、2013年代表中国赴加拿大交流武术文化、2015年参加中央电视台《出彩中国人》栏目等等。
                  </p>
                  <p style="text-align: left">
                    中国功夫讲究刚柔并济，内外兼修。上武得道，平天下；中武入喆，安身心；下武精技，防侵害，既有刚健雄美的外形，更有典雅深邃的内涵，蕴含着先哲们对生命和宇宙的参悟。中国功夫不仅仅是搏击术、单纯的拳脚运动，更是世界上独一无二的“武文化”。
                  </p>
                  <p style="text-align: left">
                    <img
                      src="https://img.alicdn.com/imgextra/i4/2251059038/O1CN01eqdfML2GdSDahcFn6_!!2251059038.png"
                    />
                  </p>
                  <p style="text-align: left">【茶馆简介】</p>
                  <p style="text-align: left">
                    老舍茶馆始建于1988年，是以人民艺术家老舍先生及其名剧《茶馆》命名，是集京味文化、茶文化、戏曲文化、餐食文化于一身，融书茶馆、餐茶馆、清茶馆、大茶馆、野茶馆、清音桌茶馆、六大老北京传统茶馆形式于一体的京味文化茶馆！
                  </p>
                  <p style="text-align: left">
                    <strong>走进京味老舍茶馆--体验地道京味文化</strong>
                  </p>
                  <p style="text-align: left">
                    <strong>接待过基辛格、老布什等170多位政要</strong>
                  </p>
                  <p style="text-align: left">
                    <strong>是中外宾客品茗茶、赏京戏、吃京菜</strong>
                  </p>
                  <p style="text-align: left">
                    <strong
                      >购买京味特产，礼物，体验京味文化的必到之处！</strong
                    >
                  </p>
                  <p style="text-align: left"><strong>&nbsp;</strong></p>

                  <p style="text-align: left">
                    <img
                      src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN01rhvWP62GdSDZpsMwA_!!2251059038.jpg"
                      width="368"
                      height="245"
                    />
                  </p>
                  <p style="text-align: left">&nbsp;</p>
                  <p style="text-align: left">
                    <img
                      src="https://img.alicdn.com/imgextra/i4/2251059038/O1CN01T2NJeZ2GdSDdIpZYs_!!2251059038.jpg"
                      width="386"
                      height="290"
                    />
                  </p>
                  <p style="text-align: left">
                    <img
                      src="https://img.alicdn.com/imgextra/i2/2251059038/O1CN014NKxRG2GdSDZpz0uZ_!!2251059038.jpg"
                      width="388"
                      height="313"
                    />
                  </p>
                  <p style="text-align: left">&nbsp;</p>
                  <p style="text-align: left">&nbsp;</p>
                </div>
                <div>
                  <h4>观看时长</h4>
                  <p>以现场为准</p>
                  <h4>入场时间</h4>
                  <p>开始前30分钟</p>
                  <h4>儿童购票说明</h4>
                  <p>1.2米以上儿童凭成人票入场，1.2米以下儿童无座位</p>
                  <h4>寄存说明</h4>
                  <p>无寄存处，请自行保管携带物品</p>
                  <h4>禁止携带物品说明</h4>
                  <p>
                    1.由于安保和版权的原因，演出禁止携带食品、饮料、专业摄录设备、打火机等物品、请您注意现场工作人员的提示，予以配合。
                    2.疫情防控期间，请您观演过程中佩戴口罩，到店扫行程轨迹。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <img
                        src="https://maizuo-saas.oss-cn-hangzhou.aliyuncs.com/10488/6d0b9bbf-3e86-481e-9f72-bce505b57399.jpg"
                        alt="图片加载失败，请刷新重试"
                      />
                      <p>微信公众号</p>
                    </div>
                    <div class="QRC-show-pic">
                      <img
                        src="https://maizuo-saas.oss-cn-hangzhou.aliyuncs.com/10488/b20ea93d-0faa-4335-b125-4da085d13c10.jpg"
                        alt="图片加载失败，请刷新重试"
                      />
                      <p>官方微博</p>
                    </div>
                  </div>
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
  props: ["id"],
  data() {
    return {
      data: null,
      lid: "",
      spetil:"",
      spetilp:""
    };
  },
  mounted() {
    this.getData();
    this.cats();
  },
  methods: {
    cats() {
      this.lid = this.id.charAt(this.id.length - 1);
    },
    getData() {
      let url =
        "http://127.0.0.1:3000/v1/users/shopp?show_sid=" +
        this.id.charAt(this.id.length - 1);
      console.log(this.id.charAt(this.id.length - 1));
      this.axios.get(url).then((res) => {
        this.data = res.data;
        console.log(res);
        this.lid = res.data.data[0].spec_id;
      });
    },
  Order() {
    const url = "http://127.0.0.1:3000/v1/users/buy";
    const params = `show_oid=${this.id.charAt(this.id.length - 1)}&shows_name=${this.id.slice(0,-1)}&show_spec=${this.spetil}&order_pice=${this.spetilp}`;
    this.axios.post(url,params).then((res) => {
      console.log(res);
      if(res.data.code==200){
        alert(res.data.msg)
        this.$router.push("/traitditu")
      }else{
        alert(res.data.msg)
      }
    });
  },
  },
};
</script>

<style lang="scss" scoped>
.dingbu {
  display: inline-flex;
  h3 {
    margin: 5px 20px;
  }
  p {
    margin: 20px;
  }
  > div:nth-child(2) {
    padding: 10px;
    li {
      list-style: none;
    }
  }
}
.biaoti {
  display: inline-flex;
  padding: 20px;
  width: 100%;

  margin: 20px 0;
  border-bottom: 1px solid #333;
  background-image: linear-gradient(#666, #eee);
}
.fuwu {
  padding: 5px;
  margin: 5px;
  display: inline-flex;
  background-color: #ddd;
  &.active {
    background-color: #f5e;
    color: #fff;
  }
}
.fuwus {
  padding: 5px;
  margin: 5px;
  background-color: #ddd;
  &.active {
    background-color: #f5e;
    color: #fff;
  }
}
</style>
