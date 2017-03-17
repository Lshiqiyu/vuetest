import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import progressBar from '@/components/progressBar'
import basic from '@/pages/basic'
import plan from '@/pages/plan'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/progressBar',
      name: 'progressBar',
      component: progressBar
    },
    {
      path: '/basic',
      name: 'basic',
      component: basic
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan
    }
  ]
})
