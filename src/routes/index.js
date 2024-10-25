import { createRouter, createWebHistory } from 'vue-router';
import RestaurantView from '@/restaurant/components/restaurant-view.vue';
import RestaurantDetailsView from '@/restaurant/components/restaurant-details-view.vue';
import RestaurantMenuView from "@/restaurant/components/restaurant-menu-view.vue";
import RestaurantOrderDetailsView from "@/restaurant/components/restaurant-order-details-view.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home

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
            path: '/restaurant/:name/menu',
            name: 'restaurant-menu-view',
            component: RestaurantMenuView
        },
        {
            path: '/restaurants/:name/order-details',
            name: 'restaurant-order-details',
            component: RestaurantOrderDetailsView
        },
        // Orders

        // Team Activities

        // Profile

        // Notifications

    ]
});

export default router;