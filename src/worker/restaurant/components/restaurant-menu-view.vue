<script>
export default {
  name: 'RestaurantMenuView',
  data() {
    return {
      restaurant: {
        name: 'Ochi',
      },
      appetizers: [
        {name: 'Edamame', stock: 23, quantity: 0},
        {name: 'Gyozas', stock: 20, quantity: 0},
      ],
      mainDishes: [
        {name: 'Sushi Nigiri', stock: 21, quantity: 0},
        {name: 'Ramen de Cerdo', stock: 42, quantity: 0},
      ],
      drinks: [
        {name: 'Sake', stock: 15, quantity: 0},
        {name: 'Te Verde (Matcha)', stock: 30, quantity: 0},
      ]
    };
  },
  methods: {
    goToOrderDetails() {
      this.$router.push({name: 'restaurant-order-details', params: {name: this.restaurant.name}});
    }
  }
};
</script>

<template>
  <div class="restaurant-menu">
    <div class="menu-wrapper">
      <div class="header">
        <h2>Menu - {{ restaurant.name }}</h2>
        <p>Enter the amount of dishes you would like to include in your order</p>
      </div>

      <div class="menu-table">
        <div class="menu-header">
          <h2 class="menu-header-item">Dish</h2>
          <h2 class="menu-header-item">Stock</h2>
          <h2 class="menu-header-item">Quantity</h2>
        </div>

        <div class="menu-section">
          <h2>Appetizers</h2>
          <div class="menu-item" v-for="item in appetizers" :key="item.name">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-stock">{{ item.stock }}</span>
            <input type="number" v-model="item.quantity" min="0" :max="item.stock" class="item-quantity"/>
          </div>
        </div>

        <div class="menu-section">
          <h2>Main Dishes</h2>
          <div class="menu-item" v-for="item in mainDishes" :key="item.name">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-stock">{{ item.stock }}</span>
            <input type="number" v-model="item.quantity" min="0" :max="item.stock" class="item-quantity"/>
          </div>
        </div>

        <div class="menu-section">
          <h2>Drinks</h2>
          <div class="menu-item" v-for="item in drinks" :key="item.name">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-stock">{{ item.stock }}</span>
            <input type="number" v-model="item.quantity" min="0" :max="item.stock" class="item-quantity"/>
          </div>
        </div>
      </div>

      <pv-button
          label="Order"
          class="order-button"
          @click="goToOrderDetails()"/>
    </div>
  </div>
</template>

<style scoped>
.restaurant-menu {
  padding: 20px;
  margin-left: 240px;
  background-color: #ffe9e2;
  box-sizing: border-box;
  min-width: 550px;
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

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}

.header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.header p {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #333;
}

.menu-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.menu-header-item {
  width: 33%;
  text-align: center;
  margin: 10px 0;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.item-name {
  width: 33%;
  text-align: left;
}

.item-stock,
.item-quantity {
  width: 33%;
  text-align: center;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  margin: 0 0 0 90px;
}

.item-quantity {
  text-align: center;
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