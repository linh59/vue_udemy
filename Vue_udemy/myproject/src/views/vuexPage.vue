<template>
  <div class="contanier">
    <div class="row">
      <div class="col-12">
        <h2>Vuex</h2>
        <couter></couter>
        <result></result>
        <anotherCouter></anotherCouter>
      </div>
    </div>
  </div>
</template>

<script>
  import Couter from '../components/Server/Counter'
  import Result from '../components/Server/Result'
  import AnotherCouter from '../components/Server/AnotherCounter'

  export default {
    name: 'vuexPage',
    data: function() {
      return {

      }
    },
    methods: {

    },
    components: {
      Couter,
      Result,
      AnotherCouter
    }
  }
</script>

<style scoped>

</style>

