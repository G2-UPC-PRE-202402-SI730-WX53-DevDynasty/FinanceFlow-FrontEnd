import './assets/main.css'

import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";

import { createApp } from 'vue'
import App from './App.vue'
import {PrimeVue} from "@primevue/core";
import i18n from "@/i18n.js";
import router from "@/routes/index.js";
import Card from "primevue/card";

const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.component('pv-card', Card);
app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);

app.use(i18n);

app.use(router);

app.mount('#app');
