<template>
  <h1>{{ name }}</h1>

  <div>
    <button class="font-bold" type="button">
      count is {{ name }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
    >
      create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
    >
      Vue Docs Scaling up Guide
    </a>.
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("FROFY");

defineProps(
  {
    mainMessage: {
      type: String,
      default: "FROFY"
    }
  }
)

</script>

<style scoped>
</style>
