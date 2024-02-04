<script setup>
  import { ref } from 'vue'

  defineProps({
    onChangePage: Function,
    totalCountPages: Array
  })

  const activeIndex = ref(0);

  function onChangeActiveIndex(index) {
    activeIndex.value = index
  }
</script>

<template>
  <div>
    <ul class="flex gap-3 mb-4">
      <li
        v-for="(_, i) in totalCountPages"
        :key="i"
        @click="() => onChangePage(i + 1)"
        class="w-10 h-10"
      >
        <button
          class="w-full h-full bg-lime-200 rounded-2xl font-bold hover:bg-lime-300 hover:text-white"
          :class="{'bg-lime-400 text-white': activeIndex === i}"
          @click="onChangeActiveIndex(i)"
        >
          {{ i + 1  }}
        </button>
      </li>
    </ul>
  </div>
</template>
