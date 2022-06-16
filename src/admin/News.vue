<template>
  <div v-if="data">
    <!-- 茶新闻 -->
    <router-link to="/admin/newlr"><span>录入</span></router-link>

    <el-descriptions title="茶新闻管理" :column="1">
      <el-descriptions-item>
        <fieldset style="boder: 5px solid gray">
          <legend style="font-size: 30px">新闻热点</legend>
          <table>
            <thead>
              <th>序号</th>
              <th>标题</th>
              <th>内容</th>
              <th>时间</th>
              <th>操作</th>
            </thead>
            <tbody>
              <tr v-for="v in data.data" :key="v.new_id">
                <td>{{ v.new_id }}</td>
                <td>{{ v.new_title }}</td>
                <td>{{ v.new_subtitle }}</td>
                <td>{{ v.new_time.slice(0, 10) }}</td>
                <td>
                  <el-button
                    @click.native.prevent="deleteRow(v.new_id)"
                    type="text"
                    size="20px"
                  >
                    移除
                  </el-button>
                  <el-button
                    @click.native.prevent="deleteRows(v.new_id)"
                    type="text"
                    size="20px"
                  >
                    查看新闻详情
                  </el-button>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </el-descriptions-item>
      <!-- 茶咨询 -->
      <el-descriptions-item>
        <fieldset>
          <legend style="font-size: 30px">新闻咨询</legend>
          <table class="table-2">
            <tr v-for="i in data.data" :key="i.new_id">
              <td v-html="i.new_content"></td>
              <td>
                <el-button
                  @click.native.prevent="deleteRow(i.new_id)"
                  type="text"
                  size="20px"
                >
                  移除
                </el-button>
                <el-button
                  @click.native.prevent="deleteRows(i.new_id)"
                  type="text"
                  size="20px"
                >
                  查看咨询详情
                </el-button>
              </td>
            </tr>
          </table>
        </fieldset>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      a: "",
    };
  },
  methods: {
    getdata() {
      const url = "http://127.0.0.1:3000/v1/admin/listsbd?pno=1";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },

    deleteRow(new_id) {
      const url = `http://127.0.0.1:3000/v1/admin/${new_id}`;
      console.log("url:", url);
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
    deleteRows(new_id) {
      this.$router.push(`/admin/newss/${new_id}`);
    },
  },
  mounted() {
    this.getdata();
  },
  watch: {
    a(newvalue, oldvalue) {
      if (newvalue) {
        this.getdata();
        this.a = false;
      }
    },
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

    td:first-child {
      width: 20px;
    }

    td:not(:first-child) {
      text-align: center;
      width: 300px;
      height: 150px;
    }
  }
}
.table-2 {
  tr {
    user-select: none;
    td:first-child {
      width: 800px;
      height: 150px;
    }
    td:nth-child(2) {
      height: 150px;
      line-height: 150px;
    }
  }
}
div {
  span {
    font-size: 20px;
    float: right;
    margin-right: 20px;
  }
}
</style>
