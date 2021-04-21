//import required methods from Vue
import {
    createApp
} from "vue";
//import required methods from VueRouter
import {
    createRouter,
    createWebHistory
} from "vue-router";

import App from "./App.vue";
import HomePage from '@/components/pages/HomePage.vue';
import PostsPage from '@/components/pages/PostsPage.vue';
import PostPage from '@/components/pages/PostPage.vue';
import AddPostPage from '@/components/pages/AddPostPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HomePage
        },
        {
            path: '/posts',
            component: PostsPage
        },
        {
            path: '/post/:id',
            component: PostPage,
            props: true,
        },
        {
            path: '/categories',
            component: CategoriesPage
        },
        {
            path: '/post/new',
            component: AddPostPage
        }
    ]
});

createApp(App)
    .use(router)
    .mount("#app");