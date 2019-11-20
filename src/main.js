import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api';
import router from './plugin/router';
import VueRouter from 'vue-router';

require('src/style/main.scss')
require('./plugin/waves');

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
