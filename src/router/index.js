import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Ktqd from '@/components/Ktqd'
import Ping from '@/components/Ping'
import Qdxs from '@/components/qdxs'
import Login from '@/components/login'
import Home from '@/components/home'
import Spring from '@/components/spring'
import Charts from '@/components/charts'
import Ssqd from '@/components/ssqd'
import Xwqd from '@/components/xwqd'
import AddStudents from '@/components/addStudents'
import AddCourse from '@/components/addCourse'
import Qdxsss from '@/components/qdxsss'
import Qdxsxw from '@/components/qdxsxw'
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
          path: '/ssqd',
          name: 'ssqd',
          component: Ssqd
        },
        {
          path: '/xwqd',
          name: 'xwqd',
          component: Xwqd
        },
        {
          path: '/qdxs',
          name: 'qdxs',
          component: Qdxs
        },
        {
          path: '/qdxsss',
          name: 'qdxsss',
          component: Qdxsss
        },
        {
          path: '/qdxsxw',
          name: 'qdxsxw',
          component: Qdxsxw
        },
        {
          path: '/addstu',
          name: 'addstu',
          component: AddStudents
        },
        {
          path: '/addcourse',
          name: 'addcourse',
          component: AddCourse
        }
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
    {
      path: '/charts',
      name: 'charts',
      component: Charts

    }

  ]
})
