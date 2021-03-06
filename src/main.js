import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Meta from 'vue-meta';
Vue.use(Meta);

require("./assets/css/bootstrap.min.css");
require("./assets/css/font-awesome.min.css");

Vue.config.productionTip = false

import VueAnalytics from 'vue-analytics'
import './registerServiceWorker'


Vue.use(VueRouter)
const routes = [
    { path: '/:county', component: App }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

Vue.use(VueAnalytics, {
    id: 'UA-161455753-1',
    router
})

window.myVueComponent = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')