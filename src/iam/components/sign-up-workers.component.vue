<script>
import AuthBackgroundComponent from "@/public/components/auth-background.component.vue";
export default {
  name: "SignUpWorkersComponent",
  components: {
    AuthBackgroundComponent
  },
  methods: {
    goToPlanWorkers() {
      this.$router.push({ name: 'plan-workers' });
    }
  }
}
</script>

<template>
  <div class="login-page">
    <AuthBackgroundComponent />

    <div class="register-section">
      <h1>Enter your information</h1>
      <div class="form-group">
        <div class="input-row">
          <div class="input-container">
            <label class="input-label" for="name">Name</label>
            <input class="input-field" type="text" id="name" placeholder="Name" v-model="name" />
          </div>
          <div class="input-container">
            <label class="input-label" for="lastNames">Last Names</label>
            <input class="input-field" type="text" id="lastNames" placeholder="Last Names" v-model="lastNames" />
          </div>
        </div>
        <div class="input-row">
          <div class="input-container">
            <label class="input-label" for="telephoneNumber">Telephone Number</label>
            <input class="input-field" type="text" id="telephoneNumber" placeholder="Telephone Number" v-model="telephoneNumber" />
          </div>
          <div class="input-container">
            <label class="input-label" for="dni">DNI</label>
            <input class="input-field" type="text" id="dni" placeholder="DNI" v-model="dni" />
          </div>
        </div>
        <div class="input-container">
          <label class="input-label" for="address">Address</label>
          <input class="input-field" type="text" id="address" placeholder="Address" v-model="address" />
        </div>
        <div class="input-container">
          <label class="input-label" for="email">Email</label>
          <input class="input-field" type="email" id="email" placeholder="Email" v-model="email" />
        </div>
        <div class="input-container">
          <label class="input-label" for="password">Password</label>
          <input class="input-field" type="password" id="password" placeholder="Password" v-model="password" />
        </div>

        <button @click="goToPlanWorkers" class="submit-button">Continue</button>
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
  gap: 15px;
}

.input-container {
  min-width: 242px;
}

.input-label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.input-field {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 5px;
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
  width: 500px;
}

button.submit-button:hover {
  background-color: #e65b30;
}
</style>
