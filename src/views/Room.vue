<template>
    <div>

        <el-container>
            <el-header>Header</el-header>
            <el-container>
           
            <el-main>
                    <el-row :gutter="10">
                        <!-- 第一大行左侧标题以及文字 -->
                    <h1>茶馆简介</h1>
                    <el-col :xs="24" :sm="10" ><div class="grid-content bg-purple">
                        <el-row :gutter="10">
                            <h2>1111</h2>
                        </el-row>
                        <el-row :gutter="10">11111</el-row>
                        <el-row :gutter="10">11111</el-row>

                    </div></el-col>
                        <!-- 右侧关于老舍茶馆的图片 -->
                    <el-col :xs="24" :sm="14" ><div class="grid-content bg-purple-light">                        
                            <img class="img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F30407397%2F91701746d163489d8d7d16ddd5eb595d.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMzA0MDczOTcvOTE3MDE3NDZkMTYzNDg5ZDhkN2QxNmRkZDVlYjU5NWQuanBn%2Fsign%2F85db605d2e93280dff842f97363e07c3.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656915212&t=375bf8c617c7d639bd9fa055dfd222b7">
                    </div></el-col> 
                    </el-row>



                    <!-- 第二大行 -->
                     <el-row :gutter="10">
                        <!-- 第一大行左侧标题以及文字 -->
                    <h1>茶馆简介</h1>
                    <el-col :xs="24" :sm="14" ><div class="grid-content bg-purple">
                        <img class="img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F30407397%2F91701746d163489d8d7d16ddd5eb595d.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMzA0MDczOTcvOTE3MDE3NDZkMTYzNDg5ZDhkN2QxNmRkZDVlYjU5NWQuanBn%2Fsign%2F85db605d2e93280dff842f97363e07c3.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656915212&t=375bf8c617c7d639bd9fa055dfd222b7">

                    </div></el-col>
                        <!-- 右侧关于老舍茶馆的图片 -->
                    <el-col :xs="24" :sm="10" ><div class="grid-content bg-purple-light">                        
                        <el-row :gutter="10">
                            <h2>1111</h2>
                        </el-row>
                        <el-row :gutter="10">11111</el-row>
                        <el-row :gutter="10">11111</el-row>
                    </div></el-col> 
                    </el-row>



                    <!-- 第三大段 -->
                    <el-row :gutter="10" class="imgg">
                           <el-row :gutter="10">
                                <el-col :xs="24" :sm="8" ><div class="grid-content bg-purple-light">
                                    <img src="/1.jpg">
                                </div></el-col>
                                <el-col :xs="24" :sm="8"><div class="grid-content bg-purple">
                                    <img src="/1.jpg">
                                </div></el-col>
                                <el-col :xs="24" :sm="8"><div class="grid-content bg-purple-light">
                                    <img src="/1.jpg">
                                </div></el-col>
                           </el-row>
                           <el-row :gutter="10">
                               <el-col :xs="24" :sm="8"><div class="grid-content bg-purple-light">
                                   <img src="/1.jpg">
                                </div></el-col>
                               <el-col :xs="24" :sm="8"><div class="grid-content bg-purple">
                                   <img src="/1.jpg">
                                </div></el-col>
                               <el-col :xs="24" :sm="8"><div class="grid-content bg-purple-light">
                                   <img src="/1.jpg">
                                </div></el-col>
                           </el-row>
                    </el-row>

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
.img{
    width: 80%;
}
.imgg img{
    width: 80%;
}
.el-row{
    padding: 1rem 0;
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