import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Router.beforeEach((to, from, next)=>{
//   // to要跳转到的路径
//   // from从哪个路径来
//   // next往下执行的回调
//   // 在localStorage中获取token
//   let token = localStorage.getItem('isLogin')
//   // 判断该页面是否需要登录
//   if(to.meta.auth){
//     // 如果token存在直接跳转
//     if(token){
//       next()
//     }else{
//       // 否则跳转到login登录页面
//       next({
//         path:'/',
//         // 跳转时传递参数到登录页面，以便登录后可以跳转到对应页面
//         query:{
//           redirect: to.fullPath
//         }
//       })
//     }
//   }else{
//     // 如果不需要登录，则直接跳转到对应页面
//     next()
//   }
// })

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login/Login.vue')
    },
    {
      path: '/Main',
      name: 'Main',
      component: () => import('./views/Menu/Layout.vue'),
      meta:{
        auth:false
      }
    },
    {
      path: '/about',
      name: 'about',
      //路由代码分离
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Login/Signup.vue')
    },
    {
      path: '/Menu/Layout',
      name: 'layout',
      component: () => import('./views/Menu/Layout')
    },
  ]
})

