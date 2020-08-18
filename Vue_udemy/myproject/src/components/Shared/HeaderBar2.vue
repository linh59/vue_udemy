<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div>Funds: {{ funds }}</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
         <!-- <router-link to="/" tag="li" active-class="active"><a>Home</a></router-link> -->
        <router-link to="/home"  active-class="active" >Home</router-link>
        <router-link to="/porfolio"  active-class="active" >Porfolio</router-link>
        <router-link to="/stocks"  active-class="active" >Stocks</router-link>

      </div>
    </div>
    <button type="button" @click="savedata" class="btn btn-primary">Save data</button>
    <button type="button" @click="loaddata" class="btn btn-primary">Load data</button>

  </div>
</nav>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'HeaderBar2',
  computed: {
    funds() {
      return this.$store.getters.funds;
    }

  },
  methods: {
    ...mapActions({
      fetchData: 'loadData'
    }),
    savedata() {
      const data = {
        funds: this.$store.getters.funds,
        stockPofolio: this.$store.getters.stockPofolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loaddata() {
      this.fetchData();
    }
  }
}
</script>


