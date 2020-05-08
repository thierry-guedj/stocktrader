import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import App from './App.vue';
import { routes } from './routes';
import { store } from './store/store';

Vue.config.productionTip = false;

Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-766cf.firebaseio.com/';

const router = new VueRouter({
  routes,
  mode: 'history'
  
});

Vue.use(Vuex);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
