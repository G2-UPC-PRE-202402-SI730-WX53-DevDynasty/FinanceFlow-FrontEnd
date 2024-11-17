<script>
import HomeRestaurant from "@/restaurant/home/pages/home-restaurant.component.vue";
import SidenavBarRestaurant from "@/restaurant/public/components/sidenav-bar-restaurant.vue";
export default {
  name: "home-view-restaurants",
  components: {
    SidenavBarRestaurant,
    HomeRestaurant,
  },
}
</script>

<template>
  <div id="app">
    <sidenav-bar-restaurant></sidenav-bar-restaurant>
    <div class="screen-content">
      <home-restaurant></home-restaurant>
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