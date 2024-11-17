<script>
import AuthBackgroundComponent from "@/public/components/auth-background.component.vue";
export default {
  name: "PlanWorkersComponent",
  components: {
    AuthBackgroundComponent
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    goToPayment() {
      this.$router.push({ name: 'payment-workers' });
    }
  }
}
</script>


<template>
  <div class="login-page">
    <AuthBackgroundComponent/>

    <div class="login-section">
      <h1>Two plans available</h1>
      <p class="plans-description">Two plans for you and your team, choose the one that fits you better!</p>

      <div class="plan-section">
        <div class="plan-card basic">
          <h3>Basic</h3>
          <p>• You will have all the features available.</p>
          <p class="price"><strong>Free</strong></p>
        </div>

        <div class="plan-card premium">
          <h3>Premium</h3>
          <p>• All the features are available!</p>
          <p>• Get your orders faster!</p>
          <p>• Don't pay delivery!</p>
          <p>• Have special and exclusive discounts and offers for your team!</p>
          <p class="price"><strong>S/. 200 / monthly</strong></p>
        </div>
      </div>

      <div class="button-group">
        <button type="submit" class="continue-button" @click="goToHome">Continue in the app</button>
        <button type="submit" class="continue-button premium-button" @click="goToPayment">Go to the next step</button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}

.plans-description {
  font-size: 20px;
}

.login-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fdeae8;
  padding: 20px;
  margin-left: 150px;
}



.login-section h1 {
  font-size: 45px;
  margin: 20px 0;
  text-align: center;
}

.plan-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  gap: 30px;
}

.plan-card {
  background-color: #fab091;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 240px;
  max-width: 255px;
}

.plan-card h3 {
  margin: 0 0 10px;
  text-align: center;
}

.price {
  margin-top: auto;
  text-align: center;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.continue-button {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  background-color: #ff6f3f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 255px;
}

.continue-button:last-child {
  margin-right: 0;
}

.continue-button:hover {
  background-color: #ff5a21;
}

.premium-button {
  margin-left: 10px;
}
</style>
