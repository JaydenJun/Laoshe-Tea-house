<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="ring_id" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="user_name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="ring_pic" label="图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.ring_pic" alt=""  style="width:200px"/>
        </template>
      </el-table-column>
      <el-table-column prop="ring_details" label="内容" width="400">
      </el-table-column>
      <el-table-column prop="ring_prise" label="点赞量"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row.ring_id)"
            type="text"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/v1/admin/listsbqs";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
    handleClick(row) {
      let rs = confirm("是否删除");
      if (!rs) {
        return;
      } else {
        let url = "/v1/admin/bss/" + row;
        console.log("url", url);
        this.axios.delete(url).then((res) => {
          console.log(res.data.code);
          if (res.data.code == 200) {
            alert("删除成功");
            this.getData();
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>