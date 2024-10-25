<script>
export default {
  name: 'RestaurantDetailsView',
  data() {
    return {
      restaurant: {
        name: 'Ochi',
        address: 'Santiago de Surco, El Polo, 101',
        schedule: '12:00 - 18:00',
        status: 'Open',
        rating: 5,
        image: '@/src/assets/restaurant-1.jpg',
      },
      comments: [
        { id: 1, author: 'Lily E.', text: "Didn't convince me a lot. It wasn't that bad but it could be better." },
        { id: 2, author: 'Maria M.', text: 'I want to have more meals from here, it was just so delicious.' },
        { id: 3, author: 'José L.', text: 'Want to order again already. It was a great meal!' }
      ]
    }
  },
  methods: {
    renderStars(rating) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating)
    },
    goToMenu() {
      this.$router.push({ name: 'restaurant-menu-view', params: { name: this.restaurant.name } });
    }
  }
}
</script>

<template>
  <div class="restaurant-details">
    <div class="restaurant-wrapper">
      <p-card class="restaurant-card">
        <template #content>
          <div class="card-content">
            <div class="card-image">
              <img src="../../assets/restaurant-1.jpg" alt="Restaurant image" class="restaurant-image" />
            </div>
            <div class="card-info">
              <h2>{{ restaurant.name }}</h2>
              <p>Address: {{ restaurant.address }}</p>
              <p>Schedule: {{ restaurant.schedule }}</p>
              <p>Status: {{ restaurant.status }}</p>
              <p>Rating: <span class="stars">{{ renderStars(restaurant.rating) }}</span></p>
              <p-button
                  label="See menu"
                  class="see-menu-button"
                  @click="goToMenu"/>
            </div>
          </div>
        </template>
      </p-card>
    </div>

    <div class="comments-wrapper">
      <h3>Comments</h3>
      <div class="comments-section">
        <p-card v-for="comment in comments" :key="comment.id" class="comment-card">
          <template #content>
            <div class="comment">
              <p-avatar icon="pi pi-user" shape="circle" />
              <div class="comment-text">
                <h4>{{ comment.author }}</h4>
                <p>{{ comment.text }}</p>
              </div>
            </div>
          </template>
        </p-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.restaurant-details {
  padding: 20px;
  margin-left: 240px;
  background-color: #ffe9e2;
  box-sizing: border-box;
  min-width: 550px;
}

.restaurant-wrapper, .comments-wrapper {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffcfbb;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.card-image {
  flex-shrink: 0;
  margin-left: 50px;
  margin-right: 50px;
}

.restaurant-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.card-info {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.comments-wrapper h3 {
  text-align: center;
  margin-bottom: 10px;
}

.comments-section {
  margin-top: 10px;
}

.comment-card {
  margin-bottom: 10px;
  background-color: #faeae7;
}

.comment {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 20px;
}

.comment-text {
  padding: 10px;
  border-radius: 8px;
  width: 100%;
}

.stars {
  color: black;
  font-size: 1.2rem;
}

.see-menu-button {
  background-color: #ff5a22;
  width: 100%;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  border-radius: 5px;
  padding: 5px 0;
}
</style>
