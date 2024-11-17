<script>
import home from "@/public/pages/home/components/home.component.vue";
import SidenavBar from "@/public/components/sidenav-bar.vue";
export default {
  name: "home-view-workers",
  components: {
    SidenavBar,
    home
  },
}
</script>

<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <home></home>
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