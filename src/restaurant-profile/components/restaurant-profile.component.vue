<script>
export default {
  name: "restaurant-profile",
}
</script>

<template>
  <div class="profile-container">

    <div class="header-container">
      <div class="header">
        <h1>Profile</h1>
      </div>
    </div>

    <div class="profile-container2">
      <div class="form-section">
        <div class="input-row">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Name" v-model="name" />
          </div>
          <div>
            <label for="lastNames">Last Names</label>
            <input type="text" id="lastNames" placeholder="Last Names" v-model="lastNames" />
          </div>
        </div>

        <div class="input-row">
          <div>
            <label for="restaurantName">Restaurant Name</label>
            <input type="text" id="restaurantName" placeholder="Restaurant Name" v-model="restaurantName" />
          </div>
          <div>
            <label for="telephoneNumber">Telephone Number</label>
            <input type="text" id="telephoneNumber" placeholder="Telephone Number" v-model="telephoneNumber" />
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
          <label for="password">Change password</label>
          <input type="password" id="password" placeholder="Enter your new password" v-model="password" />
        </div>

        <div class="input-row">
          <div>
            <label for="dni">DNI</label>
            <input type="text" id="dni" placeholder="DNI" v-model="dni" />
          </div>
          <div>
            <label for="ruc">RUC</label>
            <input type="text" id="ruc" placeholder="RUC" v-model="ruc" />
          </div>
        </div>

        <button class="save-button">Save</button>
      </div>

      <div class="subscription-section">
        <div class="photo-section">
          <img src="../assets/profile-restaurant.jpeg" alt="Restaurant Photo" class="restaurant-photo" />
          <button class="upload-button">Upload photo</button>
          <button class="delete-button">Delete photo</button>
        </div>

        <div class="plan-section">
          <div class="header-subscription">
            <h3>Your subscription</h3>
          </div>
          <div class="subscription-box">
            <div class="subscription-details">
              <p>Restaurant</p>
              <p>S/. 400 monthly</p>
            </div>
            <div class="payment-options">
              <label for="monthly">
                <input type="checkbox" id="monthly" v-model="monthlyPayment"/>
                Automatic Monthly Payment
              </label>
              <label for="annual">
                <input type="checkbox" id="annual" v-model="annualPayment" />
                Automatic Annual Payment
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

.profile-container {
  background-color: #FAEAE7;
  padding: 20px;
  position: absolute;
  top: 90px;
  left: 510px;
  border-radius: 5px;
}

.header-container {
  background-color: #FF7338;
  padding: 20px;
  text-align: center;

}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.profile-container2 {
  display: flex;
  justify-content: space-between;
  background-color: #FFCFBB;
  padding: 30px;
  max-width: 860px;
  min-height: 630px;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 60%;
}

.input-row {
  display: flex;
  gap: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.save-button {
  background-color: #ff6f3f;
  color: white;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  max-width: 450px;
  margin-top: 20px;
}

.save-button:hover {
  background-color: #ff9f33;
}

.header-subscription {
  background-color: #FF7338;
  padding: 5px;
  border-radius: 0;
  color: white;
  max-width: 314px;
  max-height: 48px;
  text-align: center;
}
.subscription-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 30%;
}

.photo-section {
  text-align: center;
}

.plan-section {
  width: 100%;
  max-width: 300px;
}


.restaurant-photo {
  width: 100%;
  height: auto;
  max-width: 250px;
  margin-bottom: 10px;
}

.upload-button,
.delete-button {
  background-color: #ff6f3f;
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 250px;
  margin-bottom: 10px;
}

.upload-button:hover,
.delete-button:hover {
  background-color: #ff9f33;
}

.subscription-box {
  background-color: #FAEAE7;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: center;
}


.subscription-details {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: bold;
}

.payment-options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.payment-options label {
  display: flex;
  align-items: center;
  font-size: 10px;
}

.payment-options input {
  width: 20px;
  margin-right: 5px;
}

.payment-options label {
  margin-bottom: 10px;
}


</style>
