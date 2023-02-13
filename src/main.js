import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import router from './routes';
import { store } from "./store/Store"

Vue.config.productionTip = false

Vue.use(Vuesax);

import "./assets/styles/index.scss";

import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition);


// axios 
import axios from 'axios';
import VueAxios from 'vue-axios';
const axiosInstance = axios.create({
  baseURL: 'https://node-api.flipsidecrypto.com/queries',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "x-api-key": "089b070c-2f41-42b9-86f0-2c56a53e0529"
  },
  withCredentials: true,
});
Vue.use(VueAxios, axiosInstance);



// mixins 
import { flipSide } from "./mixins/flipside";
Vue.mixin(flipSide);


// filters
import { formatNumber } from "./filter/formatNumber";
import { formatDate } from "./filter/formatDate";
Vue.filter("formatNumber", formatNumber);
Vue.filter("formatDate", formatDate);


// chart compoenets 
import BarChart from './components/charts/bar.vue';
import LineChart from './components/charts/line.vue';
import SingleChart from './components/charts/single.vue';
import DoughnutChart from './components/charts/doughnut.vue';

Vue.component("BarChart", BarChart);
Vue.component("LineChart", LineChart);
Vue.component("SingleChart", SingleChart);
Vue.component("DoughnutChart", DoughnutChart);



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
