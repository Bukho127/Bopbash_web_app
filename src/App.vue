<template>
  <div id="app">
    <router-view />
    
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

#app {
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
