export const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('./components/Home.vue')
    },
    {
        name: 'contact',
        path: '/contact',
        component: () => import('./components/Contact.vue')
    },
    {
        name: 'showBlogs',
        path: '/blogs',
        component: () => import('./components/blogs/Show.vue')
    },
    {
        name: 'createBlogs',
        path: '/create',
        component: () => import('./components/blogs/Create.vue')
    },
    {
        name: 'editBlogs',
        path: '/edit/:id',
        component: () => import('./components/blogs/Edit.vue')
    },
];