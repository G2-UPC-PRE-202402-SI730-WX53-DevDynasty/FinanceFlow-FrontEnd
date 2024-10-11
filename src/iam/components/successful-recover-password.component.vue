<script>
export default {
  name: "SuccessfulRecoverPasswordComponent",
  methods: {
    goToLogIn() {
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<template>
  <div class="login-page">
    <div class="background-section">
      <img src="../../assets/backgroung-introduction.png" alt="Restaurant Image" class="restaurant-image" />
      <div class="background-text">
        <h2>
          Transform your meals <br>
          into a flavoury <br>
          experience&nbsp;beyond&nbsp;your <br>
          imaginations and get it <br>
          quickly!
        </h2>
      </div>
    </div>
    <div class="login-section">
      <h1>Recover your Password</h1>
      <form>
        <div class="form-group">
          <label for="email">An email was sent to the email address provided</label>
        </div>
        <button @click="goToLogIn" type="submit" class="go-to-login-button">Go back to Log In</button>
      </form>
    </div>
    <img src="../../assets/logo-gastrogo.png" alt="GastroGo Logo" class="Logo" />
  </div>
</template>
<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}

.background-section {
  width: 720px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.restaurant-image {
  width: 110%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: -351px;
}

.background-text {
  position: relative;
  z-index: 1;
  padding: 20px;
  max-width: 300px;
  left: -350px;
  text-align: left;
  word-break: keep-all;
  max-width: 450px;
}

.background-text h2 {
  font-size: 36px;
  line-height: 1.2;
  margin: 0;
  white-space: normal;
}
.login-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fdeae8;
  padding: 20px;
}

.Logo {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 150px;
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

label {
  display: block;
  margin-bottom: 15px;
}

input {
  width: 458px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.go-to-login-button {
  width: 458px;
  max-width: 458px;
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