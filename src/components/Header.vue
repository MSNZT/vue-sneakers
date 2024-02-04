<script setup>
defineProps({
  isOpened: Boolean,
  onClickCart: Function,
  totalPrice: Number
})
</script>

<template>
  <header class="flex justify-between px-11 py-11 border-b border-slate-300 mb-10">
    <router-link to="/" class="flex items-center gap-4">
      <img class="w-10" src="/logo.png" alt="Logo">
      <div>
        <h2 class="text-xl font-bold">VUE SNEAKERS</h2>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </router-link>

    <ul class="flex justify-between items-center gap-x-8">
      <li @click="onClickCart" class="flex items-center gap-x-2.5 cursor-pointer">
        <img src="/cart.svg" alt="Cart">
        <p class="font-semibold">{{ totalPrice }} руб.</p>
      </li>
      <li class="flex items-center gap-x-2.5 cursor-pointer">
        <router-link to="/favorites" class="flex items-center gap-1.5">
          <img src="/heart.svg" alt="Favorite">
          <p>Закладки</p>
        </router-link>
      </li>
      <li class="flex items-center gap-x-2.5 cursor-pointer">
        <img src="/profile.svg" alt="Profile">
        <p>Профиль</p>
      </li>
    </ul>
  </header>
</template>
<script setup>
</script>
