<template>
  <div class="profile-container">
    <div class="profile-header">
      <h2>Profile</h2>
    </div>

    <div class="profile-form-container">
      <div class="profile-form">
        <div class="name-last-name">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="userData.name" />
          </div>

          <div class="space-name-lastname"></div>

          <div class="form-group">
            <label for="last-names">Last Names</label>
            <input type="text" id="last-names" v-model="userData.lastNames" />
          </div>
        </div>

        <div class="telefono-dni">
          <div class="form-group">
            <label for="phone">Telephone Number</label>
            <input type="text" id="phone" v-model="userData.phone" />
          </div>

          <div class="space-name-lastname"></div>

          <div class="form-group">
            <label for="dni">DNI</label>
            <input type="text" id="dni" v-model="userData.dni" />
          </div>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" id="address" v-model="userData.address" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="userData.email" />
        </div>

        <div class="form-group">
          <label for="password">Change Password</label>
          <input type="password" id="password" v-model="userData.password" placeholder="Enter your new password" />
        </div>

        <button class="save-button" @click="saveData">Save</button>
      </div>

      <div class="space-form-suscription"></div>

      <div class="left-boxes">
        <div class="subscription-box">
          <div class="conteiner-subscription-title">
            <h3>Your subscription</h3>
          </div>
          <div class="subscription-details">
            <div class="subs-team-paid">
              <p>Big Team</p>
              <p>S/. 200 monthly</p>
            </div>

            <div class="payment-options">
              <div class="option">
                <input type="checkbox" id="monthly-payment" v-model="userData.monthlyPayment" />
                <label for="monthly-payment">Automatic Monthly Payment</label>
              </div>

              <div class="option">
                <input type="checkbox" id="annual-payment" v-model="userData.annualPayment" />
                <label for="annual-payment">Automatic Annual Payment</label>
              </div>
            </div>
          </div>
        </div>

        <div class="subscription-box">
          <div class="conteiner-subscription-title">
            <h3>Payment method</h3>
          </div>
          <div class="subscription-details">
            <div class="info-payment">
              <p>Credit/Debit Card</p>
              <p>XXXX-XXXX-XXXX-6789</p>
              <p>Expiration Date</p>
              <p>07/30</p>
            </div>
            <button @click="addPaymentMethod">Add Method</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "Lucas",
        lastNames: "Fernandez",
        phone: "999888777",
        dni: "45789642",
        address: "Santiago de Surco, El Derby, 408",
        email: "lucasf@gmail.com",
        password: "",
        monthlyPayment: true,
        annualPayment: false,
      },
    };
  },
  methods: {
    saveData() {
      console.log("Data saved:", this.userData);
    },
    addPaymentMethod() {
      console.log("Adding a new payment method.");
    },
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-basis: content;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  width: 100%;
  height: 100%;
}

.profile-header {
  background-color: #FF7338;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.profile-header h2 {
  color: #ffffff;
  margin: 0;
  text-align: center;
  align-items: center;
}

.profile-form-container {
  display: flex;
  justify-content: space-around;
  background-color: #FFCFBB;
  padding: 30px;
}

.name-last-name{
  display: flex;
  flex-direction: row;
}

.telefono-dni{
  display: flex;
  flex-direction: row;
}
.profile-form {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-size: 14px;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.save-button {
  background-color: #FF7338;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-weight: bold;
}

.save-button:hover {
  background-color: #ff9f33;
}

.space-form-suscription{
  padding: 30px;
}
.space-name-lastname{
  padding: 10px;
}
.subscription-box {
  margin-bottom: 20px;
}

.subscription-box h3 {
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
}

.conteiner-subscription-title{
  background-color: #FF7338;
  color: white;
  padding: 5px;
}

.subs-team-paid {
  display: flex;
  justify-content: space-between;
}

.subscription-details {
  font-size: 12px;
  background-color: #faeae7;
  margin-top: 0px;
  padding: 20px;
}
.subscription-details button {
  background-color: #FF7338;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
}
.subscription-details button:hover {
  background-color: #c65829;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
}

.payment-options {
  margin-top: 20px;
}

.payment-options .option {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.payment-options label {
  margin-left: 10px;
}</style>
