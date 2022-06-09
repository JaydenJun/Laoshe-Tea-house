//引入express模块
const express=require("express");
//引入数据库连接池对象
const pool=require("../pool.js");
//创建用户路由器对象
const ur=express.Router();
//添加路由
//1.用户注册接口(post /reg)
//接口地址：http://127.0.0.1:3000/v1/users/reg
//请求方式：post
ur.post("/reg",(req,res,next)=>{
	//1.1获取post传递的参数
	var obj=req.body;
	console.log(obj);
	
	//1.2执行SQL命令，将数据插入到数据库
	pool.query("insert into lscg_user set?",[obj],(err,result)=>{
		if(err){
			//throw 抛出错误，阻止后边程序的执行，仅用于调试阶段！
			//throw err;//正式上线，会造成服务器崩溃！
	//中间件放在所有路由的最后面，也就是写在WEB服务器的最后面
		
		//交给下一个错误处理中间件,同时把错误信息传递过去
		next(err);
		//阻止往后执行
		return;
		}
			console.log(result);
			//成功以后，代表插入成功，再去响应
		if(result.affectedRows===0){
			res.send({code:401,msg:'注册失败'});
			}else{
			res.send({code:200,msg:'注册成功'});
	}
	});
});
//2.用户登录接口(post  /login)
//接口地址：http://127.0.0.1:3000/v1/users/login
//请求方式：post
ur.post("/login",(req,res,next)=>{
	var obj=req.body;
	console.log(obj);
	
	pool.query("select * from lscg_user where phone=? and upwd=?",[obj.phone,obj.upwd],(err,result)=>{
	if(err){
	next(err);
	return;
	}
	//结果是数组，如果是空数组，说明用户不存在，否则存在
	console.log(result);
	if(result.length===0){
	res.send({code:500,msg:'登录失败'});
	}else{
	res.send({code:200,msg:'登录成功'});
	}
	});
});

//3.用户详情接口(get /detail/编号)
//接口地址：http://127.0.0.1:3000/v1/users/detail/1
//请求方式：get
ur.get("/detail/:uid",(req,res,next)=>{
	var obj=req.params;
	console.log(obj);
	pool.query("select * from lscg_user where name=?",[obj.name],(err,result)=>{
	if(err){
		next(err);
		return;
	}
	console.log(result);
	//结果是数组，如果是空数组，说明用户不存在，否则存在
	if(result.length===0){
	res.send({code:500,msg:'查无此人'});
	}else{
	res.send({code:200,msg:'查询成功',data:result});
	}
	});
});
//4.用户详情接口(get /detail/手机号) ——手机号
//接口地址：http://127.0.0.1:3000/v1/users/detailp/1
//请求方式：get
ur.get("/detailp/:phone",(req,res,next)=>{
	var obj=req.params;
	console.log(obj);
	pool.query("select * from lscg_user where phone=?",[obj.phone],(err,result)=>{
	if(err){
		next(err);
		return;
	}
	console.log(result);
	//结果是数组，如果是空数组，说明用户不存在，否则存在
	if(result.length===0){
	res.send({code:500,msg:'查无此人'});
	}else{
	res.send({code:200,msg:'查询成功',data:result});
	}
	});
});

//6.修改用户接口(put /)
//传参拼接需要u_names="${obj.uname}"
//接口地址：http://127.0.0.1:3000/v1/users
//请求方式：put
ur.put("",(req,res,next)=>{
	var obj=req.body;
	console.log(obj);
	pool.query("update lscg_user set? where phone=?",[obj,obj.phone],(err,result)=>{
	if(err){
	next(err);
	return;
	}
	console.log(result);
	//SQL命令执行成功后再去响应
	//修改的结果是对象，如果对象下的affectedRows的值是0说明修改失败，否则成功
	if(result.affectedRows===0){
		res.send({code:200,msg:"修改失败"});
	}else{
		res.send({code:200,msg:"修改成功"});
	}
	});
});

