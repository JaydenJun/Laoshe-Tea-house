<template>
  <div>
    <div style="width: 88vw; margin: 0 auto">
      <el-row :gutter="10">
        <!-- 详情左侧的一列 -->
        <el-col :span="18" :xs="24"
          ><div class="grid-content bg-purple">
            <!-- 左侧的标题 -->
            <!-- 左侧的头部标题 -->
            <el-row>
              <el-col :span="16" :xs="24">
                <div class="headerrow">
                  <div>
                    <img
                      style="width: 5rem"
                      src="https://assets.puercn.com/xsystem/brands/logos/000/000/031/original/hai-di-300.jpg?1603445849"
                    />
                  </div>
                  <div class="headerzi" style="padding-left: 2rem">
                    <h3>还提</h3>
                    <span>咨询:74条</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" :xs="24">
                <div style="padding: 2rem 0">品牌首页</div>
              </el-col>
            </el-row>
            <!-- 左侧头部下面的详情 -->
            <div>
              <!-- 第一个模块  标题加上时间和品论-->
              <h1>金字标杆 品味非凡，海堤金中茶·一叶天心肉桂</h1>
              <div class="zuoshi" style="width: 90%; padding-bottom: 3rem">
                <div>
                  <i class="el-icon-edit"></i>
                  <span style="padding-left: 1.5rem">2022年6月15日 17:52</span>
                </div>
                <div>
                  <i class="el-icon-edit"></i>
                  <span style="padding-left: 1.5rem">0条评论</span>
                </div>
              </div>
              <!-- 中间根据右侧文字显示的文字介绍 -->
              <div style="width: 90%" v-for="n in 6" :key="n">
                <p>设计理念</p>
                <p style="text-indent: 2em; padding-bottom: 2rem">
                  祥云寓意祥瑞之气，表达了吉祥、喜庆和幸福的愿望以及对生命的美好向往。金色“八中茶”商标作为画面的中心，光芒线条向四周辐射，形成视觉引导线，重点突出品牌视觉。
                </p>
              </div>
            </div>

            <!-- 根据下侧用户的品论与聊天来进行左侧页面的更新 -->









            <div
              style="
                background-color: rgb(123, 123, 123);
                width: 90%;
                height: 30rem;
              "
              class="pinlun"
            >
              <!-- 每位游客的发言以及上传的照片灰色部分 大框框的灰色部分-->
              <div class="colume">
                <!-- <div><img class="pinlun_img" src="" /></div> -->
                <div></div>
                <el-empty
                  description="用户可根据自己掌握最新茶叶咨询上传至此"
                ></el-empty>
              </div>
            </div>

            <!-- 聊天室的图样  -->
            <div id="chart-container" style="width: 85%" class="tuyang">
              <!-- 左侧的一列表，登录人员的显示 -->
              <div class="chart-user-list" id="chart-user-list">
                <div class="user-item" id="userdiv">
                  <img src="" alt="" />
                  <span @click="$router.push('/login')">账号登录</span>
                </div>
              </div>
              <!--  -->
              <div class="chart-main-area">
                <!-- 头部标题 -->
                <div class="chart-main-title">
                  <h4>
                    关于最新茶叶的动态<span id="userNumber"></span
                    ><span id="currentUser"></span>
                  </h4>
                </div>
                <!-- 聊天区域， --> 

                <div class="chart-list" id="chart-list">
                  <!-- <div class="user-logined" id="user-logined"><span id="logined-user"></span>上线了</div>
                    <div class="chart-item">
                        <div class="user-face"><img src="images/avatar/11.jpg" alt=""></div>
                        <div class="user-message">111</div>
                    </div> -->
                </div>

                <!-- 最下面聊天的话语    人员发消息的显示  关于茶叶的最新动态输入框-->
                <div class="chart-form">
                  <div>
                    <textarea
                      ref="mm"
                      class="chart-form-message"
                      id="message"
                    ></textarea>
                  </div>

                  <div>
                    <input
                      type="button"
                      id="send"
                      class="chart-form-send"
                      value="发表"
                      @click="mess"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- 人员关于自己对于新闻的了解，上传的图片以及目前的茶叶目前的状态，来跟新DOM树的显示 -->
            <div style="width: 100%" class="file">
              <el-upload
                class="upload-demo"
                drag
                name="uploadFile"
                :on-success="success"
                action="http://localhost:3002/upload"
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </div></el-col
        >
        <!-- 详情右侧的一列 -->
        <el-col :span="6" :xs="24"
          ><div class="grid-content bg-purple-light"></div>
          <div v-for="n in 7" :key="n" style="width: 100%" class="youimg">
            <img width="100%" src="/2.jpg" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mess() {
      this.messa = message.value;
      console.log(this.messa);
    },

    success(res, file, fileList) {
      alert("图片上传成功");
      console.log(res);
      console.log(res.urls[0]);
      this.pic.push(res.url[0]);
      // "http://localhost:3002/799111f5-31ff-4793-9432-95990cf61b14.jpg"
    },
  },
  // 参数就是this.$route.query.qing;
  data() {
    return {
      qing: this.$route.query.qing,
      pic: [],
      messa: null,
    };
  },
  mounted() {
    console.log(this);
    const url =
      "/v1/users/qin?qing=" + this.$route.query.qing;
    console.log(url);
    this.axios.get(url).then((res) => {
      console.log(res);
      this.data = res.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>

<style lang="scss" scoped>
.youimg {
  margin-top: 100px;
}
h3 {
  padding: 0;
  margin: 0;
}
.headerrow {
  display: flex;
  justify-content: start;
}
.headerzi {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.zuoshi {
  display: flex;
  justify-content: space-between;
}
.file {
  margin-top: 5rem;
}
.tuyang {
  margin-top: 4rem;
}
.chart-form-message {
  width: 70%;
  height: 10rem;
}

//   .grid-content{
//     position: fixed;
//     // right: 0;
//     // top: 50%;
//   }
</style>

