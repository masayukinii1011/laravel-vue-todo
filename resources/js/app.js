/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Todos from './components/Todos.vue'
import About from './components/About.vue'
//import Login from './components/Login.vue'

Vue.use(VueRouter)

require('./bootstrap')

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Todos },
        { path: '/about', component: About },
        //{ path: '/login', component: Login },
        { path: '*', component: Todos },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

const app = new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App },
})