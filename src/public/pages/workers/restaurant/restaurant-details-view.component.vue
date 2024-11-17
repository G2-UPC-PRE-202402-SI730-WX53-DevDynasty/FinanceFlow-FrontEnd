<script>
import SidenavBar from "@/public/components/sidenav-bar.vue";
import RestaurantDetails from "@/worker/restaurant/components/restaurant-details.component.vue";
export default {
  name: "restaurant-details-view",
  components: {
    RestaurantDetails,
    SidenavBar,
  },
}
</script>

<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <restaurant-details></restaurant-details>
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