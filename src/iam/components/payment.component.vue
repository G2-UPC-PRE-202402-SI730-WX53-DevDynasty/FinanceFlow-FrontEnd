<script>
export default {
  name: "PaymentComponent",
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
      <h1>Payment: Credit/Debit Card</h1>
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

        <div>
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" placeholder="Card Number" v-model="cardnumber"/>
        </div>
        <div class="input-row">
          <div class="input-small">
            <label for="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" placeholder="Expiry Date" v-model="expirydate"/>
          </div>
          <div class="input-small">
            <label for="ccv">CCV</label>
            <input type="text" id="ccv" placeholder="CCV" v-model="ccv"/>
          </div>
        </div>
        <button class="submit-button">Continue in the app</button>
      </div>
    </div>

    <img src="../../assets/logo-gastrogo.png" alt="GastroGo Logo" class="Logo" />
  </div>
</template>

<style scoped>

</style>
