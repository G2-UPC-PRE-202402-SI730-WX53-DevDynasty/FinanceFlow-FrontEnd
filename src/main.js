import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {PrimeVue} from "@primevue/core";
import i18n from "@/i18n.js";
import router from './routes/index.js';
import InputText from "primevue/inputtext";

import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
import Avatar from 'primevue/avatar';

const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.component('p-input-text', InputText);
app.component('p-dropdown', Dropdown);
app.component('p-button', Button);
app.component('p-card', Card);
app.component('p-avatar', Avatar);

app.use(i18n);

app.use(router);

app.mount('#app');
