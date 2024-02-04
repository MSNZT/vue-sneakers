<script setup>
  import { inject } from 'vue'

  const {onCloseDrawer} = inject('cart');
</script>

<template>
  <div class="flex flex-col justify-center items-center flex-1">
    <img class="w-28 h-28 mb-5" src="/package-icon.png" alt="Корзина пуста">
    <h3 class="text-2xl font-semibold mb-2.5">Корзина пустая</h3>
    <p class="text-slate-400 mb-10 text-center">Добавьте хотя бы одну пару кроссовок, чтобы сделать
      заказ.</p>
    <button
      @click="onCloseDrawer"
      class="flex justify-center items-center gap-3 w-full bg-lime-500 rounded-2xl
         text-white py-4 font-semibold hover:shadow-lg"
    >
      <img class="rotate-180" src="/arrow-next.svg" alt="">
      <p class="text-center">Вернуться назад</p>
    </button>
  </div>
</template>
