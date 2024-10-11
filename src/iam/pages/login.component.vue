<script>
export default {
  name: "LogInComponent",
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
        <a href="#" class="forgot-password">Forgot your password?</a>
        <button type="submit" class="login-button">Log in</button>
        <p>Don’t have an account? <a href="#">Create it now.</a></p>
      </form>
    </div>
    <img src="../../assets/logo-gastrogo.png" alt="GastroGo Logo" class="Logo" />
  </div>
</template>



<style scoped>

</style>
