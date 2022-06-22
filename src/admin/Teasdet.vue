<template>
  <div v-if="data">
    <el-image :src="'http://47.110.235.8:8080'+data[0].tea_pic"></el-image>
    <el-descriptions :title="data[0].tea_details" :column="1">
      <el-descriptions-item label="编号">{{
        data[0].tea_id
      }}</el-descriptions-item>
      <el-descriptions-item label="茶名称">{{
        data[0].tea_name
      }}</el-descriptions-item>
      <el-descriptions-item label="标题">{{
        data[0].tea_subtitle
      }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  props: ["tea_id"],
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "/v1/admin/detailsb/" + this.tea_id;
      console.log(url);
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
