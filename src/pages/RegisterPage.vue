<template>
    <div class="w-[25rem] p-10 bg-slate-200 rounded-lg shadow-lg">
        <div class="mb-10">
            <h2 class="text-3xl text-center">Create an account</h2>
        </div>
        <form class="w-full" @submit.prevent="register">
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
            <div class="mb-6">
                <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Confirm password <span class="text-red-500">*</span></label
                >
                <input
                    v-model="form.passwordConfirm"
                    type="password"
                    id="password_confirmation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
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
        <div class="text-center mt-5">Already have an account? <router-link class="text-indigo-600" to="/auth/login">Sign in</router-link></div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useAuthStore } from '../stores/auth-store';

const router = useRouter()
const authStore = useAuthStore()

let form = reactive({
    email: '',
    password: '',
    passwordConfirm: ''
})

let register = () => {
    try {
        authStore.register(form.email, form.password, form.passwordConfirm)
    } catch (error) {
        Toast.fire({
            icon: 'error',
            title: error.message
        })
    }

    login()
}

let login = () => {
    authStore.login(form.email, form.password)

    if (authStore.loggedIn === true) {
        Toast.fire({
            icon: 'success',
            title: 'Logged in successfully!'
        })
        router.push('/')
    }
}
</script>
