<script>
import SidenavBar from "@/public/components/sidenav-bar.vue";
import RestaurantOrderDetails from "@/worker/restaurant/components/restaurant-order-details.component.vue";
export default {
  name: "restaurant-order-detail-view",
  components: {
    RestaurantOrderDetails,
    SidenavBar,
  },
}
</script>

<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <restaurant-order-details></restaurant-order-details>
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