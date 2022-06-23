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
s.get('/v1/code', (req, res) => {

    // 第一个版本:图形类型的验证码
    const cap = svgCaptcha.create({
        // 翻转颜色
        inverse: false,
        // 字体大小
        fontSize: 36,
        // 噪声线条数
        noise: 2,
        // 宽度
        width: 80,
        // 高度
        height: 30,
        //是否是彩色
        color: true,
        ignoreChars: "0o1i",
        size: 5,//验证码长度
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
    a = req.session.captcha = cap.text; // session 存储验证码数值 1+5 = 6
    b = req.session.captcha = cap.text;
    console.log(req.session.captcha)

    res.type('svg'); // 响应的类型
    res.send(cap.data)
    //console.log(cap.data)
});

// 1.登录接口 http://127.0.0.1:3000/v1/users/login --- 手机名/密码必填
s.post('/login', (req, res, next) => {
    //获取用户输入验证码
    var code = req.body.code;
    console.log(code, a)
    //与系统验证 和用户输入验证码比较
    if (code != a) {
        res.send("400");    //不一样返回-1验证码输入错误
        return;
    }
    //.........................稍等
    a = "";
    if (a) {
        res.send("200");
        return;
    }

    let obj = req.body
    sql.query("select * from lscg_users where user_phone=? and user_pwd=?", [obj.user_phone, obj.user_pwd], (err, r) => {
        if (err) {
            next(err)
            return;
        }
        if (!r.length) {
            res.send({ code: 505, msg: '登录失败' })
        } else {
            res.send({ code: 200, msg: '登录成功' })
        }
    })
});

// 2.注册接口 http://127.0.0.1:3000/v1/users/register --- 用户名/用户密码/用户手机号必填
s.post('/register', (req, res, next) => {
    //获取用户输入验证码
    let codes = req.body.codes;
    // console.log(codes, b)
    //与系统验证 和用户输入验证码比较
    if (codes != b) {
        res.send("400");    //不一样返回-1验证码输入错误
        return;
    }
    //.........................稍等
    b = "";
    if (b) {
        res.send("200");
        return;
    }
    let obj = req.body
    console.log(obj);
    sql.query('INSERT INTO lscg_users (user_id,user_name,user_pwd,user_phone) VALUES(null,?,?,?)', [obj.user_name, obj.user_pwd, obj.user_phone], (err, r) => {
        if (err) {
            next(err)
            return;
        };
        if (r.affectedRows === 0) {
            res.send({ code: 505, msg: '注册失败' })
        } else {
            res.send({ code: 200, msg: '注册成功' })
        }
    })
});

// 3.所有商品查询接口 http://127.0.0.1:3000/v1/users/shopps
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

// 4.商品规格查询接口 http://127.0.0.1:3000/v1/users/shopp?show_sid=多少
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

//勇哥-四个接口
// 5.茶百科茶分类查询接口 http://127.0.0.1:3000/v1/users/teas
s.get("/teas", (req, res, next) => {
    var obj = req.body;
    console.log(obj);
    sql.query("select * from tea_class", (err, data) => {
        if (err) {
            next(err);
            return;
        }
        if (!data.length) {
            res.send({ code: 505, msg: "查询失败" });
        } else {
            res.send({ code: 200, msg: "查询成功", data: data });
        }
    });
});

// 7.通过分类teaclass_sid查询每个所属分类的茶 http://127.0.0.1:3000/v1/users/teas?teaclass_sid=多少
s.get("/teatype", (req, res, next) => {
    var obj = req.query;
    if (!obj.teaclass_sid) {
        sql.query("select * from lscg_tea", (err, data) => {
            if (err) {
                next(err);
                return;
            }
            if (!data.length) {
                res.send({ code: 505, msg: "查询失败" });
            } else {
                res.send({ code: 200, msg: "查询成功", data: data });
            }
        });
    } else {
        sql.query("select * from lscg_tea where teaclass_sid=?", [obj.teaclass_sid], (err, data) => {
            if (err) {
                next(err);
                return;
            }
            if (!data.length) {
                res.send({ code: 505, msg: "查询失败" });
            } else {
                res.send({ code: 200, msg: "查询成功", data: data });
            }
        });
    }
});



// 8.茶百科用户搜索模糊查询
s.get('/s', (req, res, next) => {
    if (req.query.tea_name == '') {
        sql.query('select * from lscg_tea', (err, data) => {
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
    } else {
        sql.query(`select * from lscg_tea where tea_name like'%${req.query.tea_name}%'`, (err, data) => {
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
    }
});

// 9.茶百科单个茶详情查询 http://127.0.0.1:3000/v1/users/tea?tea_id=多少
s.get('/teadetails', (req, res, next) => {
    var obj = req.query.tea_id
    console.log(obj)
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

// 9.茶友圈最新帖全部查询 http://127.0.0.1:3000/v1/users/rings
s.get('/rings', (req, res, next) => {
    var obj = req.query;
    console.log(obj);

    //如果页码为空，默认第1页
    if (!obj.pno) {
        obj.pno = 1;
    }
    //如果每页数据量为空，默认显示4条
    if (!obj.count) {
        obj.count = 4;
    }
    //计算开始查询的值
    var start = (obj.pno - 1) * obj.count; //最终是数字
    //将每页的数据量转为数值
    var size = parseInt(obj.count);
    //执行SQL命令
    sql.query('select ring_id,user_id,user_name,ring_details,ring_prise,ring_pic from lscg_users as u inner join tea_ring as t on u.user_id=t.user_sid group by ring_id order by ring_id desc limit ?,?', [start, size], (err, data) => {
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

// 10.茶友圈热帖全部查询 http://127.0.0.1:3000/v1/users/ringss
s.get('/ringss', (req, res, next) => {
    var obj = req.query;
    console.log(obj);

    //如果页码为空，默认第1页
    if (!obj.pno) {
        obj.pno = 1;
    }
    //如果每页数据量为空，默认显示4条
    if (!obj.count) {
        obj.count = 4;
    }
    //计算开始查询的值
    var start = (obj.pno - 1) * obj.count; //最终是数字
    //将每页的数据量转为数值
    var size = parseInt(obj.count);
    //执行SQL命令
    sql.query('select ring_id,user_id,user_name,ring_details,ring_prise,ring_pic from lscg_users as u inner join tea_ring as t on u.user_id=t.user_sid group by ring_id order by ring_prise desc limit ?,?', [start, size], (err, data) => {
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

// 11.评论查询接口 http://127.0.0.1:3000/v1/users/comment?ring_sid=多少
s.get('/comment', (req, res, next) => {
    let obj = req.query
    sql.query('select * from ring_comment where ring_sid=?', [obj.ring_sid], (err, data) => {
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

// 12.茶友圈话题发布接口 http://127.0.0.1:3000/v1/users/sendring
s.post('/sendring', (req, res, next) => {
    let obj = req.body
    sql.query('insert into tea_ring set?', [obj], (err, r) => {
        if (err) {
            next(err)
            return;
        }
        if (r.affectedRows === 0) {
            res.send({ code: 505, msg: '发布失败' })
        } else {
            res.send({ code: 200, msg: '发布成功' })
        }
    })
});

// 13.评论接口 http://127.0.0.1:3000/v1/users/sendcm
s.post('/sendcm', (req, res, next) => {
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

// 14.茶友圈点赞接口 http://127.0.0.1:3000/v1/users/give
s.post('/give', (req, res, next) => {
    let obj = req.body
    sql.query('update tea_ring set ring_prise=? where ring_id=?', [obj.ring_prise, obj.ring_id], (err, r) => {
        if (err) {
            next(err)
            return;
        }
        if (r.affectedRows === 0) {
            res.send({ code: 505, msg: "点赞失败" });
        } else {
            res.send({ code: 200, msg: "点赞成功" });
        }
    })
});

// 15.购买商品接口 http://127.0.0.1:3000/v1/users/buy
s.post('/buy', (req, res, next) => {
    let obj = req.body
    sql.query('insert into lscg_orders set?', [obj], (err, r) => {
        if (err) {
            next(err)
            return;
        }
        if (r.affectedRows === 0) {
            res.send({ code: 505, msg: '购买失败' })
        } else {
            res.send({ code: 200, msg: '购买成功' })
        }
    })
});

// 16.我的订单接口 http://127.0.0.1:3000/v1/users/order?user_oid=多少
// select show_oid,show_title,show_time,order_count,order_pice from lscg_orders as o inner join show_details as h on o.show_oid=h.show_id where user_oid=?
s.get('/order', (req, res, next) => {
    sql.query('select * from lscg_orders where user_oid=?', [req.query.user_oid], (err, data) => {
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

// 17.新闻标题的查询接口 http://127.0.0.1:3000/v1/users/news
s.get('/news', (req, res, next) => {
    sql.query('select * from new_class order by class_id desc', (err, data) => {
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

// 18.新闻详情的查询接口 http://127.0.0.1:3000/v1/users/xiang?class_nid=多少
s.get('/xiang', (req, res, next) => {
    let class_nid = req.query.xiao
    console.log(class_nid)
    sql.query('select * from new_details where class_nid=?', [class_nid], (err, data) => {
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

// 19.每个新闻详情的查询接口 http://127.0.0.1:3000/v1/users/qin?new_id=多少
s.get('/qin', (req, res, next) => {
    let new_id = req.query.qing
    console.log(new_id)
    sql.query('select * from new_details where new_id=?', [new_id], (err, data) => {
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

// 20.新闻右侧咨询表格 htpp://127.0.0.1:3000/v1/users/zixun
s.get('/zixun', (req, res, next) => {
    sql.query('select * from new_zixun', (err, data) => {
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

//用户个人详情接口(get /detail/编号)
//接口地址：http://127.0.0.1:3000/v1/users/detailss/1
//请求方式：get
s.get("/detailss/:user_phone", (req, res, next) => {
    var obj = req.params;
    console.log(obj);
    sql.query("select * from lscg_users where user_phone=?", [obj.user_phone], (err, result) => {
        if (err) {
            next(err);
            return;
        }
        console.log(result);
        //结果是数组，如果是空数组，说明用户不存在，否则存在
        if (result.length === 0) {
            res.send({ code: 500, msg: '查无此人' });
        } else {
            res.send({ code: 200, msg: '查询成功', data: result });
        }
    });
});

// 手机号查询接口 http://127.0.0.1:3000/v1/users/userph
s.get('/userph', (req, res, next) => {
    let obj = req.query
    sql.query('select * from lscg_users where user_phone=?', [obj.user_phone], (err, data) => {
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

// 主页
s.get('/indexss', (req, res, next) => {
    let obj = req.query
    sql.query('select  *  from index_img', (err, data) => {
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



//暴露路由对象
module.exports = s;