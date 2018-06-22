// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import home from './components/home.vue'
import page1 from './components/page1.vue'
import page2 from './components/page2.vue'
import page3 from './components/page3.vue'
// import router from './router'
import Router from 'vue-router'

Vue.config.productionTip = false

Vue.use(Router)

var routes = [{
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/page1',
    component: page1
  },
  {
    path: '/page2',
    component: page2
  },
  {
    path: '/page3',
    component: page3
  },
]

var router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
