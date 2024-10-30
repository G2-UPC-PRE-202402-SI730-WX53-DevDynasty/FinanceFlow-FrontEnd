<script>
import AuthBackgroundComponent from "@/public/components/auth-background.component.vue";

export default {
  name: "SuccessfulRecoverPasswordComponent",
  components: {
    AuthBackgroundComponent
  },
  methods: {
    goToLogIn() {
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<template>
  <div class="login-page">
    <AuthBackgroundComponent />

    <div class="login-section">
      <h1>Recover your Password</h1>
      <form>
        <div class="form-group">
          <div class="input-container">
            <label class="input-label" for="email">An email was sent to the email address provided</label>
          </div>
        </div>
        <button @click="goToLogIn" type="submit" class="go-to-login-button">Go back to Log In</button>
      </form>
    </div>
  </div>
</template>

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
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.go-to-login-button {
  width: 123%;
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

.go-to-login-button:hover {
  background-color: #ff5a21;
}

</style>
