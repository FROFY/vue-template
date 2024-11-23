<script setup lang="ts">
import {computed, ref} from 'vue';

const name = ref('AboutPage');

const isMe = computed(() => {
  return name.value === 'Me';
})

</script>

<template>
  <div>{{ isMe }}</div>
</template>

<style scoped>

</style>