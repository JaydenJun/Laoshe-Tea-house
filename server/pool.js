//引入mysql模块
const mysql=require("mysql");
//创建连接池对象
const pool=mysql.createPool({
	host:"127.0.0.1",
	port:"3306",
	user:"root",
	password:"",
	database:"lscg",
	connectedlimit:15
});
//暴露出去
module.exports=pool;