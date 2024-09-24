import './assets/main.css'
import Card from 'primevue/card';
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";

import { createApp } from 'vue'
import App from './App.vue'
import {PrimeVue} from "@primevue/core";
import i18n from "@/i18n.js";

const app = createApp(App);

app.use(PrimeVue, {ripple: true});
// eslint-disable-next-line vue/multi-word-component-names
app.component('Card', Card);
app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.use(i18n);

app.mount('#app');
