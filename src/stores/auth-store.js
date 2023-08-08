import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
        user: null
    }),

    actions: {
        register(username, password, passwordConfirmation) {
            // Check if the passwords match
            if (password !== passwordConfirmation) {
                throw new Error('Passwords do not match')
            }

            // Check if the user already exists in localStorage
            const users = JSON.parse(localStorage.getItem('users')) || {}
            if (users[username]) {
                throw new Error('Username already exists')
            }

            // Add the new user to localStorage
            users[username] = { username, password }
            localStorage.setItem('users', JSON.stringify(users))
        },

        login(username, password) {
            // Check if the user exists in localStorage
            const users = JSON.parse(localStorage.getItem('users')) || {}
            const user = users[username]
            if (!user || user.password !== password) {
                throw new Error('Invalid username or password')
            }

            // Update the store state to indicate logged in
            this.loggedIn = true
            this.user = user
        },

        logout() {
            // Update the store state to indicate logged out
            this.loggedIn = false
            this.user = null
        }
    }
})
