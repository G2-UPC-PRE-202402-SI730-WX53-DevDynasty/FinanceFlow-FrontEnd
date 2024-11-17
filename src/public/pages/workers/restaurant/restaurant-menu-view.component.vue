<script>
import SidenavBar from "@/public/components/sidenav-bar.vue";
import RestaurantMenu from "@/worker/restaurant/components/restaurant-menu.component.vue";
export default {
  name: "restaurant-menu-view",
  components: {
    RestaurantMenu,
    SidenavBar,
  },
}
</script>

<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <restaurant-menu></restaurant-menu>
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