<template>
  <div class="login-page">
    <AuthBackgroundComponent />

    <div class="login-section">
      <h1>Recover your Password</h1>
      <form>
        <div class="form-group">
          <div class="input-container">
            <label class="input-label" for="email">Email</label>
            <input class="input-field" type="email" id="email" placeholder="Enter your email" required />
          </div>
        </div>
        <button @click="goToSuccessfulRecoverPassword" type="submit" class="send-button">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import AuthBackgroundComponent from "@/public/components/auth-background.component.vue";

export default {
  name: "RecoverPasswordComponent",
  components: {
    AuthBackgroundComponent
  },
  methods: {
    goToSuccessfulRecoverPassword() {
      this.$router.push({ name: 'success-recover' });
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
  margin-left: 220px;
}

.login-section h1 {
  font-size: 40px;
  margin: 20px 0;
}

.form-group {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
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
  width: 240%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.send-button {
  width: 240%;
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

.send-button:hover {
  background-color: #ff5a21;
}
</style>
