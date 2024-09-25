<script>
export default {
  name: 'RestaurantMenuView',
  data() {
    return {
      restaurant: {
        name: 'Restaurant\'s Name',
      },
      appetizers: [
        { name: 'Edamame', stock: 23, quantity: 0 },
        { name: 'Gyozas', stock: 20, quantity: 0 },
      ],
      mainDishes: [
        { name: 'Sushi Nigiri', stock: 21, quantity: 0 },
        { name: 'Ramen de Cerdo', stock: 42, quantity: 0 },
      ],
      drinks: [
        { name: 'Sake', stock: 15, quantity: 0 },
        { name: 'Te Verde (Matcha)', stock: 30, quantity: 0 },
      ]
    };
  }
}
</script>

<template>
  <div class="restaurant-menu">
    <div class="menu-wrapper">
      <h2>Menu - {{ restaurant.name }}</h2>
      <p>Enter the amount of dishes you would like to include in your order</p>

      <div class="menu-table">
        <div class="menu-section">
          <h3>Appetizers</h3>
          <div class="menu-item" v-for="item in appetizers" :key="item.name">
            <span>{{ item.name }}</span>
            <span>{{ item.stock }}</span>
            <input type="number" v-model="item.quantity" min="0" :max="item.stock" />
          </div>
        </div>

        <div class="menu-section">
          <h3>Main Dishes</h3>
          <div class="menu-item" v-for="item in mainDishes" :key="item.name">
            <span>{{ item.name }}</span>
            <span>{{ item.stock }}</span>
            <input type="number" v-model="item.quantity" min="0" :max="item.stock" />
          </div>
        </div>

        <div class="menu-section">
          <h3>Drinks</h3>
          <div class="menu-item" v-for="item in drinks" :key="item.name">
            <span>{{ item.name }}</span>
            <span>{{ item.stock }}</span>
            <input type="number" v-model="item.quantity" min="0" :max="item.stock" />
          </div>
        </div>
      </div>

      <p-button label="Order" class="order-button" />
    </div>
  </div>
</template>

<style scoped>
.restaurant-menu {
  padding: 20px;
  margin-left: 240px;
  background-color: #ffe9e2;
  box-sizing: border-box;
}
.menu-wrapper {
  background-color: #ffcfbb;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu-table {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-section {
  margin-bottom: 20px;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.order-button {
  background-color: #ff5a22;
  color: white;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
}
</style>