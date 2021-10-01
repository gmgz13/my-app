import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login/Login'
import Home from '@/views/Home/Home'
import Square from '@/views/Square/Square'
import School from '@/views/School/School'
import SingUp from "@/views/Register/register";
import Community from "@/views/Community/Community";
import Upload from "@/views/Upload/Upload";

const routes = [
  {
    path:"/",
    redirect:'/home',
    name:'home',
    component:Index,
    children:[
      {
        path:'home',
        component:  Home
      },
      {
        path: 'school',
        component: School
      },
      {
        path: 'square',
        component: Square
      },
      {
        path: 'community',
        component: Community
      },
      {
        path: 'upload',
        component: Upload
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/Register',
    name: 'register',
    component: SingUp
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
