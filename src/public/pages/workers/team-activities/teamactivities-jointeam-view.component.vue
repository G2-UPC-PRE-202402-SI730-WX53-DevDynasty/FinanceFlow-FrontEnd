<script>

import SidenavBar from "@/public/components/sidenav-bar.vue";
import JoinTeam from "@/worker/team-activities/components/join-a-team.component.vue";

export default {
  name: "teamactivities-jointeam-view" ,
  components: {JoinTeam, SidenavBar}
}
</script>


<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <join-team></join-team>
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