//8.用户修改手机号接口(put /)
//传参拼接需要u_names="${obj.uname}"
//接口地址：http://127.0.0.1:3000/v1/users/p
//请求方式：put
ur.put("/p",(req,res,next)=>{
	var obj=req.body;
	console.log(obj);
	pool.query("update lscg_user set?  where member=?",[obj,obj.member],(err,result)=>{
	if(err){
	next(err);
	return;
	}
	console.log(result);
	//SQL命令执行成功后再去响应
	//修改的结果是对象，如果对象下的affectedRows的值是0说明修改失败，否则成功
	if(result.affectedRows===0){
		res.send({code:200,msg:"修改失败"});
	}else{
		res.send({code:200,msg:"修改成功"});
	}
	});
});
//9.用户列表接口分页(get /list)
//接口地址：http://127.0.0.1:3000/v1/users/list
//请求方式：get
ur.get("/list",(req,res,next)=>{
	var obj=req.query;
	console.log(obj);
	if(!obj.pno){
		obj.pno=1;
	}
	if(!obj.count){
		obj.count=5;
	}
	var start=(obj.pno-1)*obj.count;
	var size=parseInt(obj.count);
	pool.query("select * from lscg_user Limit ?,?",[start,size],(err,result)=>{
	if(err){
	  next(err);
	  return;
	}
	console.log(result);
	//查询到的是数组，直接把数组响应过去
	res.send({code:200,msg:"查询成功",data:result});
	});
});
//10.用户列表接口全部(get /lists)
//接口地址：http://127.0.0.1:3000/v1/users/lists
//请求方式：get
ur.get("/lists",(req,res,next)=>{
	var obj=req.query;
	console.log(obj);
	pool.query("select * from lscg_user ",(err,result)=>{
	if(err){
	  next(err);
	  return;
	}
	console.log(result);
	if(result.length===0){
		res.send({code:200,msg:"查询失败"});
	}else{
	//查询到的是数组，直接把数组响应过去
	res.send({code:200,msg:"查询成功",data:result});
	}
});
});

//11.删除用户接口(delete /编号)
//接口地址：http://127.0.0.1:3000/v1/users/6
//请求方式：delete
ur.delete("/:uid",(req,res,next)=>{
	//获取路由传递的参数
	var obj=req.params;
	//执行SQL命令，删除编号对应的用户
	pool.query("delete from lscg_user where uid=?",[obj.uid],(err,result)=>{
	if(err){
		//如果SQL命令中出现错误，则交给下一个错误处理中间件
		next(err);
		//阻止往后执行
		return;
	}
	console.log(result);
	//如果是对象，如果对象下的affectedRows对应的值为0说明删除失败，否则删除成功
	if(result.affectedRows===0){
		res.send({code:500,msg:"删除失败"});
	}else{
		res.send({code:200,msg:"删除成功"});
	}
	});
});

//12.检测用户名是否可用接口(get /checkuname/用户名)
//接口地址：http://127.0.0.1:3000/v1/users/checkuname/tao
//请求方式：get
ur.get("/checkuname/:uname",(req,res,next)=>{
	var obj=req.params;
	console.log(obj);
	//执行SQL命令，是否有用户名对应的数据
	pool.query("select * from lscg_user where uname=?",[obj.uname],(err,result)=>{
		if(err){
		next(err);
		return;
		}
		console.log(result);
		//查询结果是数组，如果为空数组，说明未被注册，可用；否则不可用
		if(result.length===0){
			res.send({code:200,msg:'该用户名未被注册'});
		}else{
			res.send({code:500,msg:'该用户已被注册'});
	}
	});
});
//13.检测手机号是否可用接口(get /checkuname/手机号)
//接口地址：http://127.0.0.1:3000/v1/users/checkunames/1321651516
//请求方式：get
ur.get("/checkunames/:phone",(req,res,next)=>{
	var obj=req.params;
	console.log(obj);
	//执行SQL命令，是否有手机号对应的数据
	pool.query("select * from lscg_user where phone=?",[obj.phone],(err,result)=>{
		if(err){
		next(err);
		return;
		}
		console.log(result);
		//查询结果是数组，如果为空数组，说明未被注册，可用；否则不可用
		if(result.length===0){
			res.send({code:200,msg:'该手机号未被注册'});
		}else{
			res.send({code:500,msg:'该手机号已被注册'});
	}
	});
});



//将用户路由器暴露出去
module.exports=ur;