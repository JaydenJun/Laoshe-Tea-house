<template>
  <div>
    <div class="details">
      <div class="left">
        <img src="/01.jpg" alt="" />
      </div>
      <div class="right">
      </div>
    </div>
    <div class="know">
      <p class="xiangqing-top">购票说明</p>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>选择演出</el-breadcrumb-item>
        <el-breadcrumb-item>确认订单信息</el-breadcrumb-item>
        <el-breadcrumb-item>选择配送方式</el-breadcrumb-item>
        <el-breadcrumb-item>选择支付方式</el-breadcrumb-item>
        <el-breadcrumb-item>完成购票</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="l-gmtishi" id="xz2">
      <div class="xiangqing-top">
        <span></span>
        购票提示
      </div>
      <div class="noticecon">
        <p>
          1.有票官方确保售出票品真实有效，请放心购买；
          2.演出详情仅供参考，具体以主办方公布信息及现场为准，请准时到场以免错过演出；
          3.演出票品为特殊商品，除不可抗力因素导致演出取消外，订单不支持无理由退换，可在平台转售；
          4.根据演出火爆情况，有票平台可能会将您所选的快递送票、上门自取等取票方式调整为现场取票，敬请谅解；
          5.平台会尽力促使卖家履行交易协议，如果卖家付票过程中发生问题，本平台可协调相同或更高票挡的票品代替，否则，平台将全额退款并按订单上约定的赔付方式与金额向用户进行赔付
          。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  user-select: none;
  list-style: none;
}
.details {
  width: 88vw;
  height: 50vh;
  margin: 0 auto;
  display: flex;
}
.left {
  height: 100%;
  width: 40%;
  float: left;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
.right {
  width: 60%;
  float: right;
}
.know {
  height: 125px;
  width: 88vw;
  margin: 0 auto;
  background-color: #fff;
  padding: 0 20px;
  border: 1px solid #e0e7eb;
  border-radius: 3px;
  margin-top: 20px;
}
.xiangqing-top {
  height: 53px;
  line-height: 53px;
  font-size: 15px;
  color: #ff5219;
  border-bottom: 1px dashed #dcdcdc;
}
.l-gmtishi {
  width: 88vw;
  margin: 0 auto;
  background-color: #fff;
  padding: 0 20px;
  border: 1px solid #e0e7eb;
  border-radius: 3px;
  margin-top: 20px;
}
.xiangqing-top {
  height: 53px;
  line-height: 53px;
  font-size: 15px;
  color: #ff5219;
  border-bottom: 1px dashed #dcdcdc;
}
.noticecon {
  padding: 10px 20px;
  overflow: hidden;
}
.noticecon p {
  line-height: 30px;
  color: #2d3e4f;
  font-size: 14px;
}
</style>