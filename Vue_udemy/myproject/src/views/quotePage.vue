<template>
  <div class="contanier">
    <header-quote :quoteCount="quotes.length" :maxQuotes="maxQuotes"></header-quote>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="quoteDelete"></quote-grid>
    <div class="row">
      <div class="alert alert-primary" role="alert">
        Click on a Quote to delete it!
      </div>
    </div>
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
        quotes: [
          'quote 1'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote) {
        if(this.quotes.length >= this.maxQuotes){
          return alert('Please delete Quotes first!')
        }
        this.quotes.push(quote);
      },
      quoteDelete(index){
        this.quotes.splice(index,1);
      }
    },
    components: {
      'quote-grid': QuoteGrid,
      'new-quote': NewQuote,
      'header-quote': HeaderQuote
    }
  }
</script>

<style scoped>

</style>

