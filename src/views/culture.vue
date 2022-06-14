<template>
  <div>
    <!-- <el-container>
       
          
          <div>
            <ul> 
              <li>茶馆简介</li>
              <li><router-link to="/culture/history">茶馆历史</router-link></li>
              <li><router-link to="/culture/person">茶馆宣传片</router-link></li>
              <li><router-link to="/culture/room">文化介绍</router-link></li>
            </ul>
          </div>
      
        <router-view/>
      </el-container>
     -->
    
    <el-container>
  
      <div class="headerul">
      
        <ul>
        
          <!-- <li>茶馆简介</li> -->
        
          <li><router-link to="/culture/history">茶馆历史</router-link></li>
      
          <li><router-link to="/culture/person">茶馆宣传片</router-link></li>
          
          <li><router-link to="/culture/room">文化介绍</router-link></li>
          
        </ul>
        
      </div>
    
     
    
    </el-container>
     <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.headerul {
  ul {
    padding-left: 0;
    display: flex;
    li {
      margin:1rem 1rem;
      padding: 1rem 0;
      border: none;
      list-style: none;
    
    }
  }
}
.el-container{
  // margin:0 auto;
  //因为脱离了文档流，所以不可以i
  justify-content: center;
}
</style>
