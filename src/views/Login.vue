<template>
  <div>
    <h1>Logowanie</h1>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Login" required />
      <input v-model="password" type="password" placeholder="Hasło" required />
      <button type="submit">Zaloguj się</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { loginUser, getCurrentUser } from '../services/auth';

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
