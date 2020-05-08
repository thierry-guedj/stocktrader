<template>
    <div class="row row-cols-1 row-cols-md-3">
        <app-stock 
            v-for="stock in stocks" 
            :key="stock.id"
            :stock="stock"></app-stock>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

export default {   
    computed: {
        ...mapGetters({
            stocks: 'stocksPortfolio',
        })
    },
    components: {
        appStock: Stock
    }
    
}
</script>