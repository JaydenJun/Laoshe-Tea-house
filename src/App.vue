<template>
  <div class="app">
    <my-header />
    <router-view />
    <my-footer />
    
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
export default {
  components: { MyHeader, MyFooter },
};
</script>

<style lang="scss" scoped>
.app{
  background-color:#eee ;
}
</style>