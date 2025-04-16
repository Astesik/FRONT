<!-- components/CarCard.vue -->
<template>
  <div class="border p-4 rounded shadow">
    <img :src="car.image" alt="car" class="w-full h-48 object-cover mb-2"/>
    <h2 class="text-xl font-bold">{{ car.name }}</h2>
    <p>{{ car.pricePerDay }} zł/dzień</p>
    <router-link :to="`/car/${car.id}`" class="text-blue-500 underline">Szczegóły</router-link>
  </div>
</template>

<script>
export default {
  props: ['car']
}
</script>
