<template>
  <div v-if="data">
    <el-descriptions title="用户详情" direction="vertical" :column="4" border>
      <el-descriptions-item label="用户名">{{
        data[0].user_name
      }}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{
        data[0].user_phone
      }}</el-descriptions-item>
      <el-descriptions-item label="密码" :span="2">{{
        data[0].user_pwd
      }}</el-descriptions-item>
      <el-descriptions-item label="性别">
        <el-tag size="small">{{ data[0].user_sex ? "男" : "女" }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="邮箱">{{
        data[0].user_email
      }}</el-descriptions-item>
      <el-descriptions-item label="生日">{{
        data[0].user_birth.slice(0, 10)
      }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  props: ["user_id"],
  data() {
    return {
      data: null,
    };
  },
  methods: {
    getdata() {
      const url = "/v1/admin/detail/" + this.user_id;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>

<style lang="scss" scoped></style>
