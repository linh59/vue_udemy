//import stocks from '../../data/stocks';
const state = {
  funds: 1000,
  stocks: []
};

const getters = {
  stockPofolio: (state,getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: stock.prices
      }
    });
  },
  funds: (state) => {
    return state.funds;
  }
};

const mutations = {
  'BUY_STOCKS': (state, {stockId, quantity, stockPrices}) => {
    const record = state.stocks.find(element => element.id == stockId);
    if (record){
      record.quantity += quantity;
    }else{
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrices * quantity;
  },

  'SELL_STOCKS': (state, {stockId, quantity, stockPrices})  => {
    const record = state.stocks.find(element => element.id == stockId);
    if(record.quantity > quantity){
      record.quantity -= quantity;
    } else{  
      state.stocks.splice(state.stocks.indexOf(record), 1);
      console.log(state.stocks)
    }
    state.funds += stockPrices * quantity;
  },

  'SET_PORFOLIO': (state, porfolio) => {
    console.log(porfolio.stockPorfolio)
    state.funds = porfolio.funds;
    state.stocks = porfolio.stockPorfolio ? porfolio.stockPorfolio : [];
  }
};

const actions = {
  sellStock: ({commit}, order) => {
    commit('SELL_STOCKS', order);
  },
  
};
export default {
  state,
  getters,
  mutations,
  actions
}