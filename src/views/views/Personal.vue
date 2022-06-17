<template>
  <el-container
    style="
      height: 80vh;
      width: 80%;
      margin: auto;
      background-color: rgb(238, 241, 246, 0.8);
    "
  >
    <el-aside width="200px" style="background-color: rgb(238, 241, 246, 0.5)">
      <!-- 左侧小标题 -->
      <el-menu
        node="horizontal"
        :default-active="$route.path"
        style="background-color: rgb(238, 241, 246, 0)"
        router
      >
        <h1>个人中心</h1>
        <hr />
        <el-menu-item index="/personal/myper"
          ><i class="el-icon-user-solid"></i>个人信息</el-menu-item
        >
        <el-menu-item index="/personal/myorder">
          <i class="el-icon-s-goods"></i>我的订单</el-menu-item
        >
        <el-menu-item index="/personal/myaddress"
          ><i class="el-icon-s-home"></i>我的地址</el-menu-item
        >
        <el-menu-item index="/personal/mycollect"
          ><i class="el-icon-s-claim"></i>我的收藏</el-menu-item
        >
        <el-menu-item index="/personal/myforum"
          ><i class="el-icon-set-up"></i>帖子管理</el-menu-item
        >
      </el-menu>
    </el-aside>
    <!-- 右侧下 -->
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-aside {
  color: #333;
  margin-right: 40px;
  padding: 15px;
}
.el-menu {
  border: 0;
}
</style>
<style>
body {
  user-select: none;
}
</style>