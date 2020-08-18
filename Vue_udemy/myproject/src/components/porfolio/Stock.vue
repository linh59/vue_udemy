<template>
  <div class="col-lg-4 col-md-4 col-6">
      <div class="card">
        <div class="card-header">
          {{stock.name}}
          <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}} )</small>
        </div>
        <div class="card-body">
          <input 
            type="number" 
            class="form-control"
            placeholder="Quantity"
            v-model="quantity">
            <button 
              class="btn btn-success"
              @click="sellStock"
              :disabled="quantity <= 0">Sell</button>
        </div>
      </div>
     </div>
</template>

<script>
import {mapActions} from 'vuex';
  export default {
    name: 'stockporfolio',
    props:['stock'],
    data: function() {
      return {
        quantity: 0,
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock(){
         const order = {
          stockId: this.stock.id,
          stockPrices: this.stock.prices,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
        this.quantity = 0;
      }
      // sellStock:() => {
      //   console.log(this.stock.name)
      //   const order = {
      //     stockId: this.stock.name,
      //     //stockPrices: this.stock.prices,
      //     quantity: this.quantity
      //   };
      //   this.placeSellOrder(order);
      //   this.quantity = 0;
      // }
    },
    components: {
     
    }
  }
</script>

<style scoped>

</style>

