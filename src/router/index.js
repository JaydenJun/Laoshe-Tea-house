import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/xiaoyin",
		name: "xiaoyin",
		component: () => import("../views/xiaoyin.vue"),
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
	},

	{
		path: "/teadetails/:tea_id",
		props: true,
		name: "teadetails",
		component: () => import("../views/TeaDetails.vue"),
	},
	// 茶百科
	{
		path: "/tea",
		name: "tea",
		component: () => import("../views/Tea.vue"),
	},

	// 茶馆特色

	{
		path: "/trait",
		name: "trait",
		component: () => import("../views/Trait-index.vue"),
		// children: []
	},
	{
		path: "/taritditu",
		name: "taritditu",
		component: () => import("../views/Trait-ditu.vue"),
		// children: []
	},
	{
		path: "/traits/:id",
		name: "routeName",
		props: true,
		component: () => import("../views/tarit_item.vue"),
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
			},
			{
				path: "latest",
				name: "latest",
				component: () => import("../views/Latest.vue"),
			},
			{
				path: "week",
				name: "week",
				component: () => import("../views/Week.vue"),
			},
			{
				path: "month",
				name: "month",
				component: () => import("../views/Month.vue"),
			},
			{
				path: "play",
				name: "play",
				component: () => import("../views/Play.vue"),
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
			},
			{
				path: "history",
				component: () => import("../views/history.vue"),
			},
			{
				path: "room",
				component: () => import("../views/Room.vue"),
			},
		],
	},
	// 个人中心
	{
		path: "/personal",
		name: "Personal",
		component: () => import("../views/Personal.vue"),
		redirect: "/personal/myper",
		children: [
			{
				path: "myper", //信息
				component: () => import("../components/Myper.vue"),
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
					hide: true,
				},
				component: () => import("../admin/NewLr.vue"),
			},

			{
				path: "news",
				name: "news",
				meta: {
					hide: true,
				},
				component: () => import("../admin/News.vue"),
			},{
        path: 'shows',
        name: 'shows',
        meta: {
          hide: true
        },
        component: () => import('../admin/Shows.vue')
      },
      {
        path: 'showdet/:show_id',
        name: 'showdet',
        props: true,
        meta: {
          hide: true
        },
        component: () => import('../admin/Show_details.vue'),
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
				path: "users",
				name: "users",
				meta: {
					hide: true,
				},
				component: () => import("../admin/Users.vue"),
			}, {
        path: 'teas',
        name: 'teas',
        meta: {
          hide: true
        },
        component: () => import('../admin/Teas.vue')
      }
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
