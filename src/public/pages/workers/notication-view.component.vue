<script>

import SidenavBar from "@/public/components/sidenav-bar.vue";
import NotificationsComponent from "@/public/components/notifications-component.vue";

export default {
  name: "notication-view" ,
  components: {NotificationsComponent, SidenavBar}
}
</script>


<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <notifications-component></notifications-component>
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