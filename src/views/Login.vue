<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <h1 class="text-2xl font-bold text-center text-gray-800">Zaloguj się</h1>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-600 mb-1">Login</label>
          <input
              v-model="username"
              type="text"
              id="username"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Wprowadź login"
              required
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-600 mb-1">Hasło</label>
          <input
              v-model="password"
              type="password"
              id="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Wprowadź hasło"
              required
          />
        </div>

        <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Zaloguj się
        </button>
      </form>

      <p v-if="errorMessage" class="text-red-500 text-center text-sm">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { loginUser, getCurrentUser } from '../services/auth';
import { useUserStore } from '@/stores/user';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password
        };
        await loginUser(credentials);
        const user = await getCurrentUser();
        if (user) {
          const userStore = useUserStore();
          userStore.setUser(user);
          this.$router.push({ name: 'EmployeePanel' });
        } else {
          this.errorMessage = 'Nie udało się pobrać danych użytkownika.';
        }
      } catch (error) {
        this.errorMessage = "Błąd logowania. Sprawdź dane.";
        console.error("Login error:", error);
      }
    }
  }
}
</script>
