<template>
 <div class="row">
  <stock 
    v-for="(stock,index) in stocks" 
    v-bind:key="index"
    :stock="stock"></stock>
  </div>
</template>

<script>
  import Stock from './Stock';
  export default {
    name: 'counter',
    data: function() {
      return {
        // stocks: [
        
        // ]
      }
    },
    methods: {
    
    },
    components: {
     Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>

<style scoped>

</style>

