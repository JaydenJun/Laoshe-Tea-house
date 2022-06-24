<template>
  <div v-if="data">
    <h2 style="text-align: center">用户管理</h2>
    <el-table
      :data="tableData"
      style="width: 100%; font-size: 15px"
      max-height="500"
    >
      <el-table-column fixed prop="user_id" label="序号" width="40">
      </el-table-column>
      <el-table-column prop="user_name" label="姓名" width="150">
      </el-table-column>
      <el-table-column prop="user_pwd" label="密码" width="150">
      </el-table-column>
      <el-table-column prop="user_phone" label="手机" width="150">
      </el-table-column>
      <el-table-column prop="user_email" label="邮箱地址" width="220">
      </el-table-column>
      <el-table-column prop="user_sex" label="性别" width="100">
        <template slot-scope="scope">
          {{ scope.row.user_sex ? "男" : "女" }}
        </template>
      </el-table-column>
      <el-table-column prop="user_birth" label="生日" width="300">
        <template slot-scope="scope">
          {{ scope.row.user_birth }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150" prop="user_id">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, scope.row.user_id)"
            type="text"
            size="20px"
          >
            移除
          </el-button>
          <el-button
            @click.native.prevent="deleteRows(scope.$index, scope.row.user_id)"
            type="text"
            size="20px"
          >
            查看用户详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="zys">
      <el-button-group>
        <el-button @click="getdata(i)" v-for="i in nums" :key="i">{{
          i
        }}</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 分页总页数
      nums: "",
      tableData: null,
      data: null,
      a: "",
      b:1
    };
  },
  methods: {
    deleteRow(index, rows) {
      console.log(index);
      const url = `/v1/admin/u/${rows}`;
      console.log("url", url);
      this.axios.delete(url).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("删除成功");
          this.a = true;
        } else {
          alert("删除失败");
        }
      });
    },
    deleteRows(index, rows) {
      this.$router.push("/admin/userss/" + rows);
    },
    getpage(val) {
      console.log(val);
      this.pno = val;
    },
    getdata(i = 1) {
      this.b=i
      const url = `/v1/admin/list?pno=${i}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
        this.tableData = res.data.data;
        this.nums = res.data.zys;
        this.user_id = res;
      });
    },
  },
  mounted() {
    this.getdata("1");
  },
  watch: {
    i() {
      this.getdata();
    },
  },
};
</script>
<style lang="scss" scoped>
.zys {
  width: 500px;
  margin: 20px auto;
  .el-button {
    border-radius: 8px;
    margin: 10px;
    &.disabled {
      pointer-events: none;
      background-color: gray;
    }
  }
}
.ac{
  border-color: #c6e2ff;
  color: #619fff;
}
</style>
