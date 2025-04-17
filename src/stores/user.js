// src/stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    actions: {
        setUser(user) {
            this.user = user;
        },
        clearUser() {
            this.user = null;
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        isAdmin: (state) => state.user?.roles?.includes('ROLE_ADMIN')
    }
});
