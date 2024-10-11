<script>
export default {
  name: "LogInComponent",
  methods: {
    goToRecoverPassword() {
      this.$router.push({ name: 'recover-password' });
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
      <h1>Log In to GastroGo</h1>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <a @click="goToRecoverPassword" class="forgot-password">Forgot your password?</a>
        <button type="submit" class="login-button">Log in</button>
        <p>Don’t have an account? <a >Create it now.</a></p>
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
  left: -400px;
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
  margin-bottom: 5px;
}

input {
  width: 145%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.forgot-password {
  color: black;
  margin-top: 10px;
  text-decoration: none;
}

.login-button {
  width: 145%;
  max-width: 400px;
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

.login-button:hover {
  background-color: #ff5a21;
}

a {
  color: black;
  text-decoration: none;
  border-bottom: 1px solid black;
}

a:hover {
  text-decoration: underline;
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
}
</style>
