<template>
  <div class="login-page">
    <AuthBackgroundComponent />

    <div class="login-section">
      <h1>This is your plan</h1>
      <div class="section-plan">
        <p>A plan specially made for your restaurant to increase its sellings. Just one more step and the benefits will be all yours!</p>
        <ul>
          <li>Advertise your restaurant with us!</li>
          <li>Have an in-real time tracker for each order to avoid issues</li>
          <li>Prioritize large groups of orders</li>
        </ul>
        <p>All for S/. 400 monthly</p>
      </div>
      <button @click="goToPayment" type="submit" class="continue-button">Continue</button>
    </div>

  </div>
</template>

<script>
import AuthBackgroundComponent from "@/public/components/auth-background.component.vue";
export default {
  name: "PlanRestaurantComponent",
  components: {
    AuthBackgroundComponent
  },
  methods: {
    goToPayment() {
      this.$router.push({ name: 'payment-restaurant' });
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}

.login-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fdeae8;
  padding: 20px;
  margin-left: 250px;
}



.login-section h1 {
  font-size: 40px;
  margin: 20px 0;
}

.section-plan {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.continue-button {
  width: 385px;
  max-width: 490px;
  padding: 10px;
  background-color: #ff6f3f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.continue-button:hover {
  background-color: #ff5a21;
}
</style>
