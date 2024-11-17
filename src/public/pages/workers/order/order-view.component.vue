<script>
import SidenavBar from "@/public/components/sidenav-bar.vue";
import RestaurantComponent from "@/worker/restaurant/components/restaurant.component.vue";
import MyOrder from "@/worker/order/pages/my-order.component.vue";
export default {
  name: "order-view",
  components: {
    MyOrder,
    SidenavBar,
  },
}
</script>

<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <my-order></my-order>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #FAEAE7;
  justify-content: space-between;

}

.screen-content {
  flex: 1;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>