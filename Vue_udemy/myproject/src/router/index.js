import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ServerStatus from '@/components/ServerStatus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/serverstatus',
      name: 'ServerStatus',
      component: ServerStatus
    },
  ]
})
