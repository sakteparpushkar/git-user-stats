import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersView
    },
    {
      path: '/user/:userName',
      name: 'user',
      component: () => import('../views/UserDetails.vue'),
      props: true,
    },
    { path: '/:pathMatch(.*)*', component: PageNotFound }
  ]
})

export default router
