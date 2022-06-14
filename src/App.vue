<template>
  <div class="app">
    <my-header v-if="!$route.meta.hide "/>
    <router-view />
    <my-footer v-if="!$route.meta.hide " />
    
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