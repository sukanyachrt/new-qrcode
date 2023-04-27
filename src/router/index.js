import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import store from '../store'
//import Login from './../components/Login.vue'
import Testpost from './../components/Testpost.vue'
import Signin from './../components/Signin.vue'
import History from './../views/components/History.vue'
import Qrcode from './../views/components/Qrcode.vue'

import Testmodal from './../views/components/Testmodal.vue'
const routes = [
    {
        path: '/',
        name: 'Signin',
        component: Signin,
    },
    {
        path: '/Testpost',
        component: Testpost,
    },
    {
        path: '/Signin',
        component: Signin,
    },
   
    {
        path: '/qrcode',
        name: 'Mainpage',
        component: () => import('../layout/index.vue'),
        redirect: 'Qrcode',
        meta: {
            title: 'qrcode',
        },

        children: [
            {
                path: '/Qrcode',
                name: 'Qrcode',
                component: Qrcode,
            },
            {
                path: '/history',
                name: 'history',
                component: History,
            },
            {
                path: '/test',
                name: 'Testmodal',
                component: Testmodal,
            },
         

           
        ],
    },
     { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes,
})

router.afterEach(() => {
    if (window.innerWidth <= 1200) {
        const sidenav =
            store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

        store.commit('largeSidebar/toggleSidebarProperties')
    }
})

export default router
