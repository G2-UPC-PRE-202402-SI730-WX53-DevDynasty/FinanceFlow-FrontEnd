<script>

import SidenavBar from "@/public/components/sidenav-bar.vue";
import WorkerProfile from "@/worker/profile/components/profile-component.vue";
import SidenavBarRestaurant from "@/restaurant/public/components/sidenav-bar-restaurant.vue";
import RestaurantProfile from "@/restaurant-profile/components/restaurant-profile.component.vue";
export default {
  name: "profile-view-restaurants",
  components: {
    RestaurantProfile,
    SidenavBarRestaurant,
  },
}
</script>

<template>
  <div id="app">
    <sidenav-bar-restaurant></sidenav-bar-restaurant>
    <div class="screen-content">
      <restaurant-profile></restaurant-profile>
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