<template>
  <div class="login-page">
    <authBackgroundComponent />

    <div class="section-signup">
      <h1>What are you interested in?</h1>
      <div class="option-group">
        <button @click="goToSingUpWorkers" class="option-button">I am an employee!</button>
        <p>Order a whole menu for each of your coworkers at the palm of your hand.</p>
        <button @click="goToSingUpRestaurants" class="option-button">I am the owner of a restaurant!</button>
        <p>Advertise your restaurant, increase the number of clients monthly and <br> have a good organization of each order.</p>
      </div>
    </div>
  </div>
</template>

<script>
import authBackgroundComponent from "@/public/components/auth-background.component.vue";
export default {
  name: "SignUpComponent",
  components: {
    authBackgroundComponent
  },
  methods: {
    goToSingUpWorkers() {
      this.$router.push({ name: 'sign-up-workers' });
    },
    goToSingUpRestaurants() {
      this.$router.push({ name: 'sign-up-restaurants' });
    },
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}

.section-signup {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fdeae8;
  padding: 20px;
  margin-left: 210px;
}



.section-signup h1 {
  font-size: 36px;
  margin-bottom: 30px;
}

.option-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.option-button {
  width: 470px;
  max-width: 470px;
  padding: 15px;
  background-color: #fff;
  color: black;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
}

.option-button:hover {
  color: black;
}

.option-group p {
  margin: 0;
  font-size: 14px;
  color: #333;
  max-width: 550px;
  text-align: center;
}
</style>
