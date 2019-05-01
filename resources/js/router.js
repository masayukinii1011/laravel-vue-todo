import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from './components/Todos.vue'
import About from './components/About.vue'
//import Login from './components/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
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