import Vue from 'vue';
import Router from 'vue-router';
import { Home, PageNotFound } from '../pages';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    { path: '/', component: Home, },
    // { path: '/about', component: About, },
    // { path: '/contact', component: Contact, },
    // { path: '/portfolio', component: Portfolio, props: { items: 12 } },
    { path: '*', component: PageNotFound }
  ],
});