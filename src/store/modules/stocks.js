import stocks from '../../data/stocks'
const state = {
    stocks: []
};


const mutations = {
    SET_STOCK(state, stocks) {
        state.stocks = stocks;
    },
    
    RANDOM_STOCK(state) {
       state.stocks.forEach(stock => {
           stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
       })
    }
};

const actions = {
    initStock: ({commit}) => {
        commit('SET_STOCK', stocks);
    },
    randomizeStock: ({commit}) => {
        commit('RANDOM_STOCK');
    },
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    }
};

const getters = {
    stocks: state => {
        return state.stocks
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
