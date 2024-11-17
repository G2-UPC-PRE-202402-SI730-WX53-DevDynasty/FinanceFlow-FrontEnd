<script>
import SidenavBar from "@/public/components/sidenav-bar.vue";
import Members from "@/worker/team-activities/pages/member.component.vue";

export default {
  name: "teamactivities-member-view" ,
  components: {Members, SidenavBar}
}
</script>


<template>
  <div id="app">
    <sidenav-bar></sidenav-bar>
    <div class="screen-content">
      <members></members>
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