<template>
    <div class="w-[25rem] p-10 bg-slate-200 rounded-lg shadow-lg">
        <div class="mb-10">
            <h2 class="text-3xl text-center">Sign In</h2>
        </div>
        <form class="w-full" @submit.prevent="login">
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your email <span class="text-red-500">*</span></label
                >
                <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                />
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your password <span class="text-red-500">*</span></label
                >
                <input
                    v-model="form.password"
                    type="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div class="flex justify-center">
                <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </div>
        </form>
        <div class="text-center mt-5">Don't have an account? <router-link class="text-indigo-600" to="/auth/register">Sign up</router-link></div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth-store'
import { reactive } from 'vue'

const router = useRouter()
const authStore = useAuthStore()

let form = reactive({
    email: '',
    password: ''
})

let login = () => {
    try {
        authStore.login(form.email, form.password)
    } catch (error) {
        Toast.fire({
            icon: 'error',
            title: error.message
        })
    }

    if (authStore.loggedIn === true) {
        Toast.fire({
            icon: 'success',
            title: 'Logged in successfully!'
        })
        router.push('/')
    }
}
</script>
