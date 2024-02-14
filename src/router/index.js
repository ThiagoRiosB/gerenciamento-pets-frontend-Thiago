import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ListPets from '../views/ListPets.vue'
import FormPet from '../views/FormPet.vue'
import Login from '../views/Login.vue'
import ListProfissionals from '../views/ListProfissionals.vue'
import FormUser from '../views/FormUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/pets/editar/:id',
      name: 'FormPetEdit',
      component: FormPet
    },
    {
      path: '/pets/:id',
      name: 'ListPets',
      component: ListPets
    },
    {
      path: '/pets/novo',
      name: 'FormPet',
      component: FormPet
    }, 
    {
      path: '/veterinarios',
      name: 'ListProfissionals',
      component: ListProfissionals
    },
    {
      path: '/usuarios',
      name: 'FormUser',
      component: FormUser
    }
  ]
})

export default router
