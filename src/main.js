// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './assets/tailwind.css';
import PrimeVue from 'primevue/config';

createApp(App)
    .use(router)
    .use(createPinia())
    .use(PrimeVue, {
        theme: 'none'
    })
    .mount('#app');