<template>
  <div class="tarit">
    <el-menu
      :default-active="selected"
      background-color="#fff"
      text-color="#333"
      active-text-color="#f5d"
      mode="horizontal"
    >
      <el-menu-item index="0">综艺演出 </el-menu-item>
      <el-menu-item index="1">综艺演出 </el-menu-item>
    </el-menu>
    
    <trait-item :item="selected"/>
  </div>
</template>

<script>
import TraitItem from "@/components/Trait-Item.vue";
export default {
  components: { TraitItem },
  data() {
    return {
      selected: "0",
      lab: [
        "综艺演出",
        "相声专场",
        "京剧专场",
        "评书专场",
        "鼓曲专场",
        "儿童剧",
        "体验类",
      ],
    };
  },
 
};
</script>
<style lang="scss" scoped>
.tarit {
  width: 88vw;
  margin: 0 auto;
}
</style>
