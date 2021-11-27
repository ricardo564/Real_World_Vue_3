import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'
import About from '../views/About.vue'
import ErrorDisplay from '../views/ErrorDisplay.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    prop: true,
    component: ErrorDisplay,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
