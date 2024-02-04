<script setup>
import CardList from '@/components/CardList.vue'
import Pagination from '@/components/Pagination.vue'
import axios from 'axios'
import { inject, onMounted, reactive, ref, watch } from 'vue'

const {
  cartItems,
  removeGoodFromCart
} = inject('cart')

const items = ref([])
const totalCountPages = ref([])
const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
  page: 1
})

function onChangeSearchQuery(evt) {
  filters.searchQuery = evt.target.value
}

function onChangeSortBy(evt) {
  filters.sortBy = evt.target.value
}

const addToFavorite = async (item) => {
  try {
    const obj = {
      product_id: item.id
    }
    if (!item.isFavorite) {
      item.isFavorite = true
      const { data } = await axios.post('https://d294088f24cc4eb5.mokky.dev/favorites', obj)
      item.product_id = data.id
      // if (data) {
      // item.favorite_id = data.id
      // }
    } else {
      item.isFavorite = false
      await axios.delete(`https://d294088f24cc4eb5.mokky.dev/favorites/${item.favoriteId}`)
    }
  } catch (e) {
    console.log(e)
  }
}
const addToCart = (item) => {
  cartItems.value.push(item)
  item.isAdded = true
  localStorage.setItem('cart', JSON.stringify(item))
}

const onClickPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeGoodFromCart(item)
  }
}

function onChangePage(page) {
  filters.page = page
}

const fetchProducts = async () => {
  try {
    const params = {
      page: filters.page,
      limit: 8,
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    const { data } = await axios.get('https://d294088f24cc4eb5.mokky.dev/products', {
      params
    })
    items.value = data.items.map(item => ({
      ...item,
      isAdded: cartItems.value.some(cart => cart.id === item.id)
    }))
    if (data.meta['total_items'] > 4) {
      totalCountPages.value = new Array(data.meta['total_pages'])
    } else {
      totalCountPages.value = []
    }
  } catch (e) {
    console.log(e)
  }
}
const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://d294088f24cc4eb5.mokky.dev/favorites')
    if (favorites) {
      items.value = items.value.map((item) => {
        const favorite = favorites.find((favorite) => favorite.product_id === item.id)

        if (!favorite) {
          return item
        }

        return {
          ...item,
          isFavorite: true,
          favoriteId: favorite.id
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cartItems.value = JSON.parse(localCart) || []

  await fetchProducts()
  await fetchFavorites()

})

watch(filters, async () => {
  await fetchProducts()
  await fetchFavorites()
})
</script>

<template>
  <div class="flex justify-between mb-7">
    <h2 class="text-3xl font-bold">Все кроссовки</h2>

    <div class="flex gap-6">
      <select @change="onChangeSortBy"
              class="bg-transparent cursor-pointer px-4 rounded-2xl border-2 border-slate-100">
        <option value="title">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>

      <label class="flex gap-3 w-72 p-3 rounded-2xl border-2 border-slate-100">
        <img class="w-4 cursor-pointer" src="/search.svg" alt="Поиск">
        <input
          @input="onChangeSearchQuery"
          class="outline-none border-none w-full"
          placeholder="Поиск..."
          type="text"
        >
      </label>
    </div>
  </div>
  <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickPlus" />
  <Pagination :on-change-page="onChangePage" :total-count-pages="totalCountPages" />
</template>
