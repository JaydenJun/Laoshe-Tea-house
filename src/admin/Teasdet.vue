<template>
  <div v-if="data">
    <el-descriptions title="演出信息详情" :column="1">
      <el-descriptions-item label="编号">{{
        data[0].show_id
      }}</el-descriptions-item>
      <el-descriptions-item label="标题">{{
        data[0].show_title
      }}</el-descriptions-item>
      <el-descriptions-item label="开始时间">{{
        data[0].show_star
      }}</el-descriptions-item>
      <el-descriptions-item label="简介">
        {{ data[0].show_content }}</el-descriptions-item
      >
      <el-descriptions-item label="地址">{{
        data[0].show_address
      }}</el-descriptions-item>
      <el-descriptions-item label="时间">{{
        data[0].show_time
      }}</el-descriptions-item>
      <el-descriptions-item label="价格">{{
        data[0].show_product
      }}</el-descriptions-item>
      <el-descriptions-item label="surplus">{{
        data[0].show_surplus
      }}</el-descriptions-item>
      <el-descriptions-item label="notice">{{
        data[0].show_notice
      }}</el-descriptions-item>
      <el-descriptions-item label="notes">{{
        data[0].show_notes
      }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  props: ["show_id"],
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
      const url = "http://127.0.0.1:3000/v1/admin/details/" + this.show_id;
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
