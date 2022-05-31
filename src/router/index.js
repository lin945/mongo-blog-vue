import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainBlogs from "../components/page/MainBlogs.vue";
import MainAbout from "@/components/page/MainAbout";
import MainBlogInfo from "@/components/page/MainBlogInfo";
import NotFound from "@/views/NotFound";
import AdminView from "@/views/admin/AdminView";
import AdminLogin from "@/components/page/AdminLogin";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: MainBlogs,
            }, {
                path: '/about',
                component: MainAbout,
            }, {
                path: '/blog',
                name: 'Blog',
                component: MainBlogInfo,
                props: route => ({ id: route.query.id }),
                meta:{
                    keepAlive:false
                }
            },
            {
                path: '/404',
                component: NotFound
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminView,
        redirect: '/login',
        children: [
            {
                path: '/login',
                component: AdminLogin,
            }
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
        redirect: '/404'
    }

]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
