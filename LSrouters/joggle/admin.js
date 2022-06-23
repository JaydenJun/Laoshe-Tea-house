//1.引入第三方模块
const express = require('express');
//2.需要用到mysql，要引入连接池模块
const pool = require('../pool.js');
//3.创建路由对象
const router = express.Router();
//以下为处理逻辑

//(1)管理员登录
//请求方式：post
//路由地址: http://127.0.0.1:3000/v1/admin/login
//接收传参的方法：req.body
router.post('/login', (req, res, next) => {
  //查看前台传值是否已到
  let obj = req.body;
  // console.log(obj);
  //执行sql查询
  pool.query('select * from admin where aname=? and apwd=?', [obj.aname, obj.apwd], (err, data) => {
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
        "code": 404,
        "msg": "没找到数据"
      });
    } else {
      res.send({
        "code": 200,
        "msg": "管理员登录成功"
      })
    }
  })

})
// 用户接口###########################
//(2).用户列表接口(get /list)
//接口地址：http://127.0.0.1:3000/v1/admin/list?pno=1&count=3
//请求方式：get
// router.get('/list', (req, res, next) => {
//   //接收get传递的参数
//   var obj = req.query;
//   console.log(obj);

//   //如果页码为空，默认第1页
//   if (!obj.pno) {
//     obj.pno = 1;
//   }
//   //如果每页数据量为空，默认显示4条
//   if (!obj.count) {
//     obj.count = 4;
//   }
//   //计算开始查询的值
//   var start = (obj.pno - 1) * obj.count; //最终是数字
//   //将每页的数据量转为数值
//   var size = parseInt(obj.count);
//   //执行SQL命令
//   pool.query('select * from lscg_users limit ?,?', [start, size], (err, r) => {
//     if (err) {
//       next(err);
//       return;
//     }
//     console.log(r);
//     //查询到的是数组，直接把数组响应过去
//     res.send({
//       code: 200,
//       msg: '查询成功',
//       data: r
//     });
//   });
// });


// 个人用户修改接口
//修改信息接口
//接口地址：http://127.0.0.1:3000/v1/admin/putuu
//请求方式：put
router.put("/putuu", (req, res, next) => {
  var obj = req.body;
  console.log(obj);

  pool.query("update lscg_users set user_name=?,user_phone=?,user_pwd=? where user_id=?", [obj.user_name, obj.user_phone, obj.user_pwd, obj.user_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.affectedRows == 0) {
      res.send({ code: 500, msg: '修改失败' });
    } else {
      res.send({ code: 200, msg: '修改成功' });
    }
  });
});




//(3)删除用户接口(delete /编号)
//接口地址：http://127.0.0.1:3000/v1/admin/u/6
//请求方式：delete
router.delete('/u/:user_id', (req, res, next) => {
  //获取路由传递的参数
  var obj = req.params;
  console.log(obj);
  //执行SQL命令，删除编号对应的用户   10:15
  pool.query('delete from lscg_users where user_id=?', [obj.user_id], (err, r) => {
    if (err) {
      //如果SQL命令中出现错误，则交给下一个错误处理中间件
      next(err);
      //阻止往后执行
      return;
    }
    console.log(r);
    //结果是对象，如果对象下的affectedRows对应的值为0说明删除失败，否则删除成功
    if (r.affectedRows === 0) {
      res.send({
        code: 500,
        msg: '删除失败'
      });
    } else {
      res.send({
        code: 200,
        msg: '删除成功'
      });
    }
  });
});


//用户详情接口(get /detail/编号)
//接口地址：http://127.0.0.1:3000/v1/admin/detail/1
//请求方式：get
router.get('/detail/:user_id', (req, res, next) => {
  //获取路由传参的值
  var obj = req.params;
  console.log(obj);
  //执行SQL 命令，查询编号对应的员工
  pool.query('select * from lscg_users where user_id=?', [obj.user_id], (err, r) => {
    if (err) {
      next(err);
      return;
    }
    console.log(r);
    //结果是数组，如果是空数组，说明用户不存在，否则存在
    if (r.length === 0) {
      res.send({
        code: 500,
        msg: '查无此人'
      });
    } else {
      res.send({
        code: 200,
        msg: '查询成功',
        data: r
      });
    }
  });
});



