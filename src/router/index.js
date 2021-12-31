import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newsCenter',
    component: () => import( /* webpackChunkName: "about" */ '../views/NewsCenter.vue'),
    children: [{
      path: 'category/:category/total/:total/page/:page',
      component: () => import( /* webpackChunkName: "about" */ '../components/SubNewsShow.vue'),
    }, {
      path: 'poem/:poem',
      component: () => import( /* webpackChunkName: "about" */ '../components/SubPoem.vue'),
    }]
  },
  {
    path: '/passengerService',
    name: 'PassengerService',
    component: () => import( /* webpackChunkName: "about" */ '../views/PassengerService.vue')
  },
  {
    path: '/subwayCulture',
    name: 'SubwayCulture',
    component: () => import( /* webpackChunkName: "about" */ '../views/SubwayCulture.vue')
  },
  {
    path: '/subwayTour',
    name: 'SubwayTour',
    component: () => import( /* webpackChunkName: "about" */ '../views/SubwayTour.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router