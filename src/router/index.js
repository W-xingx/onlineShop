import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import First from '@/components/index/first'
import System from '@/components/index/system'
import Shopcar from '@/components/index/shopcar'
import Me from '@/components/index/me'
import Syst from '@/components/classification/syst'
import Make from '@/components/classification/make'
import Food from '@/components/classification/food'
import Mail from '@/components/classification/mail'
import Life from '@/components/classification/life'
import Register from '@/components/login/register'
import Login from '@/components/login/login'
import Prodetail from '@/components/details/prodetail'

import '../assets/css/reset.css';
import '../assets/css/index.css';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children:[
        {
          path:'/first',
          component:First,
        },
        {
          path:'/system',
          component:System,
          children:[
            {
              path:'/syst',
              component:Syst,
            },
            {
              path:'/make',
              component:Make,
            },
            {
              path:'/mail',
              component:Mail,
            },
            {
              path:'/life',
              component:Life,
            },
            {
              path:'/food',
              component:Food,
            },
            {
              path:'/',
              component:Syst,
            },
          ],
        },
        {
          path:'/shopcar',
          component:Shopcar,
        },
        {
          path:'/me',
          component:Me,
        }
      ],
    },
    {
      path:'/register',
      component:Register,
    },
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/prodetail',
      component:Prodetail,
    },
    {
      path: '*/',
      redirect: '/first',
    },
  ]
})
