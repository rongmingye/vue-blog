import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'hash',
	routes: [
		{ 
			path: '/home',  
			component: () => import('@/pages/main.vue'), 
			children: [
				{ path: '/', redirect: '/home' },
				{ path: '/home', component: () => import('@/pages/home/home.vue') },
				{ path: '/talk', component: () => import('@/pages/talk/talk.vue') },
				{ path: '/colletion', component: () => import('@/pages/colletion/colletion.vue') },
				{ path: '/archive', component: () => import('@/pages/archive/archive.vue') },
				{ path: '/about', component: () => import('@/pages/about/about.vue') },
				{ path: '/detail/:id', component: () => import('@/pages/detail/detail.vue') },

				{ path: '/publishArticle', component: () => import('@/pages/manage/publishArticle.vue') },
				{ path: '/publishColletion', component: () => import('@/pages/manage/publishColletion.vue') },
				{ path: '/manage', component: () => import('@/pages/manage/manage.vue')},
			]	
		},
		{ 
			path: '/dialog-box',  
			component: () => import('@/pages/dialog-box/index.vue'), 
			children: [
				{ path: '/dialog-box/', redirect: '/dialog-box/demo1' },
				{ path: '/dialog-box/demo1', component: () => import('@/pages/dialog-box/demo1.vue') },
				{ path: '/dialog-box/demo2', component: () => import('@/pages/dialog-box/demo2.vue') },
				{ path: '/dialog-box/demo3', component: () => import('@/pages/dialog-box/demo3.vue') },
				{ path: '/dialog-box/manage', component: () => import('@/pages/dialog-box/manage.vue') },
			]
		}
	]
})