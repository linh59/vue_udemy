<template>
 <div class="row">
     <div class="col-12">
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment Obj</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement Obj</button>
     </div>
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex';

  export default {
    name: 'counter',
    data: function() {
      return {

      }
    },
    methods: {
      // ...mapMutations([
      //   'increment',
      //   'decrement'
      // ]),   
      ...mapActions([
        'increment',
        'decrement',
        'asyncIncrement',
        'asyncDecrement'
      ]),
      // increment(by) {
      //   this.$store.dispatch('increment', by);
      // } 
    },
    components: {
     
    },
  }
</script>

<style scoped>

</style>

