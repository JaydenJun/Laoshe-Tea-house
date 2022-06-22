<template>
  <div id="form">
    <el-table
      :data="tableData"
      style="width: 100%; font-size: 15px"
      max-height="500"
    >
      <el-table-column fixed prop="user_id" width="40"> </el-table-column>
      <el-table-column prop="user_name" label="姓名" width="150">
      </el-table-column>
      <el-table-column prop="user_pwd" label="密码" width="150">
      </el-table-column>
      <el-table-column prop="user_phone" label="手机" width="150">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <button @click="UpdataRows">修改</button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loginid"]),
  },
  data() {
    return {
      tableData: [],
    };
  },

  methods: {
    getdata() {
      const url = `/v1/admin/detail/${this.loginid}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        console.log("登录用户id", this.loginid);
      });
    },
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$message({
            message: "修改成功！",
            type: "success",
          }); //提示成功信息
          console.log(this.form); //注册数据，这里判断数据库有没有同样的手机号
        }
      });
    },
    UpdataRows() {
      this.$router.push("/personal/myUser");
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>

<style lang="scss" scoped>
#form {
  width: 600px;
}
</style>