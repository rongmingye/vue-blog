import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'hash',
	routes: [
		{ path: '/', redirect: "/home" },
		{ path: '/home', component: () => import('@/pages/home/home.vue') },
		{ path: '/talk', component: () => import('@/pages/talk/talk.vue') },
		{ path: '/colletion', component: () => import('@/pages/colletion/colletion.vue') },
		{ path: '/archive', component: () => import('@/pages/archive/archive.vue') },
		{ path: '/about', component: () => import('@/pages/about/about.vue') },
		{ path: '/detail/:id', component: () => import('@/pages/detail/detail.vue') },

		{ path: '/publishArticle', component: import('@/pages/manage/publishArticle.vue') },
		{ path: '/publishColletion', component: import('@/pages/manage/publishColletion.vue') },
		{ path: '/manage', component: import('@/pages/manage/manage.vue')}
	]
})