<script setup lang="ts">
import {provide, ref} from 'vue';
import MyButton from "../components/MyButton.vue";
// import AboutPage from "../components/AboutPage.vue";

const count = ref(123);

const changeCount = () => {
  count.value++;
}

provide("count", {
  count,
  changeCount,
});

</script>

<template>
  <div @click="count += 2">
    Provide: {{ count }}
  </div>
  <!--  <about-page my-name="FROFY" v-model:counter.capitalize="count" />-->
  <my-button />
</template>


<style scoped>

</style>