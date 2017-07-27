import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Home from '@/components/Home'
import TrendsList from '@/components/TrendsList'

Vue.use(VueRouter)
Vue.use(VueResource)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'TrendsList',
      component: TrendsList
    }, {
      path: '/home',
      name: 'TrendsList',
      component: TrendsList
    }
  ]
})
