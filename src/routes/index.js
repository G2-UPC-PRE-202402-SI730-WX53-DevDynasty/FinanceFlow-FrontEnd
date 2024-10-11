import { createRouter, createWebHistory } from 'vue-router';
import RestaurantView from '@/restaurant/components/restaurant-view.vue';
import RestaurantDetailsView from '@/restaurant/components/restaurant-details-view.vue';
import RestaurantMenuView from "@/restaurant/components/restaurant-menu-view.vue";
import roleSelectionComponent from "@/team-activities/components/role-selection.component.vue";
import leaderComponent from "@/team-activities/components/leader.component.vue";
import memberComponent from "@/team-activities/components/member.component.vue";
import homeComponent from "@/home/components/home.component.vue";
import profileComponent from "@/profile/components/profile-component.vue";
import MyOrderComponent from "@/order/pages/my-order.component.vue";
import NotificationsComponent from "@/public/components/notifications-component.vue";
import loginComponent from "@/iam/pages/login.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Log In
        {
            path: '/login',
            name: 'login',
            component: loginComponent,
            meta: {title: 'LogIn'}
        },
        // Home
        {
            path: '/',
            name: 'home',
            component: homeComponent,
            meta: {title: 'Home'}
        },
        // Restaurants
        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantView,
            meta: {title: 'Restaurants'}
        },
        {
            path: '/restaurants/:name',
            name: 'RestaurantDetailsView',
            component: RestaurantDetailsView,
            meta: {title: 'Restaurant Details'}
        },
        {
            path: '/restaurant/:id/menu',
            name: 'restaurant-menu',
            component: RestaurantMenuView,
            meta: {title: 'Restaurant Menu'}
        },
        // Orders
        {
            path: '/orders',
            name: 'orders',
            component: MyOrderComponent,
            meta: {title: 'Orders'}
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
            component: profileComponent,
            meta: {title: 'Profile'}
        },
        // Notifications
        {
            path: '/notifications',
            name: 'notifications',
            component: NotificationsComponent,
            meta: {title: 'Notifications'}
        },

    ]
});
router.beforeEach((to, from, next) => {
    let baseTitle = 'GastroGo';
    document.title = `${baseTitle} - ${to.meta['title']}`;
    next();
})
export default router;