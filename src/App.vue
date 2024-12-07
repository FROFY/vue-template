<script setup lang="ts">

</script>

<template>
  <div>
    Current route {{ $route.fullPath }}
  </div>
  <router-link to="/">
    Go to home
  </router-link>
  <router-link to="/about">
    Go to about
  </router-link>
  <router-view />
</template>

<style scoped>
</style>
