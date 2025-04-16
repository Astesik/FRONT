<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/employee-panel">Panel Pracowników</router-link>
        <router-link to="/login">Logowanie</router-link>
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
export default {
  name: 'App'
}
</script>

<style>
</style>
