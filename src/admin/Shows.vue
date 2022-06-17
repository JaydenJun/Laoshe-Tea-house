<template>
  <div>
    <h2 style="font-size: 30px; text-align: center">特色演出列表</h2>
   
    <div style="text-align:right;padding:15px" >
      <router-link
        to="/admin/showdset"
        style="text-decoration: none;padding:10px:display:block;font-size:20px"
        >插入数据</router-link
      >
    </div>
    <el-table :data="tableData" style="width: 100%" max-height="600">
      <el-table-column fixed prop="show_id" label="编号" width="50">
      </el-table-column>
      <el-table-column prop="show_title" label="标题" width="50">
      </el-table-column>
      <el-table-column prop="show_star" label="开始时间" width="120">
      </el-table-column>
      <el-table-column prop="show_content" label="简介" width="80">
      </el-table-column>
      <el-table-column prop="show_address" label="地址" width="80">
      </el-table-column>
      <el-table-column prop="show_time" label="时间" width="80">
      </el-table-column>
      <el-table-column prop="show_product" label="价格" width="80">
      </el-table-column>
      <el-table-column prop="show_sold" label="简介" width="80">
      </el-table-column>
      <el-table-column prop="show_surplus" label="surplus" width="80">
      </el-table-column>
      <el-table-column prop="show_notice" label="notice" width="80">
        <template slot-scope="scope">
          {{ scope.row.show_notice.slice(0, 30) }}
        </template>
      </el-table-column>
      <el-table-column prop="show_notes" label="notes" width="80">
        <template slot-scope="scope">
          {{ scope.row.show_notes.slice(0, 30) }}
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="120" prop="show_id">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, scope.row.show_id)"
            type="text"
            size="small"
          >
            移除
          </el-button>
          <el-button
            @click.native.prevent="deleteRows(scope.$index, scope.row.show_id)"
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
      const url = "http://127.0.0.1:3000/v1/admin/lists?pno=1&count=10";
      this.axios.get(url).then((res) => {
        console.log(res.data.data);
        this.tableData = res.data.data;
      });
    },
    deleteRow(index, rows) {
      const url = `http://127.0.0.1:3000/v1/admin/t/${rows}`;
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
      this.$router.push("/admin/showdet/" + rows);
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
