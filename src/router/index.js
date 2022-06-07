import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainBlogs from "../components/page/MainBlogs.vue";
import MainAbout from "@/components/page/MainAbout";
import MainBlogInfo from "@/components/page/MainBlogInfo";
import NotFound from "@/views/NotFound";
import AdminLogin from "@/components/page/AdminLogin";
import AdminBlogs from "@/components/page/AdminBlogs";
import store from "@/store/storage";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        redirect: '/home',
        mata: {
            transition: true
        },
        children: [
            {
                path: '/home',
                component: MainBlogs,
                mata: {
                    transition: true
                }
            }, {
                path: '/about',
                component: MainAbout,
                mata: {
                    transition: true
                }
            }, {
                path: '/blog',
                name: 'Blog',
                component: MainBlogInfo,
                props: route => ({id: route.query.id}),
                mata: {
                    transition: true
                }
            },
            {
                path: '/404',
                component: NotFound,
                mata: {
                    transition: true
                }
            },
            {
                path: '/login',
                component: AdminLogin,
                mata: {
                    transition: true
                }
            },
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/admin/AdminView'),//动态导入
        redirect: '/admin/blogs',
        children: [
            {
                path: 'blogs',
                component: AdminBlogs,
                mata: {
                    transition: true
                }
            }
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
        redirect: '/404',
        mata: {
            transition: true
        }
    }

]

const router = new VueRouter({
    mode: "history",
    routes
})

function isLogin(){
    let token =store.getToken()
    if (token==null||!(token instanceof String)){
        return false
    }
    return true
}
router.beforeEach((to, from, next) => {
    //登录校验
    if (to.path.startsWith("/admin")){
        if (isLogin()) {
            next({path:'/login'})
        }
    }
    if (to.path === "/login") {
        if (isLogin()) {
            next({path:"/admin"})
        }
    }
    next();
})
export default router
