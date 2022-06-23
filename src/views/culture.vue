<template>
  <div>
    <!-- <el-container>
       
          
          <div>
            <ul> 
              <li>茶馆简介</li>
              <li ><router-link to="/culture/history">茶馆历史</router-link></li>
              <li ><router-link to="/culture/person">茶馆宣传片</router-link></li>
              <li><router-link to="/culture/room">文化介绍</router-link></li>
            </ul>
          </div>
      
        <router-view/>
      </el-container>
     -->
    <div style="width: 88vw; margin: 0 auto">
      <el-container>
        <div class="headerul">
          <ul>
            <!-- <li>茶馆简介</li> -->

            <li @click="b = 1" :class="{ active: b == 1 }">
              <i class="el-icon-present"></i
              ><router-link style="padding-left: 1rem" to="/culture/history"
                >茶馆历史</router-link
              >
            </li>

            <li @click="b = 2" :class="{ active: b == 2 }">
              <i class="el-icon-first-aid-kit"></i
              ><router-link style="padding-left: 1rem" to="/culture/person"
                >茶馆宣传片</router-link
              >
            </li>

            <li @click="b = 3" :class="{ active: b == 3 }">
              <i class="el-icon-edit"></i
              ><router-link style="padding-left: 1rem" to="/culture/room"
                >文化介绍</router-link
              >
            </li>
          </ul>
        </div>
      </el-container>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.headerul {
  ul {
    padding-left: 0;
    display: flex;
    li {
      margin: 1rem 1rem;
      padding: 1rem 0;
      border: none;
      list-style: none;

      a {
        text-decoration: none;
        color: #333;
        background-color: #eee;
        &:hover {
          color: #0477ec;
         
        }
      }
    }
  }
}
.active {
  a {
    border-bottom: 2px solid #0477ec;
    color: #0477ec !important;
  }
}
.el-container {
  // margin:0 auto;
  //因为脱离了文档流，所以不可以i
  justify-content: center;
}
</style>
