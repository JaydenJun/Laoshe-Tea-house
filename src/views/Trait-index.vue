<template>
  <div class="tarit">
    <el-menu
      v-if="data"
      :default-active="selected"
      background-color="#fff"
      text-color="#333"
      active-text-color="#f5d"
      mode="horizontal"
    >
      <template>
        <el-menu-item
          :index="item.family_id"
          v-for="item in data.data"
          :key="item.family_sid"
          @click="y = item.family_id"
          >{{ item.family_title }}
        </el-menu-item>
      </template>
    </el-menu>
    
    <trait-item v-for="x in data" :item="x" :y="y" :key="x" />
  </div>
</template>

<script>
import TraitItem from "@/components/Trait-Item.vue";
export default {
  components: { TraitItem },
  data() {
    return {
      selected: 1,
      y: "1",
      data: null,
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    list() {
      let url = "http://127.0.0.1:3000/v1/users/shopps";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
  watch: {
    y() {
      this.list();
      // console.log(this.selected);
    },
  },
};
</script>
<style lang="scss" scoped>
.tarit {
  width: 88vw;
  margin: 0 auto;
}
</style>
