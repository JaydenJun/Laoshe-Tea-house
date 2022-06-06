<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" class="headerul">
          <div>
            <h2>走进老舍</h2>
          </div>
          <div>
            <ul> 
              <li>茶馆简介</li>
              <li><router-link to="/culture/history">茶馆历史</router-link></li>
              <li><router-link to="/culture/person">茶馆宣传片</router-link></li>
              <li><router-link to="/culture/room">文化介绍</router-link></li>
            </ul>
          </div>
        </el-aside>
        <el-main><router-view/> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.headerul {
  ul {
    padding-left: 0;
    li {
      margin: 2px 0;
      padding: 1rem 0;
      border: none;
      list-style: none;
      border: 2px solid black;
    }
  }
}
</style>
