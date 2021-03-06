import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('./views/Form.vue')
      },
      {
        path: '/button',
        name: 'button',
        component: () => import('./views/Button.vue')
      },
      {
        path: '/layout',
        name: 'layout',
        component: () => import('./views/Layout.vue')
      },
      {
        path: '/select',
        name: 'select',
        component: () => import('./views/Select.vue')
      },
      {
        path: '/badge',
        name: 'badge',
        component: () => import('./views/Badge.vue')
      },
    ]
  })
  