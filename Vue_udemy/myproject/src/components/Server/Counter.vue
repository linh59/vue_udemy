<template>
 <div class="row">
     <div class="col-12">
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
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
    methods: {
      increment() {
        this.$store.state.counter++;
      },
      decrement() {
        this.$store.state.counter--;
      },
    },
    components: {
     
    }
  }
</script>

<style scoped>

</style>

