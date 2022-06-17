<template>
  <!-- 用户发帖区域 -->
  <div>
    <div class="center-3" v-for="i in data" :key="i.ring_id">
      <span>匿名</span>
      <p>{{ i.ring_details }}</p>
      <div>
        <div class="img-1">
          <img :src="i.ring_pic" alt="" />
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
        <button id="btn1" @click="fbdata(i.ring_id)">点击发表评论</button>
        <button id="btn2" @click="dzgetdata(i.ring_prise + 1, i.ring_id)">
          点赞</button
        ><span id="dz">点赞数{{ i.ring_prise }}</span>
      </div>
      <div>
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
export default {
  data() {
    return {
      // 评论输入框双向绑定变量
      textarea: "",

      data: null,
      pldata: null,

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
      this.b = ring_prise;

      const url = "http://127.0.0.1:3000/v1/users/give";
      const params = `ring_prise=${this.b}&ring_id=${ring_id}`;
      this.axios.post(url, params).then((res) => {
        console.log(res);
        console.log("c:" + ring_id, this.b);
        if (res.data.code == 200) {
          this.getdata();
        }
      });
    },

    //发送发表评论请求
    fbdata(ring_id) {
      const url = "http://127.0.0.1:3000/v1/users/sendcm";
      const params = `ring_sid=${ring_id}&comment_cont=${this.textarea}`;
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("评论成功");
          this.textarea = "";
          this.a = true;
        }
      });
    },
    //发送历史记录的请求
    clickpinglu(id) {
      console.log("拿到的id" + id);
      const url = "http://127.0.0.1:3000/v1/users/comment?ring_sid=" + id;
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
    // 最热帖子查询接口
    getdata() {
      const url = "http://127.0.0.1:3000/v1/users/ringss";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
    },
    // 历史评论信息
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
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
  }
  #btn2 {
    padding: 10px 15px;
    border: 1px solid #3390ff;
    background-color: #3390ff;
    border-radius: 4px;
    color: white;
    margin-top: 20px;
  }
  #dz {
    border: 1px solid #3390ff;
    margin-left: 10px;
    display: inline-block;
    color: #3390ff;
    border-radius: 4px;
  }
}
</style>
