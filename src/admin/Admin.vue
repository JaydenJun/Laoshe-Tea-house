<template>
  <div>
    <!-- views/Components.vue -->
    <el-container>
      <el-header class="mheader">
        <!-- 放置水平导航 -->
        <el-menu
          background-color="#303133"
          text-color="#fff"
          active-text-color="#ffd04b"
          mode="horizontal"
          default-active="2"
        >
          <el-menu-item index="1" style="width: 200px"
            ><router-link to="/"><img src="../assets/log2.png" style="width: 100%" alt=""
          /></router-link></el-menu-item>
          <el-menu-item
            ><h2 style="height: 60px; line-height: 60px; margin: 0">
              后台管理系统
            </h2></el-menu-item
          >
        </el-menu>
      </el-header>
      <el-container>
        <el-aside class="maside" width="200px">
          <!-- 放置垂直导航 -->
          <el-menu
            :default-active="$route.path"
            background-color="#303133"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="/admin/users">
              <i class="el-icon-s-grid"></i>
              用户列表
            </el-menu-item>
            <el-menu-item index="/admin/shows">
              <i class="el-icon-s-grid"></i>
              特色演出列表
            </el-menu-item>
            <el-menu-item index="/admin/news">
              <i class="el-icon-s-grid"></i>
              新闻列表
            </el-menu-item>
            <el-menu-item index="/admin/teas">
              <i class="el-icon-s-grid"></i>
              茶百科列表
            </el-menu-item>
            <el-menu-item index="/admin/tearing">
              <i class="el-icon-s-grid"></i>
              茶友圈话题列表
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="mmain">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  mounted() {
    
    console.log(this.$route.path);
  },
};
</script>

<style>
* {
  user-select: none;
}
.mheader {
  background-color: #303133;
}
.maside {
  height: calc(100vh - 60px);
  background-color: #303133;
  padding-left: 15px;
}
.mmain {
  height: calc(100vh - 60px);
}
.el-menu {
  border-right: none;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #6a6b6b;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background: #ededed;
}
</style>
