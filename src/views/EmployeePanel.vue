<template>
  <div>
    <h1>Panel Pracowników</h1>
    <p>Witaj, {{ user.username }}!</p>

    <div v-if="user.roles.includes('ROLE_ADMIN')">
      <h2>Panel Administratora</h2>
      <ul>
        <li><router-link to="/cars">Zarządzaj samochodami</router-link></li>
        <li><router-link to="/users">Zarządzaj użytkownikami</router-link></li>
      </ul>
    </div>

    <div v-else-if="user.roles.includes('ROLE_SERVICE')">
      <h2>Panel Serwisowy</h2>
      <ul>
        <li><router-link to="/maintenance">Przegląd pojazdów</router-link></li>
      </ul>
    </div>

    <div v-else>
      <p>Brak uprawnień do dostępu do tego panelu.</p>
    </div>
  </div>
</template>

<script>
import { getCurrentUser } from '../services/auth';

export default {
  name: "EmployeePanel",
  data() {
    return {
      user: {
        username: '',
        roles: []
      }
    }
  },
  async mounted() {
    const currentUser = await getCurrentUser();
    if (currentUser) {
      console.log(currentUser);
      this.user = currentUser;
    }
  }
}
</script>
