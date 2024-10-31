<script>
import RecentOrdersComponent from "@/restaurant/home/components/recent-orders.component.vue";
import ReputationComponent from "@/restaurant/home/components/reputation.component.vue";

export default {
  name: 'home-component',
  components: {
    RecentOrdersComponent,
    ReputationComponent
  }
}
</script>

<template>
  <div class="home">
    <div class="home-wrapper">
      <RecentOrdersComponent></RecentOrdersComponent>
      <ReputationComponent></ReputationComponent>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
  margin-left: 240px;
  background-color: #ffe9e2;
  box-sizing: border-box;
  min-height: 100vh;
  min-width: 1100px;
}

.home-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
</style>