import {createRouter, createWebHistory} from "vue-router";
import MyOrderComponent from "@/order/pages/my-order.component.vue";
import OrderDetailsComponent from "@/order/pages/order-details.component.vue";
import OrderTrackerComponent from "@/order/pages/order-tracker.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home


        // Restaurants

        // Orders
        {path: '/my-order', name: 'my-order', component: MyOrderComponent, meta: {title: 'My Orders'}},
        {path: '/order-details/:orderId', name: 'order-details', component: OrderDetailsComponent, meta: {title: 'Order Details'}},
        {path: '/order-tracker', name: 'order-tracker', component: OrderTrackerComponent, meta: {title: 'Order Tracker'}},


        //Team Activities

        // Profile


        // Notifications


    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'GastroGo';
    document.title = `${baseTitle} - ${to.meta['title']}`;
    next();
})

export default router;