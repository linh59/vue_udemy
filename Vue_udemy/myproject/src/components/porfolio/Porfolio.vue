<template>
  <div>
    <stock 
      v-for="(stock, index) in stocks" 
      v-bind:key="index"
      :stock="stock"></stock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock';
  export default {
    name: 'porfolio',
    data: function() {
      return {
       
      }
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPofolio',
      })
    },
    methods: {

    },
    components: {
      Stock
    }
  }
</script>

<style scoped>

</style>

