<script setup>
import Card from './Card.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>

<style>
.items-list {
  @apply grid grid-cols-4 gap-5 mb-5 max-xl:grid-cols-3 max-lg:grid-cols-2 sm:grid-cols-1
}
</style>

<template>
  <div class="items-list" v-auto-animate>
    <Card
      v-for="item in items"
      :v-key="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
    />
  </div>
</template>