// 特色演出接口##########################
//特色演出列表
// 录入信息接口(post /inserts)
//接口地址：http://127.0.0.1:3000/v1/admin/inserts
//请求方式：post
router.post("/inserts", (req, res, next) => {
  //获取post传递的参数
  var obj = req.body;
  console.log(obj);

  //执行sql命令
  pool.query("insert into show_details set?", [obj], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.send({
      code: 200,
      msg: "录入成功"
    });
  });
});

// 特色修改接口
//修改信息接口
//接口地址：http://127.0.0.1:3000/v1/admin/putt
//请求方式：put
router.put("/putt", (req, res, next) => {
  var obj = req.body;
  console.log(obj);

  pool.query("update show_details set? where show_id=?", [obj, obj.show_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.affectedRows == 0) {
      res.send({ code: 500, msg: '修改失败' });
    } else {
      res.send({ code: 200, msg: '修改成功' });
    }
  });
});


//特色演出列表
// 删除信息接口(delete /编号)
//接口地址：http://127.0.0.1:3000/v1/admin/t/5
//请求方式：delete
router.delete("/t/:show_id", (req, res, next) => {
  var obj = req.params;
  console.log(obj);
  pool.query("delete from show_details where show_id=? ", [obj.show_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    console.log(result);
    if (result.affectedRows === 0) {
      res.send({
        code: 500,
        msg: '删除失败'
      });
    } else {
      res.send({
        code: 200,
        msg: '删除成功'
      });
    }
  });
});


//分页查询
// 特色演出列表接口(get /lists)
//接口地址：http://127.0.0.1:3000/v1/admin/lists?pno=1&count=3
//请求方式：get
router.get('/lists', (req, res, next) => {
  //接收get传递的参数
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
  pool.query('select * from show_details limit ?,? ', [start, size], (err, r) => {
    if (err) {
      next(err);
      return;
    }
    console.log(r);
    //查询到的是数组，直接把数组响应过去
    res.send({
      code: 200,
      msg: '查询成功',
      data: r
    });
  });
});



//演出详情接口(get /details/编号)
//接口地址：http://127.0.0.1:3000/v1/admin/details/1
//请求方式：get
router.get('/details/:show_id', (req, res, next) => {
  //获取路由传参的值
  var obj = req.params;
  console.log(obj);
  //执行SQL 命令，查询编号对应的员工
  pool.query('select * from show_details where show_id=?', [obj.show_id], (err, r) => {
    if (err) {
      next(err);
      return;
    }
    console.log(r);
    //结果是数组，如果是空数组，说明用户不存在，否则存在
    if (r.length === 0) {
      res.send({
        code: 500,
        msg: '没有此演出'
      });
    } else {
      res.send({
        code: 200,
        msg: '查询成功',
        data: r
      });
    }
  });
});


// 茶百科接口#######################
//茶百科列表
// 录入信息接口(post /insertsb)
//接口地址：http://127.0.0.1:3000/v1/admin/insertsb
// 传参   params=tea_id=${}&tea_name=${}&···   具体看数据要什么
//请求方式：post
router.post("/insertsb", (req, res, next) => {
  //获取post传递的参数
  var obj = req.body;
  console.log(obj);

  //执行sql命令
  pool.query("insert into lscg_tea set?", [obj], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.send({
      code: 200,
      msg: "录入成功"
    });
  });
});


// 茶百科修改接口
//修改信息接口
//接口地址：http://127.0.0.1:3000/v1/admin/putb
//请求方式：put
router.put("/putb", (req, res, next) => {
  var obj = req.body;
  console.log(obj);

  pool.query("update lscg_tea set? where tea_id=?", [obj, obj.tea_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.affectedRows == 0) {
      res.send({ code: 500, msg: '修改失败' });
    } else {
      res.send({ code: 200, msg: '修改成功' });
    }
  });
});



