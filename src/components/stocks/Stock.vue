<template>
  <div class="col mb-4">
    <div class="card">
        <h5 class="card-header text-white bg-success">{{ stock.name }} 
          <small>( Price: {{ stock.price }} )</small></h5>    
          <div class="card-body row row-cols-md-2 container-fluid">            
              <div class="pull-left">
                <input 
                  type="number" 
                  placeholder="Quantity" 
                  class="form-control form-control-sm"
                  v-model="quantity" 
                  :class="{'is-invalid': insufficientFunds}">
              </div>
              <div style="text-align:right">
                <button
                  class="btn btn-success btn-sm pull-right" 
                  @click="buyStock"                  
                  :class="{'btn-danger': insufficientFunds}"
                  :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)">
                  {{ insufficientFunds ?  'Insufficient Funds' : 'Buy' }}</button>
              </div>            
          </div>
        </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      quantity: 0
    }
  },
  props: ['stock'],
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.funds < this.quantity * this.stock.price;
    }
  },
  methods: {
      buyStock() {
        const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
    }
  }
    
}
</script>

