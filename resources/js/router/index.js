import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'create',
        component: () => import('../components/Create')
    },


    {
        path: '/tag',
        name: 'tag',
        component: () => import('../components/CreateTag')
    },

    {
        path: '/tasks',
        name: 'tasks',
        component: () => import('../components/Tasks')
    },
]

export default new VueRouter({
    routes
})
