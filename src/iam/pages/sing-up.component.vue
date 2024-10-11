<script>
export default {
  name: "SingUpComponent",
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

    <div class="section-singup">
      <h1>What are you interested in?</h1>
      <div class="option-group">
        <button class="option-button">I am an employee!</button>
        <p>Order a whole menu for each of your coworkers at the palm of your hand.</p>
        <button class="option-button">I am the owner of a restaurant!</button>
        <p>Advertise your restaurant, increase the number of clients monthly and <br> have a good organization of each order.</p>
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

.section-singup {
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
  font-size: 36px;
  margin-bottom: 30px;
}

.option-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.option-button {
  width: 470px;
  max-width: 470px;
  padding: 15px;
  background-color: #fff;
  color: black;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
}

.option-button:hover {
  color: black;
}

.option-group p {
  margin: 0;
  font-size: 14px;
  color: #333;
  max-width: 550px;
  text-align: center;

}
</style>
