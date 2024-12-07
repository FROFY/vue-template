<script setup lang="ts">

import {inject} from "vue";

const { count, changeCount } = inject("count");


</script>

<template>
  <div @click="changeCount">
    Inject: {{ count }}
  </div>
  <div>
    <slot
      class="text-xl font-bold"
      name="header"
    />
  </div>
</template>

<style scoped>

</style>