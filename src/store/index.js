import Vue from 'vue'
import Vuex from 'vuex'
// 创建一个新的 store 实例


Vue.use(Vuex)
const store = new Vuex.Store({
    state () {
        return {
            count: 0,
            nightState:false,
            Blogs:[],
            blog:Object,
            token:''
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        nightBtn(){
            this.state.nightState = !this.state.nightState;
        },
        saveAllBlog(state,blogs){
            state.Blogs=blogs
        },
        setToken(state,token) {
            localStorage.setItem("token",JSON.stringify(token))
        }

    },
    actions:{

    }
})

export  default  store