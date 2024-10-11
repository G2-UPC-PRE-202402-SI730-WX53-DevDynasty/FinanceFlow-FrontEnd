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
  left: -345px;
}

.background-text {
  position: relative;
  z-index: 1;
  padding: 20px;
  max-width: 300px;
  left: -250px;
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

.register-section {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: space-between;
  gap: 50px;
}

input {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 115%;
  margin-bottom: 5px;
}

.input-small{
  min-width: 190px;
}

label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
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
  width: 460px;
  max-width: 700px;
}

button.submit-button:hover {
  background-color: #e65b30;
}

.Logo {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 150px;
}
</style>