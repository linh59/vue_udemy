import Vue from 'vue';


export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.messages.stocks;
        const funds = data.messages.funds;
        const stockPorfolio = data.messages.stockPofolio;

        const porfolio = {
          stockPorfolio,
          funds
        };

        console.log(porfolio)

        commit('SET_STOCKS', stocks);
        commit('SET_PORFOLIO', porfolio)
      }
    })
}