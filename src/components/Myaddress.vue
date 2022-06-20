<template>
  <div>
    <h1><i class="el-icon-s-home"></i>我的地址</h1>

    <table border="1" class="tables">
      <tr>
        <th colspan="5">用户名：{{ sizeForm.uname }}</th>
      </tr>
      <tr>
        <th>地址：{{ sizeForm.address }}</th>
      </tr>
      <tr>
        <th>电话：{{ sizeForm.phone }}</th>
      </tr>
    </table>

    <br />
    <!-- 添加 -->
    <h3>修改地址：</h3>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="姓名：">
        <el-input v-model="sizeForm.uname"></el-input>
      </el-form-item>
      <el-form-item label="地址：">
        <el-input type="textarea" v-model="sizeForm.address"></el-input>
      </el-form-item>
      <el-form-item label="电话：">
        <el-input v-model="sizeForm.phone"></el-input>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      sizeForm: {
        uname: "123", //修改
        address: "123", //修改
        phone: "123", //修改
      },
    };
  },
  methods: {
    onSubmit() {
      this.$message({
        message: "修改成功！",
        type: "success",
      }); //提示成功信息
    },
  },
};
</script>

<style lang="scss" scoped>
.tables {
  width: 80%;
  margin: auto;
  font-size: 11px;
  color: #333333;
  border-color: #999999;
  border-collapse: collapse;
  margin-bottom: 5px;
}
.tables th {
  text-align: left;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #999999;
  background-color: rgba($color: #999999, $alpha: 0.5);
}
</style>