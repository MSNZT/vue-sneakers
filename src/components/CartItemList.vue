<script setup>
  import { inject } from 'vue'

  import CartItem from '@/components/CartItem.vue'

  const {cartItems, removeGoodFromCart} = inject('cart');
</script>

<template>
  <div
    class="flex flex-col gap-5 max-h-168 mb-5"
    v-auto-animate
  >
    <CartItem
      v-for="item in cartItems"
      :key="item.id"
      :item="item"
      @on-click-remove="() => removeGoodFromCart(item)"
    />
  </div>
</template>
