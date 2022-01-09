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
    component: () => import( /* webpackChunkName: "subway" */ '../views/NewsCenter.vue'),
    children: [{
      path: 'category/:category/total/:total/page/:page',
      component: () => import( /* webpackChunkName: "subway" */ '../components/SubNewsShow.vue'),
    }, {
      path: 'poem/:poem',
      component: () => import( /* webpackChunkName: "subway" */ '../components/SubPoem.vue'),
    }]
  },
  {
    path: '/passengerService',
    name: 'PassengerService',
    component: () => import( /* webpackChunkName: "subway" */ '../views/PassengerService.vue')
  },
  {
    path: '/subwayCulture',
    name: 'SubwayCulture',
    component: () => import( /* webpackChunkName: "subway" */ '../views/SubwayCulture.vue')
  },
  {
    path: '/subwayTour',
    name: 'SubwayTour',
    component: () => import( /* webpackChunkName: "subway" */ '../views/SubwayTour.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router