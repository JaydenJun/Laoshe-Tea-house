<template>
  <div class="ditu">
    <span>本店地址：北京市西城区前门西大街正阳市场三号楼</span>
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
      plugins: [
          "AMap.Scale", 
          'AMap.ToolBar',
          'AMap.HawkEye',
          'AMap.MapType',
          'AMap.Geolocation'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        this.map = new AMap.Map("container", {
          //设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          zoom: 18, //初始化地图级别
          center: [116.393316,39.899706], //初始化地图中心点位置
        });
        this.map.addControl(new AMap.Scale());
        this.map.addControl(new AMap.ToolBar({position: "LT"}));

          // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
          this.map.addControl(new AMap.Scale());

          // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
          this.map.addControl(new AMap.HawkEye({isOpen:true}));
        
          // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
         this.map.addControl(new AMap.MapType());
          // 添加点标记
      var marker = new AMap.Marker({
        position: [116.393316,39.899703]  // 指定标记的经纬度坐标位置
      })
      this.map.add(marker)
      })
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
    font-size: 14px;
    background-color: orange;
    color: #fff;
  }
#container {
  height:500px;
  border: 1px solid black;
  margin-bottom: 20px;
}
</style>
