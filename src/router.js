import Vue from 'vue';
import Router from 'vue-router';
import publishArticle from '@/pages/publishArticle.vue';
import publishColletion from '@/pages/publishColletion.vue';
import manage from '@/pages/manage.vue';

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

		{ path: '/publishArticle', component: publishArticle },
		{ path: '/publishColletion', component: publishColletion },
		{ path: '/manage', component: manage}
	]
})