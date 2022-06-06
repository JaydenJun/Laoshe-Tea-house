<template>
  <div class="home">
    <el-container>
      <!-- 头部1 -->
       <el-header>
       <el-row :gutter="10">
            <el-col :xs="24"  :md="8" ><div class="grid-content bg-purple">
          <ul class="headerul">
			    	<li>关于老舍：</li>
			    	<li><a href="#"><span class="fb"> 我</span></a></li>
			    	<li><a href="#"><span class="tw"> 们</span></a></li>
			    	<li><a href="#"><span class="in"> 茶</span></a></li>
			    	<li><a href="#"><span class="gmail"> 楼</span></a></li>
			    </ul>
            </div></el-col>

            <el-col :xs="24"  :md="16" ><div class="grid-content bg-purple-light">
          <ul class="headerul">					
					  <li><span class="phone"> </span>1111111</li>
					  <li>

                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/room' }">茶馆简介</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/history' }">茶馆历史</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/person' }">茶馆宣传片</el-breadcrumb-item>
                    <el-breadcrumb-item  :to="{ path: '/culture' }">文化介绍</el-breadcrumb-item>

                </el-breadcrumb>             
           </li>
				  </ul>
            </div></el-col>
      </el-row>
      <!-- 头部2 -->
      <el-row :gutter="10">
            <el-col :xs="24"  :md="10"><div class="grid-content bg-purple">
              占位符
              <img src="" alt="" >
            </div></el-col>
            <el-col :xs="24"  :md="14"><div class="grid-content bg-purple-light">
              <ul class="headerul">
		              <li><a  href="#" >Home</a></li>
		              <li><a  href="#" >About</a></li>
						      <li><a href="#" >Services</a></li>
						      <li><a href="#" >Rooms</a></li>
						      <li><a href="#" >Shortcodes</a></li>
						      <li><a href="#" >Contact</a></li>						
		          </ul>
            </div></el-col>
      </el-row>
       </el-header>
      <!-- 中心位置 -->


      <!-- 第一大行 -->
       <el-main>
         <el-row :gutter="10">
            <el-col :xs="24" :sm="24"><div class="grid-content bg-purple">关于</div></el-col>
            <el-col :xs="24" :sm="24" ><div class="grid-content bg-purple-light">
                <!-- <img src="" alt=""><span>图片</span> -->
                <el-col :xs="24" :sm="10"><div class="grid-content bg-purple">
                  <!-- 左侧的图片 -->
                    <img src="/4.jpg" class="img2">
                </div></el-col>
                <el-col :xs="24" :sm="12"><div class="grid-content bg-purple">
                    <h4>举个简单的例子</h4>
					          <p>但是为了让你明白，每一个天生的错误都是从何而来的，指责和赞美痛苦的乐趣，我将打开整个问题，并解释那个真理的。</p>
                  <!-- 右侧的文字 -->
                    <div>
                      <img>
                      <div>
                        <h5>艰苦的工作和巨大的痛苦</h5>
                        <p>没有其他人想要获得痛苦，因为痛苦是爱，被增强，想要获得，但绝不是因为它不是</p>
                      </div>
                    </div>

                    <div>
                      <img>
                      <div>
                        <h5>艰苦的工作和巨大的痛苦</h5>
                        <p>没有其他人想要获得痛苦，因为痛苦是爱，被增强，想要获得，但绝不是因为它不是</p>
                      </div>
                    </div>

                </div></el-col>
            </div></el-col>
        </el-row>

      <!-- 第二大行 -->
        <el-row :gutter="10">
            <el-col  :xl="24"><div class="grid-content bg-purple">
                    <div>
                      <h2>老舍是大哥</h2>
                    </div>
                     <!-- <el-col :xs="24" :sm="24" :md="8" ><div class="grid-content bg-purple">
                     <el-col :xs="24" :sm="24" :md="8" ><div class="grid-content bg-purple">
                     <el-col :xs="24" :sm="24" :md="8" ><div class="grid-content bg-purple"> -->
                       <el-col   :md="8" ><div class="grid-content bg-purple">
                          <div>
                            <h3>01</h3>
                            <h4>快感出来了</h4>
                            <p>但在某些时候，无论是通过必要的职务，还是通过事物的需要，它往往也会作为乐趣而发生。</p>
                          </div>
                      </div></el-col>

                      <el-col   :md="8" ><div class="grid-content bg-purple">
                          <div>
                            <h3>01</h3>
                            <h4>快感出来了</h4>
                            <p>但在某些时候，无论是通过必要的职务，还是通过事物的需要，它往往也会作为乐趣而发生。</p>
                          </div>
                      </div></el-col>

                      <el-col   :md="8" ><div class="grid-content bg-purple">
                          <div>
                            <h3>01</h3>
                            <h4>快感出来了</h4>
                            <p>但在某些时候，无论是通过必要的职务，还是通过事物的需要，它往往也会作为乐趣而发生。</p>
                          </div>
                      </div></el-col>


            </div></el-col> 
        </el-row>


      <!-- 第三大行 -->
              <el-row :gutter="10">
                    <div>
                      <h2>老舍是大哥</h2>
                    </div>
                    <el-col  :xs="12"  :lg="6" ><div class="grid-content bg-purple">另一方面，我们义愤填膺地谴责。</div></el-col>
                    <el-col  :xs="12"  :lg="6" ><div class="grid-content bg-purple-light">另一方面，我们义愤填膺地谴责。</div></el-col>
                    <el-col  :xs="12"  :lg="6" ><div class="grid-content bg-purple"></div>另一方面，我们义愤填膺地谴责。</el-col>
                    <el-col  :xs="12"  :lg="6" ><div class="grid-content bg-purple-light">另一方面，我们义愤填膺地谴责。</div></el-col>
              </el-row>


      <!-- 第四大行 -->

               <el-row :gutter="10">
                    <div>
                      <h2>老舍是大哥</h2>
                    </div>
                    <el-col  :xs="12"  :lg="6" ><div class="grid-content bg-purple">111111111111111。</div></el-col>
                    <el-col  :xs="12"  :lg="6" ><div class="grid-content bg-purple-light">2222222222222222地谴责。</div></el-col>
                    <el-col  :xs="12"  :lg="6" ><div class="grid-content bg-purple"></div>3333333333333义愤填膺地谴责。</el-col>
                    <el-col  :xs="12"  :lg="6" ><div class="grid-content bg-purple-light">另一方面，我们义愤填膺地谴责。</div></el-col>
              </el-row>




       </el-main>
      <!-- 页脚 -->
       <el-footer>

                 <el-row :gutter="10">
                    
                    <el-col  :lg="24" ><div class="grid-content bg-purple">111111111111111。</div></el-col>
                    
              </el-row>

       </el-footer>
    </el-container>
    
  </div>
</template>

<script>

// @media (min-width: 576px) {
//   .container-sm, .container {
//     max-width: 540px;
//   }
// }

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="scss">
  .headerul{
    margin: 0px;
  padding: 0px;
  border: none;
  list-style: none;

  li{
    display: inline-block;
    a{
    text-decoration: none;
    }
  }
}
.img2{
  width: 70%;
}

// @media (min-width: 992px){
// .headerul{
//     text-align: left;
// }
// }
</style>

