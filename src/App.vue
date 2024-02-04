<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'

import Header from '@/components/Header.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/Drawer.vue'
import Pagination from '@/components/Pagination.vue'

const cartItems = ref([]);
const isOpened = ref(false);

const totalPrice = computed(
  () => cartItems.value.reduce((acc, item) => item.price + acc, 0)
);
const vatPrice = computed(() => Math.round((totalPrice.value / 100) * 5));

const removeGoodFromCart = (item) => {
  cartItems.value = cartItems.value.filter(({id}) => id !== item.id);
  item.isAdded = false;
  localStorage.removeItem('cart');
}

function onOpenDrawer() {
  isOpened.value = true
  document.body.style.overflowY = 'hidden'
}

function onCloseDrawer() {
  isOpened.value = false
  document.body.style.overflowY = 'auto'
}

watch(cartItems, () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value));
}, {
  deep: true
})

provide('cart', {
  onCloseDrawer,
  cartItems,
  removeGoodFromCart
})
</script>

<template>
  <Drawer
    v-if="isOpened"
    @on-close="onCloseDrawer"
    :items="cartItems"
    :totalPrice="totalPrice"
    :vatPrice="vatPrice"
  />
  <div class="bg-white w-4/5 h-full mt-14 m-auto rounded-xl shadow-xl">
    <Header
      :onClickCart="onOpenDrawer"
      :totalPrice="totalPrice"
    />
    <div class="px-10 pb-11">
      <router-view></router-view>
    </div>
  </div>
</template>
