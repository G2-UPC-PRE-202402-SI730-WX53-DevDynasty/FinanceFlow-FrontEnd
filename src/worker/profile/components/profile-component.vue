<script>
export default {
  name: "profile-component",
  data() {
    return {};
  }
}
</script>

<template>
  <div class="profile-container">
    <div class="header-container">
      <div class="header">
        <h1>Profile</h1>
      </div>
    </div>
      <div class="profile-list">
        <div style="columns: 2">
          <article>
            <label for="firstname">Name</label>
            <input id="firstname" placeholder="Enter your name">
            <label for="phone">Telephone Number</label>
            <input id="phone" placeholder="Enter your phone number">
          </article>
          <article>
            <label for="lastname">Lastname</label>
            <input id="lastname" placeholder="Enter your lastname">
            <label for="dni">DNI</label>
            <input id="dni" placeholder="Enter your DNI">
         </article>
        </div>
        <div style="">
          <label for="address">Address</label>
          <input id="address" placeholder="Enter your address">
          <label for="email">Email</label>
          <input id="email" placeholder="Enter your email">
          <label for="cpassword">Change Password</label>
          <input id="cpassword" placeholder="Enter your new password">
          <pv-button>Save</pv-button>
        </div>
        <div class="suscription">
          <div class="suscription-card">
            <pv-card>
              <div class="card-content">
                <div class="info-container">
                  <h2>La Mar</h2>
                  <p><strong>Address:</strong> <a href="#">Santiago de Surco</a></p>
                  <p><strong>Schedule:</strong> 12:00 - 18:00</p>
                </div>
              </div>
            </pv-card>
          </div>
      </div>
      </div>
  </div>
</template>

<style scoped>
.profile-container {
  background-color: #fbeae5;
  padding: 20px;
}

.header-container {
  background-color: #FF7F50;
  padding: 20px;
  margin-bottom: 0px;
  max-width: 850px;
  margin-left: 300px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}


.profile-list {
  background-color: #FFCFBB;
  padding: 20px;
  max-width: 850px;
  margin-left: 300px;
  min-height: 700px;
}

.profile-list input{
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 15px;
  border-radius: 5px;
  border-color: #FFFFFF;
  border-style: solid;
}

.profile-list label{
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

button{
  background-color: #FF7F50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border-color: #FF7F50;
  border-style: solid;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
}

button:hover{
  background-color: #b45431;
  border-color: #b45431;
  color: white;
}

</style>