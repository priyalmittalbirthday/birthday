import Vue from 'vue';
import './plugins/vuetify';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/utils/setup';
import filters from './utils/filter';

Vue.prototype.moment = moment;
Vue.config.productionTip = false;


Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