//查百科列表
// 删除信息接口(delete /编号)
//接口地址：http://127.0.0.1:3000/v1/admin/b/5
//请求方式：delete
router.delete("/b/:tea_id", (req, res, next) => {
  var obj = req.params;
  console.log(obj);
  pool.query("delete from lscg_tea where tea_id=? ", [obj.tea_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    console.log(result);
    if (result.affectedRows === 0) {
      res.send({
        code: 500,
        msg: '删除失败'
      });
    } else {
      res.send({
        code: 200,
        msg: '删除成功'
      });
    }
  });
});


//分页查询
// 茶百科列表接口(get /listsb)
//接口地址：http://127.0.0.1:3000/v1/admin/listsb?pno=1&count=3    count为每页显示数量
//请求方式：get
router.get('/listsb', (req, res, next) => {
  //接收get传递的参数
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
  pool.query('select * from lscg_tea limit ?,?', [start, size], (err, r) => {
    if (err) {
      next(err);
      return;
    }
    console.log(r);
    //查询到的是数组，直接把数组响应过去
    res.send({
      code: 200,
      msg: '查询成功',
      data: r
    });
  });
});



//茶百科接口(get /detailsb/编号)
//接口地址：http://127.0.0.1:3000/v1/admin/detailsb/1
//请求方式：get
router.get('/detailsb/:tea_id', (req, res, next) => {
  //获取路由传参的值
  var obj = req.params;
  console.log(obj);
  //执行SQL 命令，查询编号对应的员工
  pool.query('select * from lscg_tea where tea_id=?', [obj.tea_id], (err, r) => {
    if (err) {
      next(err);
      return;
    }
    console.log(r);
    //结果是数组，如果是空数组，说明用户不存在，否则存在
    if (r.length === 0) {
      res.send({
        code: 500,
        msg: '没有此演出'
      });
    } else {
      res.send({
        code: 200,
        msg: '查询成功',
        data: r
      });
    }
  });
});



// 新闻接口#######################
//(5)新闻列表
// 录入信息接口(post /insertsbd)
//接口地址：http://127.0.0.1:3000/v1/admin/insertsbd
// 传参   params=new_id=${}&new_title=${}&···   具体看数据要什么
//请求方式：post
router.post("/insertsbd", (req, res, next) => {
  //获取post传递的参数
  var obj = req.body;
  console.log(obj);

  //执行sql命令
  pool.query("insert into new_details set?", [obj], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.send({
      code: 200,
      msg: "录入成功"
    });
  });
});

//(6)茶新闻列表
// 删除信息接口(delete /编号)
//接口地址：http://127.0.0.1:3000/v1/admin/5
//请求方式：delete
router.delete("/:new_id", (req, res, next) => {
  var obj = req.params;
  console.log(obj);
  pool.query("delete from new_details where new_id=? ", [obj.new_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    console.log(result);
    if (result.affectedRows === 0) {
      res.send({
        code: 500,
        msg: '删除失败'
      });
    } else {
      res.send({
        code: 200,
        msg: '删除成功'
      });
    }
  });
});

//修改信息接口
//接口地址：http://127.0.0.1:3000/v1/admin/putn
//请求方式：put
router.put("/putn", (req, res, next) => {
  var obj = req.body;
  console.log(obj);

  pool.query("update new_details set? where new_id=?", [obj, obj.new_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.affectedRows == 0) {
      res.send({ code: 500, msg: '修改失败' });
    } else {
      res.send({ code: 200, msg: '修改成功' });
    }
  });
});




//分页查询
// 新闻列表接口(get /listsbd)
//接口地址：http://127.0.0.1:3000/v1/admin/listsbd?pno=1&count=3    count为每页显示数量
//请求方式：get
router.get('/listsbd', (req, res, next) => {
  //接收get传递的参数
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
  pool.query('select * from new_details limit ?,?', [start, size], (err, r) => {
    if (err) {
      next(err);
      return;
    }
    console.log(r);
    //查询到的是数组，直接把数组响应过去
    res.send({
      code: 200,
      msg: '查询成功',
      data: r
    });
  });
});



