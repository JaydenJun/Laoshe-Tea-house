<template>
  <div class="tarit">
    <el-tabs type="border-card">
      <el-tab-pane :label="i" v-for="i in lab" :key="i">
        <router-view />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lab: ["曲艺杂谈", "评书专场", "相声专场", "京剧专场", "鼓曲专场"],
    };
  },
};
</script>
<style lang="scss" scoped>
.tarit{
   width: 88vw;
  margin: 0 auto;
}
</style>
