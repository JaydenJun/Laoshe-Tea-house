<template>
  <div v-if="data">
   
    <el-descriptions title="用户详情" direction="vertical" :column="1" border>
      <el-descriptions-item label="新闻内容">
        <fieldset style="boder: 5px solid gray">
          <legend style="font-size: 30px">新闻热点</legend>
          <table>
            <thead>
              <th>序号</th>
              <th>标题</th>
              <th>内容</th>
              <th>时间</th>
            </thead>
            <tbody>
              <tr v-for="v in data" :key="v.new_id">
                <td>{{ v.new_id }}</td>
                <td>{{ v.new_title }}</td>
                <td>{{ v.new_subtitle }}</td>
                <td>{{ v.new_time.slice(0, 10) }}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </el-descriptions-item>
      <el-descriptions-item label="新闻咨询">
        <fieldset>
          <legend style="font-size: 30px">新闻咨询</legend>
          <table class="table-2">
            <tr v-for="i in data" :key="i.new_id">
              <td v-html="i.new_content"></td>
            </tr>
          </table>
        </fieldset>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  props: ["new_id"],
  data() {
    return {
      data: null,
    };
  },
  methods: {
    getdata() {
      const url = "http://127.0.0.1:3000/v1/admin/detailsbd/" + this.new_id;
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

<style lang="scss" scoped>
table {
  th {
    text-align: center;
  }
  tr {
    user-select: none;
    margin: 20px;

    td {
      text-align: center;
      width: 300px;
      height: 150px;
    }
  }
}
.table-2 {
  tr {
    user-select: none;
    td {
      width: 100%;
      height: 150px;
    }
  }
}
</style>