<template>
  <div class="my-header">
    <div class="container">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="5" :md="4"
          ><div class="grid-content bg-purple">
            <div>
              <router-link to="/admin">
                <img src="../assets/log2.png" alt=""
              /></router-link>
            </div></div
        ></el-col>
        <el-col :xs="24" :sm="14" :md="14"
          ><div class="grid-content bg-purple">
            <div>
              <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/trait">茶馆特色</router-link></li>
                <li><router-link to="/teah">茶友圈</router-link></li>
                <li><router-link to="/zixun">茶闻资讯</router-link></li>
                <li><router-link to="/tea">茶百科</router-link></li>
                <li><router-link to="/culture">关于我们</router-link></li>
              </ul>
            </div>
          </div></el-col
        >
        <el-col :xs="24" :sm="5" :md="6"
          ><div class="grid-content bg-purple-light" v-if="!loginname">
            <div>
              <ul>
                <li style="width: 32px">
                  <router-link to="/login" style="color: blue"
                    >登录</router-link
                  >
                </li>

                <li style="width: 32px">
                  <router-link to="/register">注册</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div v-else class="grid-content bg-purple-light">
            <div style="text-align: left">
              <ul style="display: flex">
                <li style="width: 180px">
                  <span style="color: blue">欢迎{{ loginname }}</span>
                  <button @click="updateLoginState(null)">退出</button>
                </li>
                |
                <li style="width: 84px; padding: 4px 5px">
                  <button
                    style="
                      background-color: red;
                      border: 1px solid #fff;
                      color: #fff;
                    "
                    @click="personal(loginid)"
                  >
                    个人中心
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loginname", "loginid"]),
  },
  methods: {
    ...mapMutations(["updateLoginState"]),
    personal(i) {
      this.$router.push("/personal/" + i);
    },
    aa() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 85vw;
  margin: 0 auto;
  margin-bottom: 10px;
  div:first-child {
    text-align: right;

    img {
      margin-top: 7px;
      width: 100%;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    display: inline-flex;
    li {
      margin: 0 1vw;
      width: 64px;
      a {
        text-decoration: none;
        color: #333;
        display: inline-block;
        transition: 0.5s;
        &:hover {
          color: rgb(48, 120, 255);
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
