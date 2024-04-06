import { routes } from './routes'
import './bootstrap.js';
import { createApp } from 'vue'; 
import App from './components/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router'; 

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

app.use(VueAxios, axios);

app.use(router);
app.mount('#app');

