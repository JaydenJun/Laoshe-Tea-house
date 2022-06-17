<template>
    <div>
            
        <el-container>
           
            <el-container>
            
            <el-main class="mainn">
                    <h2>老舍茶馆宣传片</h2>
                    <div class="videomi">
                    <video src="https://v1.cecdn.yun300.cn/100001_1904025063/%E7%BA%A2%E5%A2%99%E4%B8%8B%E7%9A%84%E4%BA%AC%E5%91%B3%E5%84%BF%E9%87%91%E5%90%8D%E7%89%87%E5%AE%8C%E6%95%B4%E7%89%881558504476374.mp4"  loop="loop" controls="controls"  class="video">
                    
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