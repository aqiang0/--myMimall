import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/Home/home.vue')
const Category = () => import('views/Category/category.vue')
const Cart = () => import('views/Cart/cart.vue')
const User = () => import('views/User/user.vue')

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/user',
        component:User
    },

]

const router = new VueRouter({
    routes
})

export default router