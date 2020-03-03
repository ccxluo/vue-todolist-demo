import Vue from 'vue';
import App from './App.vue';
import store from './store';

import {
  Button,
  ButtonGroup
} from 'element-ui';

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(ButtonGroup);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')