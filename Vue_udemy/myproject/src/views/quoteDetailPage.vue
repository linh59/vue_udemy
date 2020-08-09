<template>
  <div class="contanier">
    <p>Detil Quote</p>
    <p>User loaded has ID: {{$route.params.id}}</p>
    <!-- <router-link 
      tag="button" 
      :to="'/QuotePage/' + $route.params.id + '/edit'">Edit User</router-link> -->
    <router-link 
      tag="button" 
      :to="{name: 'QuoteEditPage', params: { id: $route.params.id }, query: { local: 'en', q: 100 } }"
      class="btn btn-primary">Edit User</router-link>

  </div>
</template>

<script>
  export default {
    name: 'QuoteDetailPage',
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

