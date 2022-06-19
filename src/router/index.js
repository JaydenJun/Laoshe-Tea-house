import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'index',
		component: Index,
		meta: {
			title: "老舍茶馆首页",
		},
	},
	{
		path: "/xiaoyin",
		name: "xiaoyin",
		component: () => import("../views/xiaoyin.vue"),
		meta: {
			title: "茶闻资讯",
		},
	},
	{
		path: "/traitdetails",
		name: "traitdetails",
		component: () => import("../views/TraitDetails.vue"),
	},
	{
		path: "/zixun",
		name: "zixun",
		component: () => import("../views/ZiXun.vue"),
		meta: {
			title: "茶闻资讯",
		},
	},

	{
		path: "/teadetails/:tea_id",
		props: true,
		name: "teadetails",
		component: () => import("../views/TeaDetails.vue"),
        meta: {
			title: "茶叶详情",
		},
	},
	// 茶百科
	{
		path: "/tea",
		name: "tea",
		component: () => import("../views/Tea.vue"),
		meta: {
			title: "茶百科",
		},
	},

	// 茶馆特色

	{
		path: "/trait",
		name: "trait",
		component: () => import("../views/Trait-index.vue"),
		meta: {
			title: "老舍茶馆特色",
		},
	},
	{
		path: "/taritditu",
		name: "taritditu",
		component: () => import("../views/Trait-ditu.vue"),
		meta: {
			title: "茶馆位置",
		},
		// children: []
	},
	{
		path: "/traits/:id",
		name: "routeName",
		props: true,
		component: () => import("../views/tarit_item.vue"),
		meta: {
			title: "特色演出详情",
		},
	},

	{
		path: "/product",
		name: "product",
		component: () => import("../views/Product.vue"),
	},
	// 茶友圈
	{
		path: "/teah",
		name: "teah",
		component: () => import("../views/TeahCilcle.vue"),
		redirect: "/teah/latest",
		
		children: [
			{
				path: "hottest",
				name: "hottest",
				component: () => import("../views/Hottest.vue"),
				meta: {
					title: "茶友圈",
				},
			},
			{
				path: "latest",
				name: "latest",
				component: () => import("../views/Latest.vue"),
				meta: {
					title: "茶友圈",
				},
			},
			{
				path: "week",
				name: "week",
				component: () => import("../views/Week.vue"),
				meta: {
					title: "茶友圈",
				},
			},
			{
				path: "month",
				name: "month",
				component: () => import("../views/Month.vue"),
				meta: {
					title: "茶友圈",
				},
			},
			{
				path: "play",
				name: "play",
				component: () => import("../views/Play.vue"),
				meta: {
					title: "茶友圈",
				},
			},
		],
	},

	//
	{
		path: "/culture",
		name: "guanyushou",
		redirect: "/culture/history",
		component: () => import("../views/culture.vue"),
		// component: () => import("../views/guanyushou.vue"),
		
		children: [
			{
				path: "person", //信息
				component: () => import("../views/person.vue"),
				meta: {
					title: "茶馆资讯",
				},
			
			},
			{
				path: "history",
				component: () => import("../views/history.vue"),
				meta: {
					title: "茶馆历史",
				},
			},
			{
				path: "room",
				component: () => import("../views/Room.vue"),
				meta: {
					title: "文化介绍",
				},
			},
		],
	},
	// 个人中心
	{
		path: "/personal",
		name: "Personal",
		props:true,
		component: () => import("../views/Personal.vue"),
		redirect: "/personal/myper",
		children: [
			{
				path: "myper", //信息
				component: () => import("../components/Myper.vue"),
				meta: {
					title: "个人信息中心",
				},
			},
			{
				path: "myorder", //订单
				component: () => import("../components/Myorder.vue"),
			},
			{
				path: "myaddress", //地址
				component: () => import("../components/Myaddress.vue"),
			},
			{
				path: "mycollect", //收藏
				component: () => import("../components/Mycollect.vue"),
			},
			{
				path: "myforum", //帖子
				component: () => import("../components/Myforum.vue"),
			},
		],
	},
	// 登录
	{
		path: "/login",
		name: "login",
		component: () => import("../views/Login.vue"),
		meta: {
			title: "登录页面",
			hide: true,
		},
	},
	// 注册
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/Register.vue"),
		meta: {
			title: "注册页面",
			hide: true,
		},
	},
	{
		path: "/jc",
		name: "jc",
		component: () => import("../components/jc.vue"),
	},
	{
		path: "/",
		name: "Index",
		component: Index,
	},

	// 管理员路由

	{
		path: "/admin",
		name: "admin",
		component: () => import("../admin/Admin.vue"),
		// redirect意味着重定向，当浏览器跳转到/components时将会自动重定向到/components/container
		redirect: "/admin/users",
		meta: {
			hide: true,
		},
		children: [
			{
				meta: {
						
					hide: true,
				},
				props: true,
				path: "newss/:new_id",
				name: "newss",
				component: () => import("../admin/NewsDetaill.vue"),
			},

			{
				path: "newlr",
				name: "newlr",
				meta: {
					title: "用户管理",
					hide: true,
				},
				component: () => import("../admin/NewLr.vue"),
			},

			{
				path: "news",
				name: "news",
				meta: {
					title: "新闻资讯",
					hide: true,
				},
				component: () => import("../admin/News.vue"),
			}, {
				path: 'shows',
				name: 'shows',
				meta: {
					title: "特色茶馆模块",
					hide: true
				},
				component: () => import('../admin/Shows.vue')
			},
      {
        path: 'showdets/:show_id',
        name: 'showdets',
        props: true,
        meta: {
          hide: true
        },
        component: () => import('../admin/Show_details.vue'),
      },
			
      {
        path: 'showdet',
        name: 'showdet',
        props: true,
        meta: {
          hide: true
        },
        component: () => import('../admin/Show_insert.vue'),
      },
			
			{
				path: 'teasdet/:tea_id',
				name: 'teasdet',
				props: true,
				meta: {
					hide: true
				},
				component: () => import('../admin/Teasdet.vue'),
			},
			{
				path: 'teasset',
				name: 'teasset',
				props: true,
				meta: {
					hide: true
				},
				component: () => import('../admin/Teas_insert.vue'),
			},
			{
				path: "users",
				name: "users",
				meta: {
					title: "用户管理",
					hide: true,
				},
				component: () => import("../admin/Users.vue"),
			},
			{
				path: "userss/:user_id",
				name: "userss",
				props:true,
				meta: {
					hide: true,
				},
				component: () => import("../admin/UserDetaill.vue"),
			},
			{
				path: 'teas',
				name: 'teas',
				meta: {
					title: "茶百科",
					hide: true
				},
				component: () => import('../admin/Teas.vue')
			},
			{
				path: 'tearing',
				props: true,
				name: 'tearing',
				meta:{
					title: "茶友圈话题",
					hide: true
				},
				component: () => import('../admin/TeaRing.vue')
			}
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});


// 全局前置守卫:
// 凡是路由的跳转操作, 都会触发守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next() //放行: 让路由继续后续工作
})


export default router;
