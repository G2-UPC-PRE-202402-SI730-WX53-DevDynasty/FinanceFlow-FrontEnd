import { createRouter, createWebHistory } from 'vue-router';

import recoverPasswordComponent from "@/iam/components/recover-password.component.vue";
import successfulRecoverPasswordComponent from "@/iam/components/successful-recover-password.component.vue";
import SingUpWorkers from "@/iam/components/sign-up-workers.component.vue";
import SignUpRestaurantComponent from "@/iam/components/sign-up-restaurant.component.vue";
import planRestaurantComponent from "@/iam/components/plan-restaurant.component.vue";
import PaymentComponent from "@/iam/components/payment.component.vue";
import loginViewComponent from "@/public/pages/login-view.component.vue";
import homeViewWorkersComponent from "@/public/pages/workers/home-view-workers.component.vue";
import profileViewWorkersComponent from "@/public/pages/workers/profile-view-workers.component.vue";
import profileViewRestaurantsComponent from "@/public/pages/restaurants/profile-view-restaurants.component.vue";
import RestaurantViewComponent from "@/public/pages/workers/restaurant/restaurant-view.component.vue";
import restaurantDetailsViewComponent from "@/public/pages/workers/restaurant/restaurant-details-view.component.vue";
import restaurantMenuViewComponent from "@/public/pages/workers/restaurant/restaurant-menu-view.component.vue";
import restaurantOrderDetailViewComponent from "@/public/pages/workers/restaurant/restaurant-order-detail-view.component.vue";
import OrderViewComponent from "@/public/pages/workers/order/order-view.component.vue";
import orderDetailsViewComponent from "@/public/pages/workers/order/order-details-view.component.vue";
import orderTrackerViewComponent from "@/public/pages/workers/order/order-tracker-view.component.vue";
import teamactivitiesRoleViewComponent from "@/public/pages/workers/team-activities/teamactivities-role-view.component.vue";
import teamactivitiesCreateteamViewComponent from "@/public/pages/workers/team-activities/teamactivities-createteam-view.component.vue";
import teamactivitiesJointeamViewComponent from "@/public/pages/workers/team-activities/teamactivities-jointeam-view.component.vue";
import teamactivitiesLeaderViewComponent from "@/public/pages/workers/team-activities/teamactivities-leader-view.component.vue";
import teamactivitiesMemberViewComponent from "@/public/pages/workers/team-activities/teamactivities-member-view.component.vue";
import signupViewComponent from "@/public/pages/signup-view.component.vue";
import homeViewRestaurantsComponents from "@/public/pages/restaurants/home-view-restaurants.components.vue";
import menuViewComponent from "@/public/pages/restaurants/menu/menu-view.component.vue";
import menuDetailsViewComponent from "@/public/pages/restaurants/menu/menu-details-view.component.vue";
import addmenuViewComponent from "@/public/pages/restaurants/menu/addmenu-view.component.vue";
import noticationViewComponent from "@/public/pages/workers/notication-view.component.vue";
import noticationRestaurantViewComponent from "@/public/pages/restaurants/notication-restaurant-view.component.vue";
import nullViewComponent from "@/public/pages/restaurants/null-view.component.vue";
import PaymentRestaurantComponent from "@/iam/components/payment-restaurant.component.vue";
import planWorkersComponent from "@/iam/components/plan-workers.component.vue";
import MyOrderRestaurantComponent from "@/restaurant/restaurant-order/components/my-order-restaurant.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Worker

        // Log In
        {
            path: '/',
            name: 'login',
            component: loginViewComponent,
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
            component: signupViewComponent,
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
            component: planWorkersComponent,
            meta: {title: 'Plan Workers'}
        },
        // Payment
        {
            path: '/payment/workers',
            name: 'payment-workers',
            component: PaymentComponent,
            meta: {title: 'Payment workers'}
        },
        {
            path: '/my-order-restaurant',
            name: 'my-order-restaurant',
            component: MyOrderRestaurantComponent,
            meta: {title: 'My Order restaurant'}
        },

        {
            path: '/payment/restaurant',
            name: 'payment-restaurant',
            component: PaymentRestaurantComponent,
            meta: {title: 'Payment restaurant'}
        },

        // Home
        {
            path: '/home',
            name: 'home',
            component: homeViewWorkersComponent,
            meta: {title: 'Home'}
        },
        // Restaurants
        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantViewComponent,
            meta: {title: 'Restaurants'}
        },
        {
            path: '/restaurants/:name',
            name: 'RestaurantDetailsView',
            component: restaurantDetailsViewComponent,
            meta: {title: 'Restaurant Details'}
        },
        {
            path: '/restaurant/:name/menu',
            name: 'restaurant-menu-view',
            component: restaurantMenuViewComponent,
            meta: {title: 'Restaurant Menu'}
        },
        {
            path: '/restaurants/:name/order-details',
            name: 'restaurant-order-details',
            component: restaurantOrderDetailViewComponent,
            meta: {title: 'Restaurant Order Details'}
        },
        // Orders
        {
            path: '/my-order',
            name: 'my-order',
            component: OrderViewComponent,
            meta: {title: 'My Orders'}
        },
        {
            path: '/order-details/:orderId',
            name: 'order-details',
            component: orderDetailsViewComponent,
            meta: {title: 'Order Details'}
        },
        {
            path: '/order-tracker',
            name: 'order-tracker',
            component: orderTrackerViewComponent,
            meta: {title: 'Order Tracker'}
        },
        //Team Activities
        {
            path: '/team-activities',
            name:'team-activities',
            component: teamactivitiesRoleViewComponent,
            meta: {title: 'Team Activities'}
        },
        {
            path: '/team-activities/create-team',
            name: 'team-activities-create-team',
            component: teamactivitiesCreateteamViewComponent,
            meta: { title: 'Create Team' }
        },
        {
            path: '/team-activities/join-a-team',
            name: 'team-activities-join-a-team',
            component: teamactivitiesJointeamViewComponent,
            meta: { title: 'Join a Team' }
        },
        {
            path: '/team-activities/leader',
            name:'team-activities-leader',
            component: teamactivitiesLeaderViewComponent,
            meta: {title: 'Leader'}
        },
        {
            path: '/team-activities/members',
            name:'team-activities-members',
            component: teamactivitiesMemberViewComponent,
            meta: {title: 'Members'}
        },
        // Profile
        {
            path: '/profile',
            name: 'profile',
            component: profileViewWorkersComponent,
            meta: {title: 'Profile'}
        },
        // Notifications
        {
            path: '/notifications',
            name: 'notifications',
            component: noticationViewComponent,
            meta: {title: 'Notifications'}
        },

        // Restaurant
        // Home
        {
            path: '/home/restaurant',
            name: 'home-restaurant',
            component: homeViewRestaurantsComponents,
            meta: {title: 'Home Restaurant'}
        },
        {
            path: '/myorders/restaurant',
            name: 'restaurants-orders',
            component: nullViewComponent,
            meta: {title: 'Restaurant Orders'}
        },

        // Menus
        {
            path: '/menus',
            name: 'menus',
            component: menuViewComponent,
            meta: {title: 'Menus'}
        },

        // Menus details
        {
            path: '/menus/:id',
            name: 'menus-details',
            component: menuDetailsViewComponent,
            meta: {title: 'Menu Details'}
        },

        // Add menu
        {
            path: '/menus/add-menu',
            name: 'add-menu',
            component: addmenuViewComponent,
            meta: {title: 'Add Menu'}
        },
        // Profile
        {
            path: '/profile/restaurant',
            name: 'profile-restaurant',
            component: profileViewRestaurantsComponent,
            meta: {title: 'Profile Restaurant'}
        },
        {
            path: '/notifications/restaurant',
            name: 'notifications-restaurant',
            component: noticationRestaurantViewComponent,
            meta: {title: 'Restaurant Notifications'}
        },
    ]
});
router.beforeEach((to, from, next) => {
    let baseTitle = 'GastroGo';
    document.title = `${baseTitle} - ${to.meta['title']}`;
    next();
})
export default router;