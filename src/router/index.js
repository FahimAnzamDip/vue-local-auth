import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth-store.js'
import AuthLayout from '../layouts/AuthLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ErrorNotFound from '../pages/ErrorNotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/auth',
            redirect: '/auth/login',
            component: AuthLayout,
            meta: { guest: true },
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: LoginPage
                },
                {
                    path: 'register',
                    name: 'register',
                    component: RegisterPage
                }
            ]
        },
        {
            path: '/',
            component: MainLayout,
            meta: { auth: true },
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomePage
                }
            ]
        },
        {
            path: '/:catchAll(.*)*',
            component: ErrorNotFound
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
