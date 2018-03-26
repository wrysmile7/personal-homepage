import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Index from '@/pc/Index'
import MobileIndex from '@/mobile/MobileIndex'

Vue.use(Router)
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/pc/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/mobile/index',
      name: 'MobileIndex',
      component: MobileIndex
    }
  ]
})
