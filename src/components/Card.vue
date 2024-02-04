<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  price: Number,
  imageUrl: String,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})

</script>

<template>
  <div class="relative flex flex-col w-full bg-white border
  border-slate-100 rounded-3xl p-8 hover:shadow-lg hover:-translate-y-2 cursor-pointer">
    <button @click="onClickFavorite">
      <img
        class="absolute"
        :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
        alt="Like"
      >
    </button>
    <img
      class="mb-3.5"
      :src="imageUrl"
      alt="{{ title }}"
    >
    <p class="mb-3.5 mt-auto">{{ title }}</p>
    <div class="flex justify-between items-center">
      <div>
        <p class="text-slate-300">Цена:</p>
        <b>{{ price }} руб.</b>
      </div>
      <button @click="onClickAdd">
        <img :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="">
      </button>
    </div>
  </div>
</template>
