<script lang="ts">
import {defineComponent} from 'vue'
import AboutPage from "../components/AboutPage.vue";

export default defineComponent({
  name: "AboutView",
  components: {AboutPage},
  data() {
    return {
      currentRoute: ""
    }
  }
})
</script>

<template>
  <about-page />
</template>


<style scoped>

</style>