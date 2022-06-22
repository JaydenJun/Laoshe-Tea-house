<template>
  <div>
    <!-- 轮播图 -->
    <swiper
      @mouseover.native="stopSwiper"
      @mouseout.native="startSwiper"
      ref="swiper"
      class="swiper"
      :options="swiperOptions"
      v-if="imgimg"
    >
      <swiper-slide class="swiper-slides" v-for="i in imgimg" :key="i.img_id">
          <img :src="img+i.img_src" alt="" />
      </swiper-slide>
      

      <!-- <swiper-slide v-for="{ cid, img } in data.carouselItems" :key="cid">
        <img :src="imgBase + img" alt="" />
      </swiper-slide> -->

      <!-- 分页器: 必须放入对应插槽中 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 左右箭头: 必须放在对应的插槽中 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!-- 茶馆特色：组件 -->
    <index-ts/>
    <!-- 茶友圈：组件 -->
    <index-cyq/>
    <!-- 茶馆资讯和组件 -->
    <index-zx/>
    <!-- 茶百科组件 -->
    <index-hot/>
  </div>
</template>

<script>
import IndexTs from '@/components/IndexTs.vue';
import IndexZx from '@/components/IndexZx.vue';
import IndexHot from '@/components/IndexHot.vue';
import IndexCyq from '@/components/IndexCyq.vue';
import { mapState } from 'vuex';
export default {
  components: { IndexTs, IndexZx, IndexHot, IndexCyq },
  computed:{...mapState(["img"])},
  data() {
    return {
      imgimg:null,
      data: null, // 把请求数据存储到本地
      // swiper配置项:
      swiperOptions: {
        //效果,特效  默认为"slide"（普通位移切换），还可设置为"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）
        effect: "slide",
        // 无限循环
        loop: true,
        // 自动滚动
        // autoplay: true, //默认的效果
        // 个性化配置
        autoplay: {
          delay: 2000, //间隔时长, 单位毫秒
          disableOnInteraction: false, //用户操作swiper后是否禁用自动滚动
        },
        // 分页器: 官方的API文档是 HTML版本的, 与 vue 中用法有细微差异
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //响应点击事件
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted(){
    this.axios.get("/v1/users/indexss").then((res)=>{
console.log(res)
this.imgimg=res.data.data
    })
  },
  methods: {
    // 鼠标进入时
    stopSwiper() {
      // console.log("我进来了!");
      console.log(this.$refs.swiper);
      // 中国.北京.丰台.大红门.xxx
      this.$refs.swiper.$swiper.autoplay.stop();
    },
    // 鼠标离开时
    startSwiper() {
      // console.log("我出来了!");
      this.$refs.swiper.$swiper.autoplay.start();
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  .swiper-slides {
    margin: 0px auto;
    background-color: #eee;
  }
  div {
    width: 100%;
    text-align: center;
    img {
      width:88vw;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 12vw;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
  }
}
</style>