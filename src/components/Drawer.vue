<script setup>
import DrawerHeader from '@/components/DrawerHeader.vue'
import CartItemList from '@/components/CartItemList.vue'
import InfoBlock from '@/components/InfoBlock.vue'

defineProps({
  items: Array,
  totalPrice: Number,
  vatPrice: Number
})

const emit = defineEmits(['onClose'])

</script>

<template>
  <div @click="emit('onClose')" class="fixed top-0 left-0 w-full h-full bg-black
  bg-opacity-60 z-10 cursor-pointer">
    <div @click="(e) => e.stopPropagation()"
         class="flex flex-col fixed right-0 top-0 h-full bg-white w-96 p-7 z-20 cursor-auto">
      <DrawerHeader />
      <div v-if="items.length" class="flex flex-col flex-1">
        <CartItemList />
        <div class="flex flex-col gap-4 mt-auto">
          <div class="flex gap-1.5">
            <p>Итого:</p>
            <div class="flex-1 border-dashed border-b-2"></div>
            <b>{{ totalPrice }} руб.</b>
          </div>
          <div class="flex gap-1.5 mb-4">
            <p>Налог 5%:</p>
            <div class="flex-1 border-dashed border-b-2"></div>
            <b>{{ vatPrice }} руб.</b>
          </div>
          <button class="flex justify-center items-center gap-3 w-full bg-lime-500 rounded-2xl
         text-white py-4 font-semibold hover:shadow-lg">
            <p class="text-center">Оформить заказ</p>
            <img src="/arrow-next.svg" alt="">
          </button>
        </div>
      </div>
      <InfoBlock v-else />
    </div>
  </div>
</template>
<script setup>
</script>
