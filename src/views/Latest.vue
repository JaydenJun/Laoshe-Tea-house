<template>
  <!-- 用户发帖区域 -->
  <div>
    <div class="center-3" v-for="i in data" :key="i.ring_id">
      <span>{{ i.user_name }}</span>
      <p>{{ i.ring_details }}</p>
      <div>
        <div class="img-1">
          <img :src="img + i.ring_pic" alt="" id="img-2" />
        </div>
      </div>
      <div class="center-3-2">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="textarea"
        >
        </el-input>
        <el-button
          :disabled="textarea == '' ? true : false"
          id="btn1"
          :plain="true"
          @click="fbdata(i.ring_id)"
          >发表评论</el-button
        >
        <el-divider></el-divider>

        <el-badge :value="i.ring_prise" class="item">
          <el-button
            size="small"
            @click="dzgetdata(i.ring_prise + 1, i.ring_id)"
            >点赞</el-button
          >
        </el-badge>
      </div>
      <div>
        <el-divider></el-divider>
        <!-- 绑定点击事件传参啊 i.ring_id-->
        <el-button
          @click="(drawer = true), clickpinglu(i.ring_id)"
          type="primary"
          style="margin-left: 16px"
        >
          点击查看评论信息
        </el-button>
        <!-- 抽屉式这句话 :visible.sync="drawer" drawer为true才出来-->
        <el-drawer
          title="历史评论信息"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose"
        >
          <p v-for="v in pldata" :key="v.ring_id">匿名：{{ v.comment_cont }}</p>
        </el-drawer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["img", "loginname"]),
  },
  data() {
    return {
      //评论按钮过滤空
      nums: false,
      // 评论输入框双向绑定变量
      textarea: "",

      data: null,
      pldata: null,

      //保存点赞量
      prises: "",

      // 历史评论信息
      drawer: false,
      direction: "rtl",
      a: "",
      b: 0,
    };
  },
  methods: {
    //发送点赞请求
    dzgetdata(ring_prise, ring_id) {
      if (this.loginname != null) {
        this.b = ring_prise;

        const url = "/v1/users/give";
        const params = `ring_prise=${this.b}&ring_id=${ring_id}`;
        this.axios.post(url, params).then((res) => {
          console.log(res);
          console.log("c:" + ring_id, this.b);
          if (res.data.code == 200) {
            this.getdata();
          }
        });
      } else {
        this.$message({
          showClose: true,
          message: "用户未登录，请登录后再进行点赞",
          type: "success",
        });
      }
    },

    //发送发表评论请求
    fbdata(ring_id) {
      if (this.loginname != null) {
        const url = "/v1/users/sendcm";
        const params = `ring_sid=${ring_id}&comment_cont=${this.textarea}`;
        this.axios.post(url, params).then((res) => {
          console.log(res);

          if (res.data.code == 200) {
            this.$message({
              showClose: true,
              message: "恭喜你，发表成功",
              type: "success",
            });

            this.textarea = "";
            this.a = true;
          }
        });
      } else {
        this.$message({
          showClose: true,
          message: "用户未登录，请登录后再进行评论",
          type: "success",
        });
      }
    },
    //发送历史记录的请求
    clickpinglu(id) {
      console.log("拿到的id" + id);
      const url = "/v1/users/comment?ring_sid=" + id;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.pldata = res.data.data;
      });
      if (this.drawer == false) {
        this.drawer = false;
      } else {
        this.drawer = true;
      }
    },
    // 最新帖子查询接口
    getdata() {
      const url = "/v1/users/rings";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
    },
    // 历史评论信息

    // 评论框
    handleChange(val) {
      console.log(val);
    },
  },
  mounted() {
    this.getdata();
    this.clickpinglu();
  },

  watch: {
    a(newvalue, oldvalue) {
      if (newvalue == true) {
        this.clickpinglu();
        this.a = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 用户发帖区域
.center-3 {
  flex-direction: column;
  justify-items: center;
  background-color: #ffffff;
  border: 1px solid #e8ebf3;
  padding: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.center-3-1 {
  display: flex;
  justify-content: flex-start;
}

// 评论区域样式
.center-3-2 {
  padding: 20px;
  i {
    margin: 10px;
  }
  a {
    color: #3390ff;
  }
  span {
    margin-top: 10px;
    display: block;
  }
}
#btn1 {
  padding: 10px 10px;
  border: 1px solid #3390ff;
  background-color: #3390ff;
  border-radius: 4px;
  color: white;
  margin-top: 20px;
  margin-right: 10px;
  &:hover {
    background-color: #046ff1;
  }
}

// 点赞按钮样式
.item {
  margin-top: 10px;
  margin-right: 40px;
  border-radius: 4px;
}

// 帖子图片样式
#img-2 {
  width: 100%;
}
.img-1 {
  margin: 0 auto;
  transition: 0.8s;
  &:hover {
    transform: scale(1.1);
  }
  border: 5px solid #e8ebf3;
  width: 400px;
}
</style>
