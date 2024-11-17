<script>
export default {
  name: 'Restaurant-component',
  data() {
    return {
      restaurants: [
        {
          name: 'Ochi',
          address: 'Santiago de Surco, El Polo, 101',
          schedule: '12:00 - 18:00',
          rating: 5,
          image: 'src/assets/restaurant-1.jpg',
        },
        {
          name: 'Palm & Vine',
          address: 'Santiago de Surco, Las Nazarenas, 140',
          schedule: '12:00 - 18:00',
          rating: 5,
          image: 'src/assets/restaurant-2.jpg',
        },
      ],
      selectedTypeOfFood: null,
      selectedRating: null,
      typeOfFoodOptions: [
        {
          name: 'Type of Food',
          states: [
            {cname: 'Asian', code: 'AS'},
            {cname: 'Italian', code: 'IT'},
            {cname: 'Mexican', code: 'MX'},
            {cname: 'Vegetarian', code: 'VE'}
          ]
        }
      ],
      ratingOptions: [
        {
          name: 'Rating',
          states: [
            {cname: '5 Stars', code: 5},
            {cname: '4 Stars', code: 4},
            {cname: '3 Stars', code: 3},
            {cname: '2 Stars', code: 2},
            {cname: '1 Star', code: 1}
          ]
        }
      ]
    };
  },
  methods: {
    renderStars(rating) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    },
    goToDetails(name) {
      this.$router.push({name: 'RestaurantDetailsView', params: {name}});
    }
  }
};
</script>

<template>
  <div class="restaurants">
    <div class="restaurant-wrapper">
      <div class="header">
        <h1>Restaurants</h1>
      </div>

      <div class="search-section">
        <div class="search-container">
          <div class="search-label-container">
            <label for="restaurant-search" class="search-label">Search for a restaurant</label>
          </div>
          <div class="search-input-container">
            <pv-input-text id="restaurant-search" class="search-input-text"/>
            <pv-button class="p-button-outlined p-button-sm search-button" label="Search"/>
          </div>
        </div>

        <div class="filters">
          <div class="filter-item">
            <label for="type-of-food">Type of food</label>
            <p-cascade-select
                v-model="selectedTypeOfFood"
                :options="typeOfFoodOptions"
                optionLabel="cname"
                optionGroupLabel="name"
                :optionGroupChildren="['states']"
                placeholder="Select Type"
                class="cascade-select"/>
          </div>
          <div class="filter-item">
            <label for="rating">Rating</label>
            <p-cascade-select
                v-model="selectedRating"
                :options="ratingOptions"
                optionLabel="cname"
                optionGroupLabel="name"
                :optionGroupChildren="['states']"
                placeholder="Select Rating"
                class="cascade-select"/>
          </div>
        </div>
      </div>

      <div class="restaurant-list">
        <pv-card v-for="restaurant in restaurants" :key="restaurant.name" class="restaurant-card">
          <template #content>
            <div class="card-content">
              <div class="card-image">
                <img :src="restaurant.image" alt="Restaurant image" class="restaurant-image"/>
              </div>

              <div class="card-info">
                <h2>{{ restaurant.name }}</h2>
                <p>Address: {{ restaurant.address }}</p>
                <p>Schedule: {{ restaurant.schedule }}</p>
                <p>Rating: <span class="stars">{{ renderStars(restaurant.rating) }}</span></p>
                <pv-button
                    label="Read more"
                    class="read-more-button"
                    @click="goToDetails(restaurant.name)"/>
              </div>
            </div>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.restaurants {
  padding: 20px;
  margin-left: 240px;
  background-color: #ffe9e2;
  box-sizing: border-box;
  min-height: 100vh;
  min-width: 550px;
}

.restaurant-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffcfbb;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding-bottom: 40px;
}

.header {
  background-color: #ff5a22;
  color: white;
  text-align: center;
  padding: 20px 0;
  border-radius: 5px 5px 0 0;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

.search-section {
  padding: 20px;
  background-color: #ffcfbb;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.search-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 250px;
  margin-bottom: 6px;
}

.search-label-container {
  margin-bottom: -5px;
}

.search-input-container {
  display: flex;
  gap: 0;
}

.search-input-text {
  width: 200px;
  background-color: white;
  padding: 5px;
}

.search-button {
  background-color: #ff5a22;
  border: none;
  color: white;
  font-weight: bold;
  padding: 5px;
  font-size: 8px;
  border-radius: 3px;
}

.restaurant-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 0;
  background-color: #ffcfbb;
  padding: 0 20px 0 20px;
}

.restaurant-card {
  max-width: 600px;
  width: 100%;
  background-color: #faeae7;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.card-image {
  flex-shrink: 0;
  margin-left: 30px;
  margin-right: 30px;
}

.restaurant-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.card-info {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stars {
  color: black;
  font-size: 1.2rem;
}

.read-more-button {
  background-color: #ff5a22;
  width: 100%;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  border-radius: 5px;
  padding: 5px 0 5px 0;
}

.filters {
  display: flex;
  gap: 10px;
}

.filter-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 150px;
}

.cascade-select {
  width: 100%;
  background-color: #fff;
  padding: 8px;
  font-size: 0.9rem;
}

.cascade-select .p-cascadeselect {
  position: relative;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.cascade-select .p-cascadeselect .p-cascadeselect-trigger {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #ff5a22; /* Color del ícono */
}

.cascade-select .p-cascadeselect-panel {
  border-radius: 8px;
  border: 1px solid #ff5a22;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cascade-select .p-cascadeselect-panel .p-cascadeselect-item {
  padding: 8px;
  font-size: 0.9rem;
}

.cascade-select .p-cascadeselect-panel .p-cascadeselect-item:hover {
  background-color: #ffebd7;
}

.cascade-select .p-cascadeselect-label {
  color: #333;
}
</style>