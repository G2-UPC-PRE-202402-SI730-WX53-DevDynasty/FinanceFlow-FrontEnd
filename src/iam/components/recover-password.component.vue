<script>
export default {
  name: "RecoverPasswordComponent",
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
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <button type="submit" class="send-button">Send</button>
      </form>
    </div>
    <img src="../../assets/logo-gastrogo.png" alt="GastroGo Logo" class="Logo" />
  </div>
</template>

<style>

</style>