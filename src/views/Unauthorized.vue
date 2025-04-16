<template>
  <div class="unauthorized">
    <h1>Brak uprawnień</h1>
    <p>Nie masz dostępu do tej strony.</p>
    <router-link to="/">Wróć do strony głównej</router-link>
  </div>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>

<style scoped>
.unauthorized {
  text-align: center;
  margin: 2rem;
}
</style>
