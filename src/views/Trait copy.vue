<template>
  <div class="tarit">
    <el-tabs type="border-card">
      <el-tab-pane :label="i" v-for="i in lab" :key="i">
        <router-view />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lab: ["曲艺杂谈", "评书专场", "相声专场", "京剧专场", "鼓曲专场"],
    };
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.tarit {
  width: 88vw;
  margin: 0 auto;
}
.yc_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 5px 20px;
  padding-right: 0px;
  overflow: hidden;
}
.ticket {
  margin: 10px 5px;
  width: 360px;
  height: 180px;
  overflow: hidden;
  text-align: left;
  background-color: rgb(231, 227, 227);
}
.ticket .img {
  float: left;
  border: 1px solid #ccc;
  overflow: hidden;
}
.ticket .img img {
  width: 135px;
  height: 180px;
  border: 0;
  overflow: hidden;
}
.ticket .info {
  float: right;
  width: 203px;
  overflow: hidden;
}
.ticket .info dl {
  margin: 5px 0 5px 10px;
}
.ticket .info dl dt {
  margin: 0;
  padding: 0;
  height: 40px;
  line-height: 20px;
}
.ticket .info dl dt a {
  color: #000;
}
.ticket .info dl dd {
  line-height: 26px;
  color: #525252;
}
.ticket .info dl dd.address {
  height: 26px;
  overflow: hidden;
}
.ticket .info dl dd.address a {
  color: #525252;
}
.ticket .info dl dd.price span {
  font-size: 18px;
  font-weight: bold;
  color: #f96c02;
}
.ticket .info dl dd.order {
  padding-right: 10px;
  overflow: hidden;
}
.ticket .info dl dd.order a {
  float: right;
  display: block;
  width: 90px;
  height: 26px;
  line-height: 26px;
  padding-left: 35px;
  color: #1b7c8c;
  border: 1px solid #1b7c8c;
  font-weight: bold;
}
.ticket .info dl dd.order a:hover {
  text-decoration: none;
}
</style>
