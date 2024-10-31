import './assets/main.css';

import FloatLabel from "primevue/floatlabel";

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
import Dialog from 'primevue/dialog';
import CascadeSelect from 'primevue/cascadeselect';


const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.component('pv-input-text', InputText);
app.component('pv-dropdown', Dropdown);
app.component('pv-button', Button);
app.component('pv-avatar', Avatar);
app.component('pv-card', Card);
app.component('p-dialog', Dialog);
app.component('FloatLabel', FloatLabel);
app.component('p-cascade-select', CascadeSelect);


app.use(i18n);
app.use(router);

app.mount('#app');
