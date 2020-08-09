<template>
  <div class="contanier">
    <p>Start Quote</p>
    <ul class="list-group">
      <router-link 
        tag="li" 
        to="/QuotePage/1"
        class="list-group-item">Quote 1</router-link>
      <router-link 
        tag="li" 
        to="/QuotePage/2"
        class="list-group-item">Quote 2</router-link>    
    </ul>
  </div>
</template>

<script>
  import HeaderQuote from '../components/Server/HeaderQuote'
  import QuoteGrid from '../components/Server/QuoteGrid'
  import NewQuote from '../components/Server/NewQuote'

  export default {
    name: 'QuotePage',
    
    data: function() {
      return {
       
      }
    },
    methods: {

    },
    components: {
    }
  }
</script>

<style scoped>

</style>

