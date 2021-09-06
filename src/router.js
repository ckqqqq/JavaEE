import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)
//default router
//警告，路径是大小写相关的
const routes= [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta:{
        auth:false
      },
      children:[
        //  注意这里是空
        {
          path:'',
          component:()=>import('@/views/Menu/ScoreQuery')
        },
        {
          path:'SchoolPrediction',
          component:()=>import('@/views/Menu/SchoolPrediction')
        },
        {
          path:'ScoreEstimation',
          component:()=>import('@/views/Menu/ScoreEstimation')
        },
        {
          path:'SchoolInformation',
          component:()=>import('@/views/Menu/SchoolInformation')
        },
        {
          path:'DatabaseManagement',
          component:()=>import('@/views/Menu/DatabaseManagement')
        },

        {
          path:'AccountInformation',
          component:()=>import('@/views/Menu/AccountInformation')
        },
        {
          path:'/adminTable',
          name:'adminTable',
          component:()=>import('@/dataPackage/adminTable')
        },
        {
          path:'/teacherTable',
          name:'teacherTable',
          component:()=>import('@/dataPackage/teacherTable')
        },
        {
          path:'/universityTable',
          name:'universityTable',
          component:()=>import('@/dataPackage/universityTable')
        },
        {
          path:'/TestPage',
          name:"TestPage",
          component:()=>import('./views/Menu/TestPage')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/Login')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Login/Signup.vue')
    },
    {
      path: '/about',
      name: 'about',
      //路由代码分离
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //下面这个是啥？
      component: () =>
          import(/* webpackChunkName: "about" */ './views/About')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard')
    },

]
const router = new VueRouter({
  routes
})

export default router
