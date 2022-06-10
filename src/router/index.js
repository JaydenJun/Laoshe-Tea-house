import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
		path: "/zixun",
		name: "zixun",
		component: () => import("../views/ZiXun.vue"),
	},


  {
		path: "/teadetails",
		name: "teadetails",
		component: () => import("../views/TeaDetails.vue"),
	},

	{
		path: "/tea",
		name: "tea",
		component: () => import("../views/Tea.vue"),
	},
  {
    path: '/trait',
    name: 'Trait',
    component: () => import('../views/Trait.vue'),
  },
  {
    path: '/teah',
    name: 'teah',
    component: () => import('../views/TeahCilcle.vue'),
    redirect: '/teah/latest',
    children: [{
        path: 'play',
        name: 'play',
        component: () => import('../views/Play.vue'),
      },

      {
        path: 'hottest',
        name: 'hottest',
        component: () => import('../views/Hottest.vue'),
      },
      {
        path: 'latest',
        name: 'latest',
        component: () => import('../views/Latest.vue'),
      },
      {
        path: 'week',
        name: 'week',
        component: () => import('../views/Week.vue'),
      },
      {
        path: 'month',
        name: 'month',
        component: () => import('../views/Month.vue'),
      },
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/teah',
    name: 'teah',
    component: () => import('../views/TeahCilcle.vue'),
  },
  {
    path: '/culture',
    name: 'guanyushou',
    component: () => import("../views/culture.vue"),
    // component: () => import("../views/guanyushou.vue"),
    
    children: [{
      path: 'person',//信息
      component: () => import('../views/person.vue'),
    }, {
      path: 'history',
      component: () => import("../views/history.vue"),
    }, {
      path: 'room',
      component: () => import("../views/Room.vue"),
    }]
  },

  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/Personal.vue'),
    redirect: '/personal/myper',
    children: [{
      path: 'myper',//信息
      component: () => import('../components/Myper.vue'),
    },
    {
      path: 'myorder',//订单
      component: () => import('../components/Myorder.vue'),
    },
    {
      path: 'myaddress',//地址
      component: () => import('../components/Myaddress.vue'),
    },
    {
      path: 'mycollect',//收藏
      component: () => import('../components/Mycollect.vue'),
    },
    {
      path: 'myforum',//帖子
      component: () => import('../components/Myforum.vue'),
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/jc',
    name: 'jc',
    component: () => import('../components/jc.vue'),
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
