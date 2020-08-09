<template>
  <div class="contanier">
    <h4>Edit Quote</h4>
    <p>Local: {{ $route.query.local }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
  </div>
</template>

<script>

  export default {
    name: 'QuoteEditPage',
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

