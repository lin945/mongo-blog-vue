import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainBlogs from "../components/page/MainBlogs.vue";
import MainAbout from "@/components/page/MainAbout";
import MainBlogInfo from "@/components/page/MainBlogInfo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/home',
    children:[
      {
        path: '/home',
        component: MainBlogs,
      },      {
        path: '/about',
        component: MainAbout,
      },{
        path: '/blog/:id',
        name: 'Blog',
        component: MainBlogInfo
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
