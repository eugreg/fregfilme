import { createRouter, createWebHistory } from 'vue-router'
import BlocoCategorias from '../views/BlocoCategorias.vue'
import HomeView from '../views/HomeView.vue'
import DiretoresView from '../views/DiretoresView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/categorias',
      name: 'categoria',
      component: BlocoCategorias
    },
    {
      path: '/',
      name:'home',
      component: HomeView
    },
    {
      path: '/diretores',
      name:'diretores',
      component: DiretoresView
    }


  ]
})

export default router
