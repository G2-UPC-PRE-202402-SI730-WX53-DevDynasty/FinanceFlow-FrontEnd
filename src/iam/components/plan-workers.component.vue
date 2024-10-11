<script>
export default {
  name: "PlanWorkersComponent",
}
</script>

<template>
  <div class="login-page">
    <div class="background-section">
      <img src="../../assets/backgroung-introduction.png" alt="Restaurant Image" class="restaurant-image" />
      <div class="background-text">
        <h2>
          Transform your meals <br />
          into a flavoury <br />
          experience beyond your <br />
          imaginations and get it <br />
          quickly!
        </h2>
      </div>
    </div>
    <div class="login-section">
      <h1>Two plans available</h1>
      <p class="plans-description"> Two plans for you and your team, choose the one that <br> fits you better!</p>
      <div class="plan-section">
        <div class="plan-card basic">
          <h3>Basic</h3>
          <p>• You will have all the features available.</p>
          <p class="price"><strong>Free</strong></p>
        </div>
        <div class="plan-card premium">
          <h3>Premium</h3>
          <p>• All the features are available!</p>
          <p>• Get your orders faster!</p>
          <p>• Don't pay delivery!</p>
          <p>• Have special and exclusive discounts and offers for your team!</p>
          <p class="price"><strong>S/. 200 / monthly</strong></p>
        </div>
      </div>
      <div class="button-group">
        <button type="submit" class="continue-button">Continue in the app</button>
        <button type="submit" class="continue-button premium-button">Go to the next step</button>
      </div>
    </div>
    <img src="../../assets/logo-gastrogo.png" alt="GastroGo Logo" class="Logo" />
  </div>
</template>


<style scoped>

</style>