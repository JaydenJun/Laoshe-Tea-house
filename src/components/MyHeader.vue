<template>
  <div class="my-header">
    <div class="container">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="5" :md="4"
          ><div class="grid-content bg-purple">
            <div class="imgl">
              <img src="../assets/log2.png" alt="" />
            </div></div
        ></el-col>
        <el-col :xs="24" :sm="14" :md="16"
          ><div class="grid-content bg-purple">
            <div>
              <ul class="cai">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/">茶馆特色</router-link></li>
                <li><router-link to="/teah">茶友圈</router-link></li>
                <li><router-link to="/product">茶闻资讯</router-link></li>
                <li><router-link to="/tea">茶百科</router-link></li>
                <li><router-link to="/culture">关于我们</router-link></li>
              </ul>
            </div>
          </div></el-col
        >
        <el-col :xs="24" :sm="5" :md="4"
          ><div class="grid-content bg-purple-light">
            <div>
              <ul>
                <li>
                  <router-link to="/login">登录</router-link>
                </li>

                <li>
                  <router-link to="/register">注册</router-link>
                </li>
              </ul>
            </div>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.container {
  max-width: 85vw;
  margin: 0 auto;
  margin-bottom: 30px;
  div:first-child {
    text-align: center;
    display: flex;
    .imgl {  
      img {
        width: 100%;
      }
    }
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
 
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 1vw;
      a {
        text-decoration: none;
        color: #333;
        display: inline-block;
      }
    }
  }
}
</style>
