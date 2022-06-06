<template>
    <div>
            
        <el-container>
            <el-header>Header</el-header>
            <el-container>
            
            <el-main>
                    <h2>老舍茶馆宣传片</h2>
                    <video src="/宣传片.mp4"  loop="loop" controls="controls"  class="video">
                    </video>
            </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.video{
    width: 80%;
}
.headerul {
  ul{
      padding-left: 0;
      li{
          margin: 2px 0;
  padding: 1rem 0;
  border: none;
  list-style: none;
  border: 2px solid black;
      }
  }

}
</style>