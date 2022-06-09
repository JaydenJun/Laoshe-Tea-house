<template>
  <div class="my-header">
    <div class="container">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="5" :md="4"
          ><div class="grid-content bg-purple">
            <div>
              <img src="../assets/log2.png" alt="" />
            </div></div
        ></el-col>
        <el-col :xs="24" :sm="14" :md="16"
          ><div class="grid-content bg-purple">
            <div>
              <ul class="cai">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/trait">茶馆特色</router-link></li>
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
            <div style="padding-top: 3px">
              <ul>
                <li>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    登录
                  </button>
                </li>

                <li style="line-height: 62px">
                  <router-link to="/register">注册</router-link>
                </li>
              </ul>
            </div>
          </div></el-col
        >
      </el-row>
    </div>
    <div
      style="margin-top: 10vh; margin-left: 3vh"
      class="modal fade d-flex"
      id="exampleModal"
      tabindex="-1"
    >
      <div class="modal-dialog" style="width: 50vh">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">账号登录</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 align-center">
                <label for="recipient-name" class="col-form-label"
                  >账号登录:</label
                >
                <input
                  placeholder="手机号/邮箱登录"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  style="width: 45vh"
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">密码:</label>
                <input
                  placeholder="账号密码"
                  type="password"
                  class="form-control"
                  id="recipient-name"
                  style="width: 45vh"
                />
              </div>
              <div class="mt-5 d-flex" style="justify-content: space-between">
                <span>忘记密码</span>
                <span>立即注册</span>
              </div>
            </form>
          </div>
          <p class="text-center my-3">阅读并接受百度用户协议 和 隐私政策</p>
          <div class="modal-footer">
            <button
              style="width: 90px"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              退出
            </button>
            <button type="button" class="btn btn-primary">立即登录</button>
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
.modal-footer {
  justify-content: center;
}
.my-header {
  // background-color: #666;
}
.container {
  max-width: 88vw;
  margin: 0 auto;
  margin-bottom: 30px;
  div:first-child {
    text-align: center;
    display: block;
    > img {
      width: 70%;
      padding: 21px 0;
    }
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
  .cai {
    display: flex;
    height: 69px;
    justify-items: center;
    li {
      line-height: 69px;
      width: 64px;
    }
  }
  ul {
    list-style: none;
    display: flex;
    justify-items: center;
    line-height: 58px;
    padding-left: 0;
    margin: 0;
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
