<template>   
        <nav class="navbar navbar-expand-md navbar-dark bg-dark" style="margin-bottom:20px">
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">          
                <router-link :to="{ name: 'home' }" tag="li" class="nav-item" active-class="active">
                    <a class="navbar-brand" href="#">Stock Trader</a>
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>            
                <ul class="navbar-nav mr-auto">
                    <router-link :to="{ name: 'portfolio' }" tag="li" class="nav-item" active-class="active">
                        <a class="nav-link" href="#">Portfolio <span class="sr-only">(current)</span></a>
                    </router-link>
                    <router-link :to="{ name: 'stocks' }" tag="li" class="nav-item" active-class="active">
                        <a class="nav-link" href="#">Stocks</a>
                    </router-link>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href='#' @click="endDay">End Day</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save and Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                        </div>
                    </li>
                    <strong class="navbar-text">Funds: {{ funds | currency }}</strong>                  
                </ul>             
            </div>                  
        </nav>      
</template>

<script>
import {mapActions} from 'vuex';

export default {
        computed: {            
            funds() {
                return this.$store.getters.funds;
            }
       
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStock',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stocksPortfolio,
                    stocks: this.$store.getters.stocks
                }
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();

            }
        }  
} 
</script>