//茶新闻详情接口(get /detailsbd/编号)
//接口地址：http://127.0.0.1:3000/v1/admin/detailsbd/1
//请求方式：get
router.get('/detailsbd/:new_id', (req, res, next) => {
  //获取路由传参的值
  var obj = req.params;
  console.log(obj);
  //执行SQL 命令，查询编号对应的员工
  pool.query('select * from new_details where new_id=?', [obj.new_id], (err, r) => {
    if (err) {
      next(err);
      return;
    }
    console.log(r);
    //结果是数组，如果是空数组，说明用户不存在，否则存在
    if (r.length === 0) {
      res.send({
        code: 500,
        msg: '没有此演出'
      });
    } else {
      res.send({
        code: 200,
        msg: '查询成功',
        data: r
      });
    }
  });
});



//查友圈接口#################
// 删除信息接口(delete /编号)
//接口地址：http://127.0.0.1:3000/v1/admin/bss/5
//请求方式：delete
router.delete("/bss/:ring_id", (req, res, next) => {
  var obj = req.params;
  console.log(obj);
  pool.query("delete from tea_ring where ring_id=? ", [obj.ring_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    console.log(result);
    if (result.affectedRows === 0) {
      res.send({
        code: 500,
        msg: '删除失败'
      });
    } else {
      res.send({
        code: 200,
        msg: '删除成功'
      });
    }
  });
});






// 茶友圈分页列表接口
//接口地址：http://127.0.0.1:3000/v1/admin/listsbqs?ring_sid=1&page=1
//请求方式：get
// 获取指定分类下包含文章数据的接口
router.get('/listsbqs', (req, res, next) => {
  // 获取客户端传递的cid参数
  pool.query('select ring_id,user_id,user_name,ring_details,ring_prise,ring_pic from lscg_users as u inner join tea_ring as t on u.user_id=t.user_sid group by ring_id order by ring_id desc', (err, data) => {
    if (err) {
      next(err)
      return
    }
    if (!data.length) {
      res.send({ code: 505, msg: '查询失败' })
    } else {
      res.send({ code: 200, msg: '查询成功', data: data })
    }
  })
});





//修改参考模板######################################################
//修改信息接口(put /)
//接口地址：http://127.0.0.1:3000/v1/admin/
//请求方式：put
router.put("/put", (req, res, next) => {
  var obj = req.body;
  console.log(obj);

  pool.query("update products set? where u_id=?", [obj, obj.u_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.affectedRows == 0) {
      res.send({ code: 500, msg: '修改失败' });
    } else {
      res.send({ code: 200, msg: '修改成功' });
    }
  });
});

// 用户列表分页查询
//http://127.0.0.1：3000/v1/admin/list
router.get('/list', (req, res, next) => {
  var page = req.query.pno ? req.query.pno : 1 //pno 客户端输入想查询第几页
  var sl = req.query.count ? req.query.count : 4 // count 客户端想查询的个数
  var shw = (page - 1) * sl // 运算得到limit需要的数
  var pages; // 声明变量用于保存 数据表一共的数
  let sq = 'select count(user_id) as c from lscg_users'
  pool.query(sq, (err, r) => {
    if (err) throw err
    pages = r[0].c
    let zys = Math.ceil(pages / sl) //得到总页数
    pool.query(`select * from lscg_users limit ${shw},${sl}`, (err, data) => {
      if (err) {
        next(err)
        return;
      }
      if (data.length > 0) {
        res.send({ code: 200, msg: '查询成功', zys: zys, zsl: pages, data: data })
      } else {
        res.send({ code: 505, msg: '查询失败' })
      }
    })
  })
})


//最后一步，导出（暴露）路由对象


module.exports = router;