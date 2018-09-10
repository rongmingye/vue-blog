import Vue from 'vue';
import Router from 'vue-router';

import home from './pages/home.vue';
import talk from './pages/talk.vue';
import colletion from './pages/colletion.vue';
import archive from './pages/archive.vue';
import about from './pages/about.vue';
import detial from './pages/detial.vue';

import publishArticle from './pages/publishArticle.vue';
import publishColletion from './pages/publishColletion.vue';
import manage from './pages/manage.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{path: '/', redirect: "/home"},
		{path: '/home', component: home},
		{path: '/talk', component: talk},
		{path: '/colletion', component: colletion},
		{path: '/archive', component: archive},
		{path: '/about', component: about},
		{path: '/detial/:id', component: detial},

		{path: '/publishArticle', component: publishArticle},
		{path: '/publishColletion', component: publishColletion},
		{path: '/manage', component: manage}
	]
})