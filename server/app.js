//启动文件
//1.引入第三方express模块和cors模块
const express = require('express');
const cors = require("cors");
//7.引入管理员路由
const adminRouter = require('./routes/admin.js');
//8.引入用户路由
const userRouter = require('./routes/user.js');

//2.创建web服务器
const app = express();

/*//跨域设置-精确配置
app.use(cors({
	origin:['http://localhost:8848'],  //指定接收的地址
    methods:['GET','POST','DELETE','PUT'],  //指定接收的请求类型
    alloweHeaders:['Content-Type','Authorization']  //指定header
}))*/
//跨域设置-允许所有
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  //          访问 - 控制 - 允许 - 来源   :  * 代表任何来源
  next()
})

//3.设置端口
app.listen(3000,()=>{
	console.log("服务器启动成功，端口号3000");
});
//4.静态资源托管
app.use(express.static('./public'));
//5.解析url-encoded数据格式，将所有post传递的参数转为对象
app.use(express.urlencoded({
	extended: false
}));
//10.挂载路由
//路由配置之后接口地址要有这两个资源目录开始，再加入后面的资源目录 如：/admin/query
//给管理员路由器下所有路由添加前缀版本号  /v1/admin
app.use('/admin',adminRouter);
//给用户路由器下所有路由添加前缀版本号  /v1/user
app.use('/v1/users',userRouter);

//6.处理错误中间件
app.use((err, req, res, next) => {
  //查看错误信息
	if(err){
	  console.log(err);
	 }
  //响应服务器端错误
	res.status(500).send({
		code:500,
		msg:"服务器端错误"
	});
});