/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import axios from 'axios'
//import VueRouter from 'vue-router'
//import Example from './components/Example.vue'

require('./bootstrap')

//Vue.use(VueRouter)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

/*
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Example },
        {
            path: '/user', component: User, children: [
                { path: '', component: UserHome },
                { path: 'profile', component: UserProfile },
                { path: 'posts', component: UserPosts }
            ]
        }
    ]
})
*/

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    //router,
    el: '#app',
    data: {
        new_todo: '',
        todos: []
    },
    methods: {

        fetchTodos: function () {
            axios.get('/api/get').then((res) => {
                this.todos = res.data
            })
        },

        addTodo: function () {
            axios.post('/api/add', {
                title: this.new_todo
            }).then((res) => {
                this.todos = res.data
                this.new_todo = ''
            })
        },

        deleteTodo: function (task_id) {
            axios.post('/api/del', {
                id: task_id
            }).then((res) => {
                this.todos = res.data
            })
        }
    },
    created() {
        this.fetchTodos()
    },
});
