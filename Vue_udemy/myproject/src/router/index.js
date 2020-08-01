import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Server/HelloWorld'
import QuotePage from '@/views/quotePage'
import FormPage from '@/views/FormPage'
import DirectivePage from '@/views/directivePage'

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
    {
      path: '/FormPage',
      name: 'FormPage',
      component: FormPage
    },
    {
      path: '/DirectivePage',
      name: 'DirectivePage',
      component: DirectivePage
    },
  ]
})
