import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth-store.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/auth',
            redirect: '/auth/login',
            component: () => import('../layouts/AuthLayout.vue'),
            meta: { guest: true },
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('../pages/LoginPage.vue')
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('../pages/RegisterPage.vue')
                }
            ]
        },
        {
            path: '/',
            component: () => import('../layouts/MainLayout.vue'),
            meta: { auth: true },
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../pages/HomePage.vue')
                }
            ]
        },
        {
            path: '/:catchAll(.*)*',
            component: () => import('../pages/ErrorNotFound.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    const protectedRoute = to.matched.some((route) => route.meta.auth)
    if (!protectedRoute) return next()

    if (authStore.loggedIn) {
        return next() 
    }

    next({ name: 'login' })
})

export default router
