import { createRouter, createWebHistory } from 'vue-router';

import RestaurantView from '@/worker/restaurant/components/restaurant-view.vue';
import RestaurantDetailsView from '@/worker/restaurant/components/restaurant-details-view.vue';
import RestaurantMenuView from "@/worker/restaurant/components/restaurant-menu-view.vue";
import RestaurantOrderDetailsView from "@/restaurant/components/restaurant-order-details-view.vue";
import roleSelectionComponent from "@/worker/team-activities/pages/role-selection.component.vue";
import leaderComponent from "@/worker/team-activities/pages/leader.component.vue";
import memberComponent from "@/worker/team-activities/pages/member.component.vue";
import homeComponent from "@/public/pages/home/components/home.component.vue";
import profileComponent from "@/worker/profile/components/profile-component.vue";
import NotificationsComponent from "@/public/components/notifications-component.vue";
import loginComponent from "@/iam/pages/login.component.vue";
import recoverPasswordComponent from "@/iam/components/recover-password.component.vue";
import successfulRecoverPasswordComponent from "@/iam/components/successful-recover-password.component.vue";
import SignUpWorkersComponent from "@/iam/components/sign-up-workers.component.vue";
import SingUpWorkers from "@/iam/components/sign-up-workers.component.vue";
import SignUpRestaurantComponent from "@/iam/components/sign-up-restaurant.component.vue";
import planRestaurantComponent from "@/iam/components/plan-restaurant.component.vue";
import PaymentComponent from "@/iam/components/payment.component.vue";
import menusComponent from "@/restaurant/menu/pages/menus.component.vue";
import menuDetailsComponent from "@/restaurant/menu/pages/menu-details.component.vue";
import addMenuComponent from "@/restaurant/menu/components/add-menu.component.vue";
import homeComponentRestaurant from "@/restaurant/home/pages/home.component.vue"
import createTeamComponent from "@/worker/team-activities/components/create-team.component.vue";
import joinATeamComponent from "@/worker/team-activities/components/join-a-team.component.vue";

import MyOrderComponent from "@/worker/order/pages/my-order.component.vue";
import OrderDetailsComponent from "@/worker/order/pages/order-details.component.vue";
import OrderTrackerComponent from "@/worker/order/pages/order-tracker.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Worker

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
            path: '/restaurant/:name/menu',
            name: 'restaurant-menu-view',
            component: RestaurantMenuView,
            meta: {title: 'Restaurant Menu'}
        },
        {
            path: '/restaurants/:name/order-details',
            name: 'restaurant-order-details',
            component: RestaurantOrderDetailsView,
            meta: {title: 'Restaurant Order Details'}
        },
        // Orders
        {path: '/my-order', name: 'my-order', component: MyOrderComponent, meta: {title: 'My Orders'}},
        {path: '/order-details/:orderId', name: 'order-details', component: OrderDetailsComponent, meta: {title: 'Order Details'}},
        {path: '/order-tracker', name: 'order-tracker', component: OrderTrackerComponent, meta: {title: 'Order Tracker'}},
        //Team Activities
        { path: '/team-activities', name:'team-activities', component: roleSelectionComponent, meta: {title: 'Team Activities'}},
        { path: '/team-activities/create-team', name: 'team-activities-create-team', component: createTeamComponent, meta: { title: 'Create Team' }},
        { path: '/team-activities/join-a-team', name: 'team-activities-join-a-team', component: joinATeamComponent, meta: { title: 'Join a Team' }},
        { path: '/team-activities/leader', name:'team-activities-leader', component: leaderComponent, meta: {title: 'Leader'}},
        { path: '/team-activities/members', name:'team-activities-members', component: memberComponent, meta: {title: 'Members'}},
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
        // restaurant
        // Menus
        {
            path: '/menus',
            name: 'menus',
            component: menusComponent,
            meta: {title: 'Menus'}
        },

        // Menus details
        {
            path: '/menus/:id',
            name: 'menus-details',
            component: menuDetailsComponent,
            meta: {title: 'Menu Details'}
        },

        // Add menu
        {
            path: '/menus/add-menu',
            name: 'add-menu',
            component: addMenuComponent,
            meta: {title: 'Add Menu'}
        },

        // Restaurant

        // Home
        {
            path: '/home-restaurant',
            name: 'home-restaurant',
            component: homeComponentRestaurant,
            meta: {title: 'Home Restaurant'}
        }
    ]
});
router.beforeEach((to, from, next) => {
    let baseTitle = 'GastroGo';
    document.title = `${baseTitle} - ${to.meta['title']}`;
    next();
})
export default router;