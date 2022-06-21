<template>
  <div>
    <h1 style="font-size: 30px; text-align: center;margin:0">茶百科列表</h1>
    <div style="text-align: right; padding: 15px">
      <router-link
        to="/admin/teasset"
        style="text-decoration: none;padding:10px:display:block;font-size:20px"
        >插入数据</router-link
      >
    </div>
    <el-table :data="tableData" style="width: 100%" max-height="460">
      <el-table-column fixed prop="tea_id" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="tea_name" label="名称" width="120">
      </el-table-column>
      <el-table-column prop="tea_subtitle" label="标题" width="120">
      </el-table-column>
      <el-table-column prop="tea_details" label="简介" width="480">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="120" prop="tea_id">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, scope.row.tea_id)"
            type="text"
            size="small"
          >
            移除
          </el-button>
          <el-button
            @click.native.prevent="deleteRows(scope.$index, scope.row.tea_id)"
            type="text"
            size="small"
          >
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      d: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "/v1/admin/listsb?pno=1&count=10";
      this.axios.get(url).then((res) => {
        console.log(res.data.data);
        this.tableData = res.data.data;
      });
    },
    deleteRow(index, rows) {
      const url = `/v1/admin/b/${rows}`;
      console.log(url);
      this.axios.delete(url).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert(res.data.msg);
          this.d = true;
        } else {
          alert(res.data.msg);
        }
      });
    },
    deleteRows(index, rows) {
      this.$router.push("/admin/teasdet/" + rows);
    },
  },
  watch: {
    d(newValue, oldValue) {
      if (newValue == true) {
        this.getData();
        this.d = false;
      }
    },
  },
};
</script>
<style lang="" scoped></style>
