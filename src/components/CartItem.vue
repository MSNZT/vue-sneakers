<script setup>

  const props = defineProps({
    item: Object,
  })

  const emit = defineEmits(['onClickRemove'])
</script>

<template>
  <div class="flex items-center gap-5 p-4 border border-slate-200 rounded-2xl">
    <img class="w-16" :src="props.item.imageUrl" alt="Кроссовки">
    <div>
      <p>{{ props.item.title }}</p>
      <b>{{ props.item.price }} руб.</b>
    </div>
    <button class="w-8" @click="emit('onClickRemove')">
      <img class="max-w-none" src="/close.svg" alt="Удалить товар">
    </button>
  </div>
</template>
