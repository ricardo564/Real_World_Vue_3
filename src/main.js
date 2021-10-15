import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import "primeflex/primeflex.css";

import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css"//core css
import "primeicons/primeicons.css" //icons
import Button from 'primevue/button';

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(Button)
    .mount("#app");
