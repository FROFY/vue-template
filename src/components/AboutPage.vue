<script setup lang="ts">
import {computed, reactive, ref, watch} from 'vue';
import { Props } from './Props.ts'

defineProps<Props>();
const [model, modifiers] = defineModel("counter", {
  set(value: string) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
});

const name = ref('AboutPage');
const flag = ref(true);
const arr = reactive([1,2,3,4,5]);
// const count = ref(arr.length);

const isMe = computed(() => {
  return name.value === 'Me';
});

const changeArr = computed(() => {
  return arr.filter((i) => i % 2 === 0);
})

watch(arr, (newValue, oldValue) => {
  console.log(`Array is changed from ${oldValue} to ${newValue}`);
}, {deep: true, immediate: true});

const pressButton = () => {
  flag.value = !flag.value;
}

</script>

<template>
  {{ myName }}
  {{ myAge }}
  инпут
  <input type="text" v-model="model" />
  <div
    class="px-5 py-5 hover:bg-gray-800 select-none"
    :class="{'border-2 border-black hover:bg-yellow-500': flag}"
    @click="pressButton"
  >
    Click me
  </div>
  <div>{{ isMe }}</div>
  <div v-for="item in changeArr" :key="item">
    {{ item }}
  </div>
  {{ arr }}
</template>

<style scoped>

</style>