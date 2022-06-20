<template>
  <div class="tarit" v-if="data">
    <el-menu
      :default-active="selected"
      background-color="#fff"
      text-color="#333"
      active-text-color="#0477ec"
      mode="horizontal"
    >
      <template>
        <el-menu-item index="1" @click="y = '综艺演出'">综艺演出</el-menu-item>
        <el-menu-item index="2" @click="y = '相声专场'">相声专场</el-menu-item>
        <el-menu-item index="3" @click="y = '京剧专场'">京剧专场</el-menu-item>
        <el-menu-item index="4" @click="y = '评书专场'">评书专场</el-menu-item>
        <el-menu-item index="5" @click="y = '鼓曲专场'">鼓曲专场</el-menu-item>
        <el-menu-item index="6" @click="y = '儿童剧'">儿童类</el-menu-item>
        <el-menu-item index="7" @click="y = '体验类'">体验类</el-menu-item>
      </template>
    </el-menu>

    <trait-item v-for="x in data" :item="x" :y="y" :key="x.family_id" />
  </div>
</template>

<script>
import TraitItem from "@/components/Trait-Item.vue";
export default {
  components: { TraitItem: TraitItem },
  data() {
    return {
      selected: "1",
      y: "综艺演出",
      data: null,
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    list() {
      console.log(this.y);
      let url = "/v1/users/shopps";
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
