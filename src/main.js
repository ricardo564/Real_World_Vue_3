import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/nova-vue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'nprogress/nprogress.css'

const GStore = reactive({ flashMessage: ''})

createApp(App)
  .use(store)
  .use(router)
  .provide('GStore', GStore)
  .use(PrimeVue, { ripple: true })
  .mount('#app')
