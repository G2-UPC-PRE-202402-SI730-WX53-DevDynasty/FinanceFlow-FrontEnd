<script>
import RoleSelection from "@/worker/team-activities/pages/role-selection.component.vue";
import SidenavBar from "@/public/components/sidenav-bar.vue";
import CreateTeam from "@/worker/team-activities/components/create-team.component.vue";

export default {
  name: "teamactivities-createteam-view" ,
  components: {CreateTeam, SidenavBar}
}
</script>


<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <create-team></create-team>
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