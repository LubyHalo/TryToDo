import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/Home'

Vue.use(VueRouter)
Vue.use(VueResource)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
