import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Server/HelloWorld'
import QuotePage from '@/views/quotePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/QuotePage',
      name: 'QuotePage',
      component: QuotePage
    },
  ]
})
