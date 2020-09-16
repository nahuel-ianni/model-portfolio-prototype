import Vue from 'vue';
import Router from 'vue-router';
import { About, Contact, Home, PageNotFound, Portfolio } from '../pages';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    { path: '/', component: Home, },
    { path: '/about', component: About, },
    { path: '/contact', component: Contact, },
    { path: '/portfolio', component: Portfolio, },
    { path: '*', component: PageNotFound }
  ],
});