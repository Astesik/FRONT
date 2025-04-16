<template>
  <div id="app">
    <!-- Możesz umieścić tutaj globalny header -->
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/employee-panel">Panel Pracowników</router-link>
        <router-link to="/login">Logowanie</router-link>
      </nav>
    </header>

    <!-- Miejsce, gdzie renderowane będą widoki -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Globalna stopka -->
    <footer>
      <p>&copy; 2025 Twoja Firma</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Style globalne dla całej aplikacji */
</style>
