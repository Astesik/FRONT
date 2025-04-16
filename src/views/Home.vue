<template>
  <div class="home">
    <h1>Witamy w naszej wypożyczalni aut!</h1>
    <p>Znajdź idealny samochód na każdą okazję.</p>
    <h1 class="text-4xl text-pink-500 font-extrabold underline">Hello Tailwind 🎉</h1>

    <router-link to="/employee-panel" class="btn">Przejdź do panelu pracowników</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  margin: 2rem;
}
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>
