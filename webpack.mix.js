import { js } from 'laravel-mix';

js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [])
   .vue();
