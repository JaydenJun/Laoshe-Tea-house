<template>
  <div>
    <!-- 页头图片 -->
    <div class="sub-banner">
      <img src="/7.jpg" class="hidden-xs hidden-sm" /><img
        src="/1.jpg"
        class="visible-xs visible-sm"
      />
    </div>
    <!--自定义部分 -->
    <div class="product-list-container">
      <div class="edit-container">
        <div class="product-list-inner">
          <div class="row">
            <div class="col-xs-12 col-md-2 sub-nav"></div>

            <div class="col-xs-12 col-md-9 product-list-right">
              <div class="sub-breadcrumb"><a href="">全部产品</a> > 花草茶</div>
              <div class="inner-list">
                <div class="row">
                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">30g盒装玫瑰花冠代用茶</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">200g盒装红豆薏米茶</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">200g盒装荷叶玫瑰茶</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">200g新会柑普洱茶礼盒</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">48g分享装（橙盒）</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="/show-21-299-1.html">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">35g分享装（绿盒）</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">400g罐装柑普茶</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">250g罐装柑白茶</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <div class="pic-box">
                      <a href="">
                        <div class="pic">
                          <img src="/1.jpg" />
                        </div>
                        <div class="title-box">
                          <div class="title">250g罐装小青柑</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="page">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="100"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.sub-banner img {
  display: block;
  width: 100%;
}
.product-list-container {
  margin-top: 85px;
}
.edit-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.page {
  margin: 50px auto;
  text-align: center;
  overflow: hidden;
  width: 100%;
  bottom: 40px;
  left: 0;
}
.sub-nav .top-title {
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  padding: 20px 0;
}
/*产品列表*/
.product-list-container {
  margin-top: 85px;
}

.product-list-container .row {
  margin: 0;
}

.product-list-right {
  float: right;
  padding: 0;
}

.product-list-right .inner-list {
  margin-top: 12px;
}

.product-list-right .inner-list .row {
  margin-left: -15px;
  margin-right: -15px;
}

.product-list-right .inner-list .pic-box {
  margin: 25px 0;
}

.product-list-right .inner-list .pic-box .pic img {
  display: block;
  width: 100%;
}

.product-list-right .inner-list .pic-box .title-box {
  margin-top: 20px;
}

.product-list-right .inner-list .pic-box .title-box .title {
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  position: relative;
}

.product-list-right .inner-list .pic-box .title-box .title:before {
  content: "";
  width: 29px;
  height: 1px;
  background-color: #81a782;
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
