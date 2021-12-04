import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import { store } from './store/index'
import router from './router'
import i18n from './i18n'
import jQuery from 'jquery'
global.$ = jQuery
// Importing the global css file
import "@/styles/variablesAndGlobal.scss"
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
