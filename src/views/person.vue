<template>
    <div>
            
        <el-container>
           
            <el-container>
            
            <el-main class="mainn">
                    <h2>老舍茶馆宣传片</h2>
                    <div class="videomi">
                    <video src=""  loop="loop" controls="controls"  class="video">
                    
                    </video>
                    </div>
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
.videomi{
    display: block;
    // margin: 0 auto;
    display: flex;
    justify-content: center;
}
.mainn{
    // margin: 0 auto;
    // display: flex;
//    margin-left: 10vw;
    h2{
        text-align: center;
    }
}
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