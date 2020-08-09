<template>
 <div class="row">
     <div class="col-12">
       <p>Counter is : {{ doubleCounter }}</p>
       <p>Number of Clicks: {{stringCounter}}</p>
     </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'result',
    data: function() {
      return {

      }
    },
    // computed: {
    //   counter() {       
    //     // return this.$store.state.counter;
    //     return this.$store.getters.doubleCounter;
    //   },
    //   numCLicks(){
    //     return this.$store.getters.stringCounter;
    //   }
    // },
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter'
      ])
    },

    components: {
     
    }
  }
</script>

<style scoped>

</style>

