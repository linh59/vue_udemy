import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import stocks from './modules/stocks'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    counter,
    stocks
  }
})