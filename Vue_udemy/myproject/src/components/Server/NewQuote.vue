<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <label for="Quote"></label>
      <textarea v-model="quote" class="form-control" name="" id="" cols="30" rows="10"></textarea>
      <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'NewQuote',
    data: function() {
      return {
        quote: ''
      }
    },
    methods: {
      createNew(){
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
</script>

<style scoped>

</style>

