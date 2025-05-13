<template>
  <aside class="w-64 bg-white shadow-md flex flex-col top-0 left-0 bottom-0 absolute h-full">
    <div class="p-4 border-b text-lg font-semibold text-blue-600">
      Admin Panel
    </div>

    <nav class="flex-1 overflow-y-auto">
      <ul class="space-y-1 p-4">
        <li>
          <router-link
              to="#"
              class="flex items-center p-2 rounded hover:bg-blue-100 text-gray-700 transition"
          >
            <i class="pi pi-home mr-2" />
            Panel
          </router-link>
        </li>
        <li>
          <router-link
              to="/devices"
              class="flex items-center p-2 rounded hover:bg-blue-100 text-gray-700 transition"
          >
            <i class="pi pi-users mr-2" />
            Samochody
          </router-link>
        </li>
        <li>
          <router-link
              to="#"
              class="flex items-center p-2 rounded hover:bg-blue-100 text-gray-700 transition"
          >
            <i class="pi pi-cog mr-2" />
            Rezerwacje
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();
const user = computed(() => userStore.user);
</script>
