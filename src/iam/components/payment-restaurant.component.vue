<script>
import AuthBackgroundComponent from "@/public/components/auth-background.component.vue";
export default {
  name: "PaymentRestaurantComponent",
  components: {
    AuthBackgroundComponent
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home-restaurant' });
    }
  }
}
</script>

<template>
  <div class="login-page">
    <AuthBackgroundComponent />

    <div class="register-section">
      <h1>Payment: Credit/Debit Card</h1>
      <div class="form-group">
        <div class="input-row">
          <div class="input-container input-small">
            <label class="input-label" for="name">Name</label>
            <input class="input-field" type="text" id="name" placeholder="Name" v-model="name" />
          </div>
          <div class="input-container input-small">
            <label class="input-label" for="lastNames">Last Names</label>
            <input class="input-field" type="text" id="lastNames" placeholder="Last Names" v-model="lastNames" />
          </div>
        </div>

        <div class="input-container">
          <label class="input-label" for="card-number">Card Number</label>
          <input class="input-field" type="text" id="card-number" placeholder="Card Number" v-model="cardnumber" />
        </div>
        <div class="input-row">
          <div class="input-container input-small">
            <label class="input-label" for="expiry-date">Expiry Date</label>
            <input class="input-field" type="text" id="expiry-date" placeholder="Expiry Date" v-model="expirydate" />
          </div>
          <div class="input-container input-small">
            <label class="input-label" for="ccv">CCV</label>
            <input class="input-field" type="text" id="ccv" placeholder="CCV" v-model="ccv" />
          </div>
        </div>
        <button class="submit-button" @click="goToHome">Continue in the app</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}

.register-section {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 150px;
}

.register-section h1 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-row {
  display: flex;
  gap: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-field {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 5px;
}

.input-small {
  min-width: 255px;
}

button.submit-button {
  background-color: #ff6f3f;
  color: white;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
  width: 530px;
  max-width: 700px;
}

button.submit-button:hover {
  background-color: #e65b30;
}
</style>
