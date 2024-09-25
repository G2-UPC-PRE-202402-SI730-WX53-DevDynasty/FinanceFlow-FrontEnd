import { createRouter, createWebHistory } from 'vue-router';
import RestaurantView from '@/restaurant/components/restaurant-view.vue';
import RestaurantDetailsView from '@/restaurant/components/restaurant-details-view.vue';
import RestaurantMenuView from "@/restaurant/components/restaurant-menu-view.vue";
import roleSelectionComponent from "@/team-activities/components/role-selection.component.vue";
import leaderComponent from "@/team-activities/components/leader.component.vue";
import memberComponent from "@/team-activities/components/member.component.vue";
import homeComponent from "@/home/components/home.component.vue";
import orderCardComponent from "@/order/components/order-card.component.vue";
import profileComponent from "@/profile/components/profile-component.vue";
import MyOrderComponent from "@/order/pages/my-order.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home
        {
            path: '/',
            name: 'home',
            component: homeComponent
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
        {
            path: '/orders',
            name: 'orders',
            component: MyOrderComponent
        },
        // Team Activities
        {
            path: '/team-activities',
            name:'team-activities',
            component: roleSelectionComponent,
            meta: {title: 'Team Activities'}
        },
        {
            path: '/team-activities/leader',
            name:'team-activities-leader',
            component: leaderComponent,
            meta: {title: 'Leader'}
        },
        {
            path: '/team-activities/members',
            name:'team-activities-members',
            component: memberComponent,
            meta: {title: 'Members'}
        },
        // Profile
        {
            path: '/profile',
            name: 'profile',
            component: profileComponent
        },
        // Notifications

    ]
});
router.beforeEach((to, from, next) => {
    let baseTitle = 'GastroGo';
    document.title = `${baseTitle} - ${to.meta['title']}`;
    next();
})
export default router;