<script>
import SidenavBar from "@/public/components/sidenav-bar.vue";
import RoleSelection from "@/worker/team-activities/pages/role-selection.component.vue";
export default {
  name: "teamactivities-role-view",
  components: {
    RoleSelection,
    SidenavBar,
  },
}
</script>

<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <role-selection></role-selection>
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