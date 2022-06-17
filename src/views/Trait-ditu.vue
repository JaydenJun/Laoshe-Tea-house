<template>
  <div class="ditu">
    <span>本店地址：</span>
    <div id="container"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  securityJsCode: "6c042ff4c618442a868632b938b8e878",
};
export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    AMapLoader.load({
      key: "99c995e995875b34955b76eceb127da8", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.Scale", "AMap.Weather"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        this.map = new AMap.Map("container", {
          //设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          zoom: 11, //初始化地图级别
          center: [105.602725, 37.076636], //初始化地图中心点位置
        });
        this.map.addControl(new AMap.Scale());

        let weather = new AMap.Weather();
        weather.getForecast("北京", function (status, result) {
          console.log(status, result);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<style scoped>
.ditu{
  margin: 0 auto;
  width: 88vw;
}
  span{
    display: inline-block;
    padding: 10px;
    margin: 5px;
    font-size: 20px;
    background-color: orange;
    color: #fff;
  }
#container {
  height:500px;
  border: 1px solid black;
  margin-bottom: 20px;
}
</style>
