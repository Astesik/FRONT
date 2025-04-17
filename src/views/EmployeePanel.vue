<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Panel Pracowników</h1>
    <p class="mb-6">Witaj, <span class="font-semibold">{{ user.username }}</span>!</p>

    <div v-if="user.roles.includes('ROLE_ADMIN')" class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Panel Administratora</h2>
      <ul class="list-disc list-inside">
        <li><router-link class="text-blue-600 hover:underline" to="/cars">Zarządzaj samochodami</router-link></li>
        <li><router-link class="text-blue-600 hover:underline" to="/users">Zarządzaj użytkownikami</router-link></li>
      </ul>
    </div>

    <div v-else-if="user.roles.includes('ROLE_SERVICE')" class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Panel Serwisowy</h2>
      <ul class="list-disc list-inside">
        <li><router-link class="text-blue-600 hover:underline" to="/maintenance">Przegląd pojazdów</router-link></li>
      </ul>
    </div>

    <div v-else>
      <p class="text-red-500">Brak uprawnień do dostępu do tego panelu.</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();
const user = computed(() => userStore.user);
</script>
