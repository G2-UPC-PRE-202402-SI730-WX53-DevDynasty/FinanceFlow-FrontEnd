<script>
import AuthBackgroundComponent from "@/public/components/auth-background.component.vue";
export default {
  name: "LogInComponent",
  components: {
    AuthBackgroundComponent
  },
  methods: {
    goToRecoverPassword() {
      this.$router.push({ name: 'recover-password' });
    },
    goToSignUp() {
      this.$router.push({ name: 'sign-up' });
    }
  }
};
</script>

<template>
  <div class="login-page">
    <AuthBackgroundComponent/>

    <div class="login-section">
      <h1>Log In to GastroGo</h1>
      <form>
        <div class="login-section__form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div class="login-section__form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <a @click="goToRecoverPassword" class="login-section__forgot-password">Forgot your password?</a>
        <button type="submit" class="login-section__button">Log in</button>
        <p>Don’t have an account? <a @click="goToSignUp">Create it now.</a></p>
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
  margin-left: 200px;
}

.login-section h1 {
  font-size: 40px;
  margin: 20px 0;
}

.login-section__form-group {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.login-section__form-group label {
  display: block;
  margin-bottom: 5px;
}

.login-section__form-group input {
  width: 170%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-section__forgot-password {
  color: black;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
}

.login-section__button {
  width: 180%;
  max-width: 430px;
  padding: 10px;
  background-color: #ff6f3f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.login-section__button:hover {
  background-color: #ff5a21;
}

.login-section p {
  margin-top: 20px;
  text-align: center;
  width: 100%;
}

.login-section p a {
  color: black;
  text-decoration: none;
  border-bottom: 1px solid black;
  cursor: pointer;
}
</style>
