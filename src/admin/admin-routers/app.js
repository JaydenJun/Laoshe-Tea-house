//引入express模块
const express = require('express');
const cors = require("cors");
//引入路由器user.js
const user = require('./joggle/user.js');
const admin = require('./joggle/admin.js');

//引入body-parser中间件模块
// const bodyParser=require('body-parser');
//创建web服务器
const app = express();

app.use(cors({
<<<<<<< HEAD
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080',
    'http://localhost:5500', 'http://127.0.0.1:5500'
  ], //指定接收的地址
  methods: ['GET', 'POST', 'DELETE', 'PUT'], //指定接收的请求类型
  alloweHeaders: ['Content-Type', 'Authorization'] //指定header
=======
	origin:['http://localhost:8080','http://127.0.0.1:8080',
	'http://localhost:5500','http://127.0.0.1:5500'],  //指定接收的地址
    methods:['GET','POST','DELETE','PUT'],  //指定接收的请求类型
    alloweHeaders:['Content-Type','Authorization']  //指定header
>>>>>>> b33de42771c7a7794a47a2a0e6b9ed421a338bc8
}))

// app.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//    next()
// })

//配置multer中间件
const multer = require('multer')
obj = multer.diskStorage({
  destination: function (req, file, cb) { //指定目录
    cb(null, 'public')
  },
  filename: function (req, file, cb) { // 指定文件名
    let name = file.originalname
    // name:  abcd.jpg    xxxdfdd.zip
    let ext = name.substr(name.lastIndexOf('.'))
    cb(null, uuid.v4() + ext)
  }
})
const uploadTools = multer({
  storage: obj
})
const uuid = require('uuid')

// 静态资源托管upload目录
app.use(express.static('public'))

// 指定web服务器的监听端口
app.listen(3000, function () {
  console.log('3000端口服务器已经启动...')
})

//使用body-parser中间件，将post请求的数据解析为对象
// app.use(bodyParser.urlencoded({
//   extended:false
// }));

//npm i express-session
const session = require("express-session");
app.use(session({
  name: 'session-id',
  secret: '12345-67890',
  saveUninitialized: true,
  resave: true
}))



//接收请求
app.post('/upload',
  uploadTools.array('uploadFile'), (req, res) => {
    console.log(req.files)
    let urls = []
    req.files.forEach(item => {
      urls.push(`http://localhost:3000/${item.filename}`)
    })
    res.send({
      code: 200,
      msg: 'ok',
      urls
    })
  })


//添加中间件将post传递的参数转为对象
app.use(express.urlencoded({
  extended: true
}));
//挂载路由器，添加前缀名
app.use('/v1/users', user);
app.use('/v1/admin', admin);
//在所有的路由器的后边，添加错误处理中间件，拦截所有路由的错误
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
  }
  res.send({
    code: 500,
    msg: "服务器端错误"
  });
});