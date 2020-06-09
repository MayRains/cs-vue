import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Ktqd from '@/components/Ktqd'
import Ping from '@/components/Ping'
import Qdxs from '@/components/qdxs'
import Login from '@/components/login'
import Home from '@/components/home'
import Spring from '@/components/spring'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      children: [{
          path: '/ktqd',
          name: 'ktqd',
          component: Ktqd
        },
        {
          path: '/qdxs',
          name: 'qdxs',
          component: Qdxs
        },
      ]
    },

    {
      path: '/spring',
      name: 'spring',
      component: Spring
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/ping',
      name: 'ping',
      component: Ping
    },

  ]
})
