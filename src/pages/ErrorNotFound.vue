<script setup></script>

<template>
    <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="text-9xl text-red-600 font-bold mb-10">404</h1>
        <h1 class="text-6xl text-gray-700 font-bold mb-10">Sorry Page Not Found!</h1>
        <router-link
            to="/"
            class="mt-10 bg-indigo-600 text-white px-5 py-3 hover:bg-indigo-700 transition-all duration-200 rounded shadow font-medium"
        >
            Go to Home
        </router-link>
    </div>
</template>
