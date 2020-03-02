import Vue from 'vue';
import App from './App.vue';
import store from './store';

import {
  Input
} from 'element-ui';

Vue.config.productionTip = false

Vue.use(Input);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')