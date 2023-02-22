import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

new Vue({
  VueRouter,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueRouter);
import Page1 from './pages/page-1.vue'
import Page2 from './pages/page-2.vue'

const routes =[
  {
    path:'/1',
    component: Page1,
  },{
    path:'/2',
    component: Page2,
  }
];
const router = new VueRouter({
  routes
});