import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Importa el plugin de Vue correctamente
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        vue(), // Inicia el plugin de Vue como una función
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
