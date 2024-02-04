import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import FavoritesPage from '@/pages/FavoritesPage.vue'
import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/favorites', name: 'Favorites', component: FavoritesPage },
  { path: '/:notFound', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')
