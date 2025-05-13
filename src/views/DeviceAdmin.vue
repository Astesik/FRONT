<script setup>
import { ref, onMounted } from 'vue';
import { getDevices } from '@/services/deviceService'; // zamiast carService

import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const devices = ref([]);

function safe(value) {
  return value ?? '—';
}

const loadDevices = async () => {
  console.log("Ładowanie urządzeń...");
  devices.value = await getDevices();
  console.log("Urządzenia:", devices.value);
};

onMounted(loadDevices);
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Lista urządzeń</h2>

    <DataTable :value="devices" dataKey="id" class="w-full">
      <Column header="Nazwa">
        <template #body="{ data }">
          {{ safe(data.deviceName) }}
        </template>
      </Column>
      <Column header="Numer seryjny">
        <template #body="{ data }">
          {{ safe(data.serialNumber) }}
        </template>
      </Column>
      <Column header="Typ">
        <template #body="{ data }">
          {{ safe(data.type) }}
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          {{ safe(data.status) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>
