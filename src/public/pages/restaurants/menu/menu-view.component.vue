<script>
import SidenavBarRestaurant from "@/restaurant/public/components/sidenav-bar-restaurant.vue";
import Menus from "@/restaurant/menu/pages/menus.component.vue";

export default {
  name: "menu-view" ,
  components: {Menus, SidenavBarRestaurant}
}
</script>

<template>
  <div id="app">
    <sidenav-bar-restaurant></sidenav-bar-restaurant>
    <div class="screen-content">
      <menus></menus>
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