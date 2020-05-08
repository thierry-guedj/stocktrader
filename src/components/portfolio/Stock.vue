<template>
  <div class="col mb-4">
    <div class="card">
        <h5 class="card-header text-white bg-info">{{ stock.name }} 
          <small>( Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small></h5>    
          <div class="card-body row row-cols-md-2">            
              <div class="pull-left">
                <input 
                  type="number" 
                  placeholder="Quantity" 
                  class="form-control form-control-sm"
                  :class="{'is-invalid': insufficientQuantity}"
                  v-model="quantity">
              </div>
              <div style="text-align:right">
                <button
                  class="btn btn-info btn-sm pull-right" 
                  @click="sellStocks" 
                  :class="{'btn-danger': insufficientQuantity}"
                  :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)">
                  {{ insufficientQuantity ? 'Not Enough Stocks' : 'Sell' }}</button>
              </div>            
          </div>
        </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      quantity: 0
    }
  },
  props: ['stock'],
  computed: {
      insufficientQuantity() {
          return this.stock.quantity < this.quantity;
      }
  },
  methods: {
      ...mapActions({
            placeSellOrder: 'sellStock'
      }),
        sellStocks() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.placeSellOrder(order);
            this.quantity = 0;
        }
  }
    
}
</script>

