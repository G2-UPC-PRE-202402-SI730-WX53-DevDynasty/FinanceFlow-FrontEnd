import { createRouter, createWebHistory } from 'vue-router';
import RestaurantView from '@/public/components/restaurant-view.vue';
import HomeView from '@/public/components/home-view.vue';
import RestaurantDetailsView from '@/public/components/restaurant-details-view.vue';
import RestaurantMenuView from "@/public/components/restaurant-menu-view.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        // Restaurants
        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantView,
        },
        {
            path: '/restaurants/:name',
            name: 'RestaurantDetailsView',
            component: RestaurantDetailsView
        },
        {
            path: '/restaurant/:id/menu',
            name: 'restaurant-menu',
            component: RestaurantMenuView
        },
        // Orders

        // Team Activities

        // Profile

        // Notifications

    ]
});

export default router;