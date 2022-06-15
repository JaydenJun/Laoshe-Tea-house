// 引入express模块
const express = require('express');

// 引入数据库连接池模块
const sql = require('../pool.js');

// 添加路由对象
const s = express.Router();


// 第三方图形验证码模块:
// 下载  npm i svg-captcha
const svgCaptcha = require('svg-captcha');


//所有图形验证,服务器node一个程序出生一张图
s.get('/v1/code',(req, res)=>{

	// 第一个版本:图形类型的验证码
	const cap = svgCaptcha.create({
			// 翻转颜色
			inverse: false,
			// 字体大小
			fontSize: 36,
			// 噪声线条数
			noise: 5,
			// 宽度
			width: 80,
			// 高度
			height: 30,
			//是否是彩色
			color:true,
			ignoreChars:"0o1i",
			size:5,//验证码长度
		});

	// //第二个版本:算术计算
	// const cap = svgCaptcha.createMathExpr({
	// 	fontSize: 45,
	// 	mathMin:1,
	// 	mathMax:9,
	// 	mathOperator:"+-",
	// 	width: 110,
	//     height: 45,
	// 	color:true,
	// })	
	a=req.session.captcha = cap.text; // session 存储验证码数值 1+5 = 6
	console.log(req.session.captcha)

	res.type('svg'); // 响应的类型
	res.send(cap.data)
		//console.log(cap.data)
  });

// 登录接口 http://127.0.0.1:3000/v1/users/login --- 用户名/密码必填
s.post('/login', (req, res, next) => {
    //获取用户输入验证码
    var code = req.body.code;
    console.log(code,a)
    //与系统验证 和用户输入验证码比较
    if(code !=a){
      res.send("400");    //不一样返回-1验证码输入错误
      return;
    }
    //.........................稍等
    a = "";
    if(a){
        res.send("200");
        return;
    }

    let obj = req.body
    console.log(obj);
    sql.query('select * from lscg_users where user_phone=? and user_pwd=?', [obj.user_phone, obj.user_pwd], (err, data) => {
        //排错,处理错误
        if (err) {
            next(err);
            return;
        }
        //查看数据库是否返回查询结果
        //[ RowDataPacket { a_id: 1, a_names: 'zhangsan', a_pwd: '123' } ]
        // console.log(data);
        //判断是否查询到数据
        if (data.length == 0) {
            //没查到数据
            res.send({
                "code": 505,
                "msg": "没找到数据"
            });
        } else {
            res.send({
                "code": 200,
                "msg": "登录成功"
            })
        }
    })

})

// 注册接口 http://127.0.0.1:3000/v1/users/register --- 用户名/用户密码/用户手机号必填
s.post('/register', (req, res, next) => {
    sql.query('insert into lscg_users set?', [req.body], (err, r) => {
        if (err) {
            next(err)
            return;
        };
        if (r.affectedRows === 0) {
            res.send({ code: 505, msg: '录入失败' })
        } else {
            res.send({ code: 200, msg: '录入成功' })
        }
    })
});

// 新闻查询接口 http://127.0.0.1:3000/v1/users/news
s.get('/news', (req, res, next) => {
    sql.query('select * from new_class join new_details on class_id=class_nid order by new_time desc', (err, data) => {
        if (err) {
            next(err)
            return;
        }
        if (!data.length) {
            res.send({ code: 505, msg: '查询失败' })
        } else {
            res.send({ code: 200, msg: '查询成功', data: data })
        }
    })
});

// 所有商品查询接口 http://127.0.0.1:3000/v1/users/shopps
s.get('/shopps', (req, res, next) => {
    sql.query('select * from show_family join show_details on family_id=family_sid', (err, data) => {
        if (err) {
            next(err)
            return;
        }
        if (!data.length) {
            res.send({ code: 505, msg: '查询失败' })
        } else {
            res.send({ code: 200, msg: '查询成功', data: data })
        }
    })
});

// 商品规格查询接口 http://127.0.0.1:3000/v1/users/shopp?show_sid=多少
s.get('/shopp', (req, res, next) => {
    sql.query('select * from ticket_specs where show_sid=?', [req.query.show_sid], (err, data) => {
        if (err) {
            next(err)
            return;
        }
        if (!data.length) {
            res.send({ code: 505, msg: '查询失败' })
        } else {
            res.send({ code: 200, msg: '查询成功', data: data })
        }
    })
});

// 茶百科查询接口 http://127.0.0.1:3000/v1/users/teas
s.get('/teas', (req, res, next) => {
    sql.query('select * from tea_class join lscg_tea on teaclass_id=teaclass_sid', (err, data) => {
        if (err) {
            next(err)
            return;
        }
        if (!data.length) {
            res.send({ code: 505, msg: '查询失败' })
        } else {
            res.send({ code: 200, msg: '查询成功', data: data })
        }
    })
});

// 茶百科单个茶详情查询 http://127.0.0.1:3000/v1/users/tea?tea_id=多少
s.get('/tea', (req, res, next) => {
    sql.query('select * from lscg_tea where tea_id=?', [req.query.tea_id], (err, data) => {
        if (err) {
            next(err)
            return;
        }
        if (!data.length) {
            res.send({ code: 505, msg: '查询失败' })
        } else {
            res.send({ code: 200, msg: '查询成功', data: data })
        }
    })
});

// 茶友圈的全部查询 http://127.0.0.1:3000/v1/users/rings
s.get('/rings', (req, res, next) => {
    sql.query('select * from lscg_users as u inner join tea_ring as t on u.user_id=t.user_sid inner join ring_comment as s on t.ring_id=s.ring_sid', (err, data) => {
        if (err) {
            next(err)
            return;
        }
        if (!data.length) {
            res.send({ code: 505, msg: '查询失败' })
        } else {
            res.send({ code: 200, msg: '查询成功', data: data })
        }
    })
});

// 评论接口 http://127.0.0.1:3000/v1/users/sendring
s.post('/sendring', (req, res, next) => {
    let obj = req.body
    sql.query('insert into ring_comment set?', [obj], (err, r) => {
        if (err) {
            next(err)
            return;
        }
        if (r.affectedRows === 0) {
            res.send({ code: 505, msg: '评论失败' })
        } else {
            res.send({ code: 200, msg: '评论成功' })
        }
    })
});

//暴露路由对象
module.exports = s;