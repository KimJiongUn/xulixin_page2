import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'demo',
    component:()=>import('@/views/demo')
  },
  {
    path:'/upload',
    name:'upload',
    component:()=>import('@/views/upload')
  },
  {
    path:'/table',
    name:'table',
    component:()=>import('@/views/table')
  },
  {
    path:'/boxModel',
    name:'boxModel',
    component:()=>import('@/views/boxModel')
  }
]

const router = new VueRouter({
  routes
})

export default router
