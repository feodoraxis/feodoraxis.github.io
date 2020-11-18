import Vue from 'vue';
import App from './App.vue'
import SimpleVueValidator from 'simple-vue-validator'

Vue.use(SimpleVueValidator);

new Vue({
  el: "#app-root",
  render: h => h(App)
});