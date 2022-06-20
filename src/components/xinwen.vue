<template>
    <div>

         <div style="width:88vw;margin:0 auto">
           
                <el-row :gutter="20">
                    <!-- 第一列 -->
                    <el-col :span="18" :xs="24"><div class="grid-content bg-purple">
                        <!-- v-for="n in item" :key="n"  -->
                        <div >
                        <el-row :gutter="20" class="rowcenter">
                            <el-col :span="5" :xs="24"><div class="rowimg ">
                                <img src="/6.png">
                            </div></el-col>
                            <el-col :span="19" :xs="24"><div class="grid-content bg-purple ">
                                <div>
                                    <h4>《2022年中国现制茶饮行业发展报告》！</h4>
                                    <p>茶之为饮，发乎神农氏”，其实茶饮可追溯至年前的茶文化，但由于年代久远，茶的发明地与时间已无从考证，不过一般均认为世界上其他地方的饮茶习惯、种植茶叶的习惯...</p>
                                   <span>6月05日 09:26</span>
                                </div>     
                            </div></el-col>
                        </el-row>
                        <hr>
                        </div>
                    
                 



                    </div></el-col>
                    <!-- 第二列 -->
                    <!-- <el-col :span="6" :xs="24"><div class="grid-content bg-purple">
                        <div>
                            <h2>咨询查询</h2>
                            <ul>
                                <li v-for="n in 10" :key="n">2022年中国茶叶发展的变化以及未来形势的分析</li>
                            </ul>
                        </div>
                    </div></el-col> -->

                </el-row>
        </div>

        
    </div>
</template>

<script>
    export default {
        props:["item"],
         mounted(){
        console.log(this.item)
        // console.log(this.$route.query.xiao)
        //  const url="http://localhost:3000/v1/users/xiang?xiao="+this.$route.query.xiao
        //  console.log(url)
        // this.axios.get(url).then((res)=>{
        //     console.log(res)
        // })
       }
    }
</script>

<style lang="scss" scoped>

</style>
<style lang="scss" scoped>
.rowimg{
    
    img{
    margin-top: 0.5rem;
        width:100%;
    }
}
.rowcenter>div{
    display: flex;
    vertical-align: middle;
}
h4,p{
    margin: 0.5rem 0;
    text-align: left;
}
ul{
    margin: 0;
  
    // padding: 0;
    li{
        text-align: left;
        margin: 0.5rem 0;
    }
   
    
}
span{
    display: inline-block;
    width: 100%;
    text-align: left;
}
.headerul ul{
       margin: 0px;
  padding: 0px;
  border: none;
  list-style: none;
  
  li{
display: inline-block;
  }
}
.daohang{
    padding-left: 3rem;
}
</style>