import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import search from '@/components/search'
import tab from '@/components/tab'
import recommend from '@/components/recommend'
import slider from '@/components/slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: recommend
    },
    {
      path: '/header',
      component: header
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/tab',
      component: tab
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/slider',
      component: slider
    }
  ]
})
