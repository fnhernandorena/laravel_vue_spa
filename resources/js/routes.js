const Home = () => import('./components/Home.vue')
const Contact = () => import('./components/Contact.vue')
//blogs
const Create = () => import('./components/blogs/Create.vue')
const Show = () => import('./components/blogs/Show.vue')
const Edit = () => import('./components/blogs/Edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'showBlogs',
        path: '/blogs',
        component: Show
    },
    {
        name: 'createBlogs',
        path: '/create',
        component: Create
    },
    {
        name: 'editBlogs',
        path: '/edit/:id',
        component: Edit
    },
]