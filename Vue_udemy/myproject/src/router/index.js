import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Server/HelloWorld'
import QuotePage from '@/views/quotePage'
import QuoteStartPage from '@/views/quoteStartPage'
import QuoteDetailPage from '@/views/quoteDetailPage'
import QuoteEditPage from '@/views/quoteEditPage'
import FormPage from '@/views/FormPage'
import DirectivePage from '@/views/directivePage'
import AnimationsPage from '@/views/animationsPage'
import httpPage from '@/views/httpPage'
import HeaderBar from '@/components/Shared/HeaderBar'
import vuexPage from '@/views/vuexPage'


import Home from '@/components/Home'
import Porfolio from '@/components/porfolio/Porfolio'
import Stocks from '@/components/stocks/Stocks'


import Home2 from '@/components/Home2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'HelloWorld',
      // component: HelloWorld,
      components:{
        default: HelloWorld,
        'header-top': HeaderBar
      }
    },
    {
      path: '/QuotePage',
      name: 'QuotePage',
      component: QuotePage,
      props: {name: 'hehe'},
      children: [
        {path: '', component: QuoteStartPage,},
        {path: ':id', component: QuoteDetailPage,},
        {path: ':id/edit', component: QuoteEditPage, name: 'QuoteEditPage'}
      ]
    },
    {
      path: '/FormPage/:id',
      name: 'FormPage',
      component: FormPage,
      props: true
    },
    {
      path: '/DirectivePage',
      name: 'DirectivePage',
      component: DirectivePage
    },
    {
      path: '/AnimationsPage',
      name: 'AnimationsPage',
      component: AnimationsPage
    },
    {
      path: '/httpPage',
      name: 'httpPage',
      component: httpPage
    },
    {
      path: '/vuex',
      name: 'vuexPage',
      component: vuexPage
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/porfolio',
      name: 'porfolio',
      component: Porfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    },
    {
      path: '/home2',
      name: 'home2',
      component: Home2
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})
