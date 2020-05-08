import Home from './components/Home.vue';
//import Header from './components/Header.vue';

/* /* const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio.vue'], () => {
        resolve(require('./components/portfolio/Portfolio.vue'));
    }, 'portfolio');
};  */
/* const Stocks = resolve => {
    require.ensure(['./components/stocks/Stocks.vue'], () => {
        resolve(require('./components/stocks/Stocks.vue'));
    }, 'stocks');
}; */ 

const Portfolio = () => import(/* webpackChunkName: "portfolio" */ './components/portfolio/Portfolio.vue');
const Stocks = () => import(/* webpackChunkName: "sstocks" */ './components/stocks/Stocks.vue');

export const routes = [
    { 
        path: '', 
        name: 'home', 
        components: {
            default: Home
        }
    },
    { 
        path: '/portfolio', 
        name: 'portfolio',
        components: {
            default: Portfolio
        }
        
    },
    { 
        path: '/stocks', 
        name: 'stocks',
        components: {
            default: Stocks
        }
    },
        { path: '*', redirect: '/' }
    
]