<script>
import Menus from "@/restaurant/menu/pages/menus.component.vue";
import SidenavBarRestaurant from "@/restaurant/public/components/sidenav-bar-restaurant.vue";
import AddMenu from "@/restaurant/menu/components/add-menu.component.vue";

export default {
  name: "addmenu-view" ,
  components: {AddMenu, SidenavBarRestaurant}
}
</script>

<template>
  <div id="app">
    <sidenav-bar-restaurant></sidenav-bar-restaurant>
    <div class="screen-content">
      <add-menu></add-menu>
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