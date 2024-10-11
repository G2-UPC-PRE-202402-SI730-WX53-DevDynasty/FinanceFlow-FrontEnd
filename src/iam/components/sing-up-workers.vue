<script>
export default {
  name: "SingUpWorkersComponent",
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

    <div class="register-section">
      <h1>Enter your information </h1>
      <div class="form-group">
        <div class="input-row">
          <div >
            <label class="input-small" for="name">Name</label>
            <input type="text" id="name" placeholder="Name" v-model="name" />
          </div>
          <div >
            <label class="input-small" for="lastNames">Last Names</label>
            <input type="text" id="lastNames" placeholder="Last Names" v-model="lastNames" />
          </div>
        </div>
        <div class="input-row">
          <div >
            <label class="input-small" for="telephoneNumber">Telephone Number</label>
            <input type="text" id="telephoneNumber" placeholder="Telephone Number" v-model="telephoneNumber" />
          </div>
          <div class="input-small">
            <label for="dni">DNI</label>
            <input type="text" id="dni" placeholder="DNI" v-model="dni" />
          </div>
        </div>
        <div>
          <label for="address">Address</label>
          <input type="text" id="address" placeholder="Address" v-model="address" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Email" v-model="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password" v-model="password" />
        </div>

        <button class="submit-button">Continue</button>
      </div>
    </div>

    <img src="../../assets/logo-gastrogo.png" alt="GastroGo Logo" class="Logo" />
  </div>
</template>

<style scoped>

</style>