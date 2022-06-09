/* #设置编码为utf8  */

set names utf8;

/* #丢弃数据库lscgDB如果存在  */

drop database if exists lscgDB;

/* #创建数据库lscgDB，同时设置字符编码为utf8 */

create database lscgDB charset=utf8;

/* #进入数据库 */

use lscgDB;



/* 主页表 */

CREATE TABLE lscg_index (
    id int(11) primary key auto_increment,
    yanyuan_id int(11) ,
    #'轮播图'
    img varchar(128) ,
    #'新闻外键'
    new_details_id int(11) ,
    #'特色茶馆外键'
    tea_ring_id int(11) ,
     #'茶友圈外键'
    show_details_id int(11) 
);
/* 插入数据 */
INSERT INTO lscg_index VALUES(
1,1,"index/...jpg",1,1,1
),(
2,1,"index/...jpg",1,1,1
);


/**特色茶馆 演出类型**/

CREATE TABLE show_family (
    fid int(11) primary key auto_increment,
    name varchar(64) NOT NULL # '演出种类'
);

/* #插入数据到演出分类表 show_family */

insert into
    show_family
values
    (1, '综艺演出'),
    (2, '相声专场'),
    (3, '京剧专场'),
    (4, '评书专场'),
    (5, '鼓曲专场'),
    (null, '儿童剧'),
    (null, '体验类');



/* 表的结构 `show_details` */

/* --演出详情 */

CREATE TABLE show_details (
    sid int(32) primary key auto_increment,
    family_id int(32) ,
    # '演出类型id',
    user_id int(11) ,
    ticket_specs_id int(11) ,
    show_title varchar(32) ,
    #'演出标题',
    show_star varchar(32) ,
    show_content varchar(1000) ,
    # '演出内容',
    show_store varchar(128),
    #'相关故事',
    show_address varchar(64) ,
    #'演出地址',
    show_sm_pic varchar(64) ,
    #'小图',
    show_lg_pic varchar(32),
    #'大图',
    show_time varchar(32),
    #'演出时间',
    show_predict varchar(32) ,
    show_surplus varchar(64) ,
    show_sold varchar(64) 
);



/* 表的结构 `ticket_specs` */

/* --演出详情 */

CREATE TABLE ticket_specs (
    sid int(11) primary key auto_increment,
    show_family_id int(11) ,
    show_id int(11) ,
    subtitle varchar(32) ,
    name varchar(32) ,
    sur varchar(64),
    price varchar(32) ,
    store varchar(64) ,
    contact varchar(64) ,
    sm_img varchar(128),
    lg_img varchar(128) ,
    big_img varchar(128) 
);
/* #插入数据到演出详情表 ticket_specs */
insert into ticket_specs values
(1,1,'你好星期六','蔡少芬/何炅/王俊凯...','北京老舍茶馆前门店(总店)','北京市西城区前门西大街正阳市场三号楼老舍茶馆','***',20220712,100,200,0),
(2,2,'你好星期六','蔡少芬/何炅/王俊凯...','北京老舍茶馆前门店(总店)','北京市西城区前门西大街正阳市场三号楼老舍茶馆','',20220712,100,200,0),
(3,3,'你好星期六','蔡少芬/何炅/王俊凯...','河南开封老舍茶馆960文化创意园','河南开封960创意园区A3、A4栋（龙亭公园广场东侧）','***',20220712,100,200,0),
(4,4,'你好星期六','蔡少芬/何炅/王俊凯...','湖南长沙黄花国际机场T2航站楼店','湖南长沙黄花国际机场T2航站楼负一楼','***',20220712,100,200,0),
(5,5,'你好星期六','蔡少芬/何炅/王俊凯...','陕西西安老舍茶馆西咸新区诗经里店','陕西省西安市长安区斗门街道沣东新城沣滨水镇诗经里19号楼','***',20220712,100,200,0),
(6,6,'你好星期六','蔡少芬/何炅/王俊凯...','山东泰安老舍茶馆老街店','泰安老街6号商业楼','***',20220712,100,200,0),
(7,7,'你好星期六','蔡少芬/何炅/王俊凯...','浙江义乌老舍茶馆店','浙江省金华市义乌市北苑街道秀禾问茶A8','***',20220712,100,200,0),



/* 表的结构 `lscg_orders` */

--订单表

CREATE TABLE lscg_orders (
    loid int(32) primary key auto_increment,
    user_id int(32) ,
    show_details_id int(32) ,
    ticket_specs_id int(32) ,
    otime varchar(32) ,
    ocount varchar(32) ,
    oprice varchar(32) 
);



/* 表的结构 `tea_ring` */

/* --茶友圈 */

CREATE TABLE tea_ring (
    rid int(11) primary key auto_increment,
    user_id int(11) ,
    photo varchar(64) ,
    #'图片地址',
    content varchar(1000) ,
    #'发布内容',
    prise varchar(32) 
    #'点赞量'
);



/* 表的结构 `ring_comment` */

/* --茶友圈评论表 */

CREATE TABLE ring_comment (
    cid int(11) primary key auto_increment,
    tea_ring_id int(11) ,
    comment_count varchar(32) 
);



/* -- 表的结构 `new_class` */

/* --茶闻资讯 */

CREATE TABLE new_class (
    cid int(32) primary key auto_increment,
    tname varchar(32) 
);



/* #插入数据到数据表 new_class */
insert into
    new_class
values
    (1, '茶文趣事'),
    (2, '建党新闻'),
    (3, '百名元首'),
    (4, '公益活动'),
    (5, '小饮茶会');




/* 表的结构 `new_details` */
/* --茶闻详情 */
CREATE TABLE new_details (
    did int(32) primary key auto_increment,
    new_class_id int(32) ,
    title varchar(64) ,
    pic varchar(128) ,
    content varchar(10000) ,
    ntime varchar(32) ,
    visits varchar(64) 
);
/* 插入数据 */
insert into
    new_class
values(
    
),();


/* 茶百科分类 */

CREATE TABLE fenlei (
    id INT(11) primary key auto_increment,
    name VARCHAR(32) 
);

/* 表的结构 `lscg_tea` */
--茶百科

CREATE TABLE lscg_tea (
    tid int(11) primary key auto_increment,
    fenlei_id INT(11) ,
    tname varchar(32) ,
    subtitle varchar(64) ,
    details varchar(128) ,
    smpic varchar(128) ,
    lgpic varchar(128) 
);


/* 表的结构 `yanyuan` */
--主页有名演员表

CREATE TABLE yanyuan (
    yid int(11) primary key auto_increment,
    yname varchar(32) ,
    title varchar(32) ,
    details varchar(1000) 
);


/* 表的结构 `admin` */
--管理员
CREATE TABLE admin (
    aid int(16) primary key auto_increment,
    aname varchar(32) ,
    apwd varchar(32) 
);