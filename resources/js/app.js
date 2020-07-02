import Vue from 'vue'
import router from './router/index'
import App from "./App.vue";
import 'materialize-css/dist/js/materialize.min'

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
