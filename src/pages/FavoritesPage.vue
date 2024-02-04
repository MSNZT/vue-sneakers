<script setup>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'

  import CardList from '@/components/CardList.vue'

  const favoriteItems = ref([]);
  const fetchFavoriteItems = async () => {
    try {
      const {data} = await axios.get('https://d294088f24cc4eb5.mokky.dev/favorites?_relations=products');
      if (data) {
        favoriteItems.value = data.map(obj => obj.product);
      }
    } catch (e) {
      console.log(e)
    }
  }

  onMounted(async () => {
    await fetchFavoriteItems()
  })
</script>


<template>
  <h2 class="text-3xl font-bold mb-5">Закладки</h2>

  <CardList :items="favoriteItems"/>
</template>
