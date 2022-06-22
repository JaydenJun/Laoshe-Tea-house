<template>
  <div>
    <div class="form">
      <h1>用户修改界面</h1>
      <div class="form-1">
        <div>
          用户名：
          <input type="text" v-model="user_name" />
        </div>
        <div class="input-2">
          密码：
          <input type="text" v-model="user_pwd" />
        </div>
        <div>
          手机号：
          <input type="text" v-model="user_phone" />
        </div>
        <button @click="updata">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      data: null,
      user_name: "",
      user_phone: "",
      user_pwd: "",
    };
  },
  computed: {
    ...mapState(["loginid"]),
  },
  methods: {
    ...mapMutations(["updateLoginState"]),
    updata() {
      const url = "/v1/admin/putuu";
      const params = `user_name=${this.user_name}&user_phone=${this.user_phone}&user_pwd=${this.user_pwd}&user_id=${this.loginid}`;
      this.axios.put(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("修改成功");
          this.$router.push("/personal/myper");
          this.updateLoginState(this.user_name);
        }
      });
    },
    getdata() {
      const url = `/v1/admin/detail/${this.loginid}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
        this.data.forEach((p) => {
          this.user_name = p.user_name;
          this.user_phone = p.user_phone;
          this.user_pwd = p.user_pwd;
        });
        console.log("登录用户id", this.loginid);
      });
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>

<style lang="scss" scoped>
.form {
  user-select: none;
  text-align: center;
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 5px;

  h1 {
    color: gray;
    display: inline-block;
    margin-top: 5px;
  }

  .form-1 {
    color: gray;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
    div {
      margin-top: 10px;
    }
    input {
      width: 200px;
      height: 20px;
      border-color: gray;
      border-radius: 4px;
      padding: 0 15px;
    }
    .input-2 {
      margin-left: 16px;
    }
    button {
      padding: 8px 15px;
      color: white;
      background-color: rgb(16, 133, 230);
      margin-top: 20px;
      border-radius: 4px;
      border-color: #22a4f1;
      &:hover {
        background-color: #0d66db;
      }
    }
  }
}
</style>