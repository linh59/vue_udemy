import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import stocks from './modules/stocks'
import porfolio from './modules/porfolio'

import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  modules:{
    counter,
    stocks,
    porfolio
  }
})