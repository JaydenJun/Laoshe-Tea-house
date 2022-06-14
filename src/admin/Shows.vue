<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="gender" label="性别" width="180"> </el-table-column>
    <el-table-column prop="married" label="婚否" width="180">
      <template slot-scope="scope">
        {{scope.row.married ? '已婚' : '未婚'}}
      </template>
    </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          gender: "男",
          married: true
        },
        {
          date: "2016-05-04",
          name: "王小小",
          address: "上海市普陀区金沙江路 1517 弄",
          gender: "女",
          married: false
        },
        {
          date: "2016-05-01",
          name: "王小小",
          address: "上海市普陀区金沙江路 1519 弄",
          gender: "女",
          married: false
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          gender: "男",
          married: true
        },
      ],
    };
  },
};
</script>
