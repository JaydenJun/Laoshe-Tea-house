<template>
  <div v-if="show">
    <el-row :gutter="10">
      <!-- :index="`/xiaoyin?xiao=${n.class_id}`"  -->
      <el-menu
        :default-active="activeIndex"
        :router="true"
        mode="horizontal"
        class="daohang el-menu-demo"
      >
        <el-menu-item
          @click="ind = n.class_id"
          v-for="n in data"
          :key="n.class_id"
            :class="{active:ind == n.class_id}"
          >{{ n.class_title }}</el-menu-item
        >
      </el-menu>
    </el-row>

    <!-- <router-view></router-view> -->
    <!-- <xinwen v-for="n in dat" :key="n.class_id" :item=n></xinwen> -->
    <div style="width: 88vw; margin: 0 auto">
      <el-row :gutter="20">
        <!-- 第一列 -->
        <el-col :span="18" :xs="24"
          ><div class="grid-content bg-purple">
            <!-- v-for="n in item" :key="n"  -->
            <div
              v-for="n in dat"
              :key="n.class_id"
              @click="$router.push(`./xiaoyin?qing=${n.new_id}`)"
            >
              <el-row :gutter="20" class="rowcenter">
                <el-col :span="5" :xs="24"
                  ><div class="rowimg">
                    <img src="/6.png" /></div
                ></el-col>
                <el-col :span="19" :xs="24"
                  ><div class="grid-content bg-purple">
                    <div>
                      <h4>{{ n.new_title }}</h4>
                      <p>{{ n.new_subtitle }}</p>
                      <span>{{
                        moment
                          .unix(new Date(n.new_time).getTime() / 1000)
                          .format("yyyy年MM月DD日 HH:mm")
                      }}</span>
                      <!-- moment.unix(article.created_at).format("yyyy年MM月DD日 HH:mm") -->
                      <!-- new Date( n.new_time )).getTime()/1000 -->
                    </div>
                  </div></el-col
                >
              </el-row>
              <hr />
            </div></div
        ></el-col>
        <!-- 第二列 -->
        <el-col :span="6" :xs="24"
          ><div class="grid-content bg-purple">
            <div>
              <h2>咨询查询</h2>
              <ul>
                <li v-for="n in datt" :key="n.nnid">{{ n.zi_xiang }}</li>
              </ul>
            </div>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
import xinwen from "@/components/xinwen.vue";
export default {
  components: { xinwen },
  watch: {
    ind(to, from) {
      console.log(to);
      const urll = `http://localhost:3000/v1/users/xiang?xiao=${this.ind}`;
      console.log(urll);
      this.axios.get(urll).then((res) => {
        console.log(res);
        this.dat = res.data.data;
      });
    },
  },
  data() {
    return {
      data: null,
      dat: null,
      activeIndex: "1",
      ind: null,
      show: true,
      datt: null,
    };
  },
  mounted() {
    const url = "http://localhost:3000/v1/users/news";
    this.axios.get(url).then((res) => {
      console.log(res);
      this.data = res.data.data;
    });

    console.log(this);
    const urll = "http://localhost:3000/v1/users/xiang?xiao=5";
    console.log(urll);
    this.axios.get(urll).then((res) => {
      console.log(res);
      this.dat = res.data.data;
    });

    const uu = "http://localhost:3000/v1/users/zixun";
    console.log(uu);
    this.axios.get(uu).then((res) => {
      console.log(res);
      this.datt = res.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.rowimg {
  img {
    margin-top: 0.5rem;
    width: 100%;
  }
}
.rowcenter > div {
  display: flex;
  vertical-align: middle;
}
h4,
p {
  margin: 0.5rem 0;
  text-align: left;
}
ul {
  margin: 0;

  // padding: 0;
  li {
    text-align: left;
    margin: 0.5rem 0;
  }
}
span {
  display: inline-block;
  width: 100%;
  text-align: left;
}
.headerul ul {
  margin: 0px;
  padding: 0px;
  border: none;
  list-style: none;

  li {
    display: inline-block;
  }
}
.daohang li:hover{
//   padding-left: 3rem;
 background-color:rgb(123,123,123) !important;
 border-radius: 10% !important;
}
.active{
     background-color:rgb(123,123,123) !important;
 border-radius: 10% !important;
}
</style>