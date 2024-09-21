import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {PrimeVue} from "@primevue/core";
import i18n from "@/i18n.js";

const app = createApp(App);

app.use(PrimeVue, {ripple: true});

app.use(i18n);

app.mount('#app');
