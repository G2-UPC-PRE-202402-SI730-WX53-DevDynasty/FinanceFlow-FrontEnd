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
import recoverPasswordComponent from "@/iam/components/recover-password.component.vue";
import successfulRecoverPasswordComponent from "@/iam/components/successful-recover-password.component.vue";
import SignUpWorkersComponent from "@/iam/components/sign-up-workers.component.vue";
import SingUpWorkers from "@/iam/components/sign-up-workers.component.vue";
import SignUpRestaurantComponent from "@/iam/components/sign-up-restaurant.component.vue";
import planRestaurantComponent from "@/iam/components/plan-restaurant.component.vue";
import PaymentComponent from "@/iam/components/payment.component.vue";

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
        // Recover Password
        {
            path: '/recover-password',
            name: 'recover-password',
            component: recoverPasswordComponent,
            meta: {title: 'Recover Password'}
        },
        // Successful Recover Password
        {
            path: '/success-recover',
            name: 'success-recover',
            component: successfulRecoverPasswordComponent,
            meta: {title: 'Successful Recover Password'}
        },
        // Sign Up
        {
            path: '/sign-up',
            name: 'sign-up',
            component: SignUpWorkersComponent,
            meta: {title: 'Sign Up'}
        },
        // Sign Up Workers
        {
            path: '/sign-up-workers',
            name: 'sign-up-workers',
            component: SingUpWorkers,
            meta: {title: 'Sign Up Workers'}
        },
        // Sign Up Restaurant
        {
            path: '/sign-up-restaurants',
            name: 'sign-up-restaurants',
            component: SignUpRestaurantComponent,
            meta: {title: 'Sign Up Restaurants'}
        },
        // Plan Restaurant
        {
            path: '/plan-restaurants',
            name: 'plan-restaurants',
            component: planRestaurantComponent,
            meta: {title: 'Plan Restaurants'}
        },
        // Plan Workers
        {
            path: '/plan-workers',
            name: 'plan-workers',
            component: planRestaurantComponent,
            meta: {title: 'Plan Workers'}
        },
        // Payment
        {
            path: '/payment',
            name: 'payment',
            component: PaymentComponent,
            meta: {title: 'Payment'}
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