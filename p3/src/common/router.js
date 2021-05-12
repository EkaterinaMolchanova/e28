//import required methods from VueRouter
import { createRouter, createWebHistory } from "vue-router";
import { store } from '@/common/store.js'

//Define all routes for the app
const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/HomePage.vue')
    },
    {
        path: '/posts',
        component: () => import('@/components/pages/PostsPage.vue')
    },
    {
        path: '/post/:id',
        component: () => import('@/components/pages/PostPage.vue'),
        props: true,
    },
    {
        path: '/post/new',
        component: () => import('@/components/pages/AddPostPage.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: () => import('@/components/pages/LoginPage.vue')
    },
    {
        path: '/signup',
        component: () => import('@/components/pages/SignupPage.vue')
    },
    {
        path: '/favorite',
        component: () => import('@/components/pages/FavoritesPage.vue')
    },
    {
        path: '/denied',
        component: () => import('@/components/pages/AccessDeniedPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//check user status before the route is resolved
router.beforeEach(async (to) =>
{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    const decide = (user) =>
    {
        if (requiresAuth && !user) {
            return '/denied'
        } else {
            return true
        }
    }

    if (store.state.user === null) {
        let authUser = await store.dispatch('authUser');
        if (authUser !== null) {
            return decide(store.state.user)
        }
    } else {
        return decide(store.state.user)
    }

});

export { router };