<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { getCurrentUser, logoutUser } from '@/services/auth';
import { useUserStore } from '@/stores/user';


const router = useRouter();
const userStore = useUserStore();

onMounted(async () => {
  const user = await getCurrentUser();
  if (user) {
    userStore.setUser(user);
  }
});

const logout = async () => {
  await logoutUser();
  userStore.clearUser();
  router.push('/login');
};
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
    <!-- Header -->
    <header class="bg-white shadow-md" style="z-index: 1000">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex space-x-4">
          <router-link to="/" class="text-lg font-semibold hover:text-blue-600 transition">Home</router-link>
          <router-link
              v-if="userStore.isAdmin"
              to="/employee-panel"
              class="text-lg font-semibold hover:text-blue-600 transition"
          >Panel Pracowników</router-link>
        </div>

        <div>
          <router-link
              v-if="!userStore.isLoggedIn"
              to="/login"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition"
          >Zaloguj się</router-link>

          <button
              v-else
              @click="logout"
              class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition"
          >Wyloguj</button>
        </div>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-grow container relative">
      <router-view />
    </main>

  </div>
</template>
