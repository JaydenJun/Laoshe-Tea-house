<template>
  <div class="footer">
    <div class="container">
      <el-row :gutter="10">
        <el-col :xs="24" :md="8" :lg="6"
          ><div class="flog grid-content bg-purple">
            <p>
              <img src="../assets/log2.png" alt="" />
            </p></div
        ></el-col>
        <el-col :xs="24" :md="16" :lg="9"
          ><div class="grid-content bg-purple-light">
            <div class="guanyu">
              <ul>
                <li>
                  <a href="#"><h3>关于茶馆</h3></a>
                </li>
                <li><a href="#">联系我们</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">在线咨询</a></li>
              </ul>
              <ul>
                <li>
                  <a href="#"><h3>生态服务</h3></a>
                </li>
                <li><a href="#">媒体服务</a></li>
                <li><a href="#">广告服务</a></li>
              </ul>
              <ul>
                <li>
                  <a href="#"><h3>帮助中心</h3></a>
                </li>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">提提建议</a></li>
                <li>
                  <img
                    src="http://www.codeboy.com:9999/img/footer/wechat.png"
                    alt=""
                  />
                  <img
                    src="http://www.codeboy.com:9999/img/footer/sinablog.png"
                    alt=""
                  />
                </li>
              </ul>
            </div></div
        ></el-col>
        <el-col :xs="9" :sm="16" :lg="9"
          ><div class="weixin grid-content bg-purple">
            <div>
              <p>官方微信</p>
              <img src="../assets/img/index/vuS0y4VITmGWXjq7Uil7Cw.jpg" />
            </div>
            <div>
              <p>
                总店地址：<br />北京市西城区前门西大街正阳市场三号楼 <br />
                电话：010-63036830 <br />
                网址：www.laosheteahouse.com
              </p>
            </div>

            <!-- 页面底部-备案号 #footer -->
          </div></el-col
        >
      </el-row>
    </div>
    <div class="yedi">
      <p>&copy;2022 八方支援有限公司 版权所有 京ICP备18011375号-2</p>
      <p>文明办网文明上网，投诉电话：15101063588</p>
      <p>Copyright 1988-2022 chawh.net All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;
}
.container {
  width: 88vw;
  margin: 0 auto;
  text-align: center;
  .guanyu {
    display: flex;
    ul {
      li {
        list-style: none;
        margin: 10px 12px;
        a {
          display: block;
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
  .weixin {
    display: flex;
    justify-content: center;
    div {
      margin: 10px 10px;
      p {
        white-space: nowrap;
        line-height: 40px;
      }
    }
  }
  .flog {
    width: 250px;
    margin-left: 3vw;
    img {
      margin-top: 9%;
      width: 100%;
    }
  }
}
.yedi {
  width: 88vw;
  padding: 2px 5px 2px 0;
  text-align: center;
}
</style>
