<script>
import 'primeicons/primeicons.css';

export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<template>
  <div class="main-container">

    <div class="recent-restaurants-container">
      <div class="header-container">
        <div class="header">
          <h2>Recent Restaurants</h2>
          <span class="pi pi-angle-right angle-right"></span>
        </div>
      </div>

      <div class="restaurants-list">
        <div class="restaurant-card">
          <Card>
            <div class="card-content">
              <div class="image-container">
                <img src="https://via.placeholder.com/150" alt="Restaurant Image"/>
              </div>
              <div class="info-container">
                <h3>La Mar</h3>
                <p><strong>Address:</strong> <a href="#">Santiago de Surco</a></p>
                <p><strong>Schedule:</strong> 12:00 - 18:00</p>
                <p><strong class="rating-label">Rating:</strong>
                  <span v-for="n in 5" :key="n" class="pi pi-star-fill star"></span>

                </p>
                <button label="Read more" class="read-more-button">Read more</button>
              </div>
            </div>
          </Card>
        </div>

        <div class="restaurant-card">
          <Card>
            <div class="card-content">
              <div class="image-container">
                <img src="https://via.placeholder.com/150" alt="Restaurant Image"/>
              </div>
              <div class="info-container">
                <h3>Palm & Vine</h3>
                <p><strong>Address:</strong> <a href="#">Santiago de Surco</a></p>
                <p><strong>Schedule:</strong> 12:00 - 18:00</p>
                <p><strong class="rating-label">Rating:</strong>
                  <span v-for="n in 5" :key="n" class="pi pi-star-fill star"></span>
                </p>
                <button label="Read more" class="read-more-button">Read more</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>