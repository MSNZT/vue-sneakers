<script setup>
  import Card from './Card.vue'

  defineProps({
    items: Array
  })

  const emit = defineEmits(['addToFavorite', 'addToCart']);
</script>

<template>
    <div style="grid-template-columns: repeat(auto-fill, 240px)"
         class="grid auto-rows-auto gap-10 mb-8" v-auto-animate
    >
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
