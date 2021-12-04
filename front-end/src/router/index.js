import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Request from '../views/Request.vue'
import Edit from '../views/Edit.vue'
import Incomplete from '../views/Incomplete.vue'
import Doing from '../views/Doing.vue'
import Completed from '../views/Completed.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/request',
    name: 'request',
    component: Request
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/incomplete',
    name: 'incomplete',
    component: Incomplete
  },
  {
    path: '/doing',
    name: 'doing',
    component: Doing
  },
  {
    path: '/completed',
    name: 'completed',
    component: Completed
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
