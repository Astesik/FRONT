<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/employee-panel">Panel Pracowników</router-link>
        <router-link to="/login">Logowanie</router-link>
        <button @click="logout">Wyloguj</button>
      </nav>
    </header>


    <main>
      <router-view></router-view>
    </main>


    <footer>
      <p>&copy; 2025 Twoja Firma</p>
    </footer>
  </div>
</template>

<script>
import { logoutUser } from '@/services/auth.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const logout = async () => {
      await logoutUser();

      await router.push('/login');
    };

    return { logout };
  }
};
</script>

<style>
</style>
