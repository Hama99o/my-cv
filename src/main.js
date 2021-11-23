import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
