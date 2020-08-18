<template>
 <div class="row">
     <div class="col-12">
       <h6>Click on 'End day' to begin a New Day!</h6>
       <p>Your Funds: {{funds}}</p>
     </div>
  </div>
</template>

<script>

  export default {
    name: 'counter',
    data: function() {
      return {

      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
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

