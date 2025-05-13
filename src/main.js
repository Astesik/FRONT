// main.js
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './assets/tailwind.css';
import 'primeicons/primeicons.css';
import './assets/main.css';

import '@coreui/coreui/dist/css/coreui.min.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .mount('#app');