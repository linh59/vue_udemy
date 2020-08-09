<template>
  <div class="col-lg-4 col-md-4 col-6">
      <div class="card">
        <div class="card-header">
          {{stock.name}}
          <small>(Price: {{stock.prices}} )</small>
        </div>
        <div class="card-body">
          <input 
            type="number" 
            class="form-control"
            placeholder="Quantity"
            v-model="quantity">
            <button 
              class="btn btn-success"
              @click="buyStock"
              :disabled="quantity <= 0">Buy</button>
        </div>
      </div>
     </div>
</template>

<script>

  export default {
    name: 'counter',
    props:['stock'],
    data: function() {
      return {
        quantity: 0,
      }
    },
    methods: {
     buyStock() {
       const order = {
         stockId: this.stock.id,
         stockPrices: this.stock.prices,
         quantity: this.quantity
       };
       console.log(order);
       this.quantity = 0;
     }
    },
    components: {
     
    }
  }
</script>

<style scoped>

</style>

