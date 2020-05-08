<template>
    <div class="row row-cols-1 row-cols-md-3">
        <app-stock 
            v-for="stock in stocks" 
            :key="stock.id"
            :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {   
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    },
    components: {
        appStock: Stock
    }
    
}
</script>