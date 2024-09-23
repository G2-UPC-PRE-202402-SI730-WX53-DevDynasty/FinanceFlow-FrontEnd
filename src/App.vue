<script>

import SidenavBar from "@/public/components/sidenav-bar.vue";

export default {
  name: 'App',
  components: {SidenavBar}
}

</script>

<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #FAEAE7;

}

.screen-content {
  flex: 1;
  padding: 20px;
  height: 100%;
  width: 100%;
}

</style>
