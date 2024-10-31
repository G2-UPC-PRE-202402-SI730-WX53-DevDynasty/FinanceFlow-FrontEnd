<script>

export default {
  name: "menu-details",
  data() {
    return {
      menus: {
          id: 1,
          appetizers: [
            {id: 1, name: "Edamame", quantity: 23},
            {id: 2, name: "Gyozas", quantity: 20}
          ],
          mainDishes: [
            {id: 1, name: "Sushi Nigiri", quantity: 42},
            {id: 2, name: "Ramen de Cerdo", quantity: 21}
          ],
          drinks: [
            {id: 1, name: "Sake", quantity: 30},
            {id: 2, name: "Te Verde (Matcha)", quantity: 5}
          ],
          price: 16
        },
          id: 2,
          appetizers: [
            {id: 1, name: "Takoyaki", quantity: 23},
            {id: 2, name: "Sunomono", quantity: 20}
          ],
          mainDishes: [
            {id: 1, name: "Sushi Sashimi", quantity: 42},
            {id: 2, name: "Ramen de Pollo", quantity: 21}
              ],
          drinks: [
            {id: 1, name: "Asahi", quantity: 30},
            {id: 2, name: "Ramune", quantity: 5}
          ],

          price: 18
    };
  },

  methods: {
    goBack() {
      this.$router.push('/menus');
    }
  }
};

</script>

<template>
  <div class="menu-container">
    <div class="menu-header">
      Menus
    </div>
    <div class="menu-content">
      <div class="menu-card">
        <h3>Menu #{{ menus.id }}</h3>

        <div class="menu-section appetizers">
          <h4>Appetizers</h4>
          <p>{{ menus.appetizers[0].name }} <span>{{ menus.appetizers[0].quantity }}</span></p>
          <p>{{ menus.appetizers[1].name }} <span>{{ menus.appetizers[1].quantity }}</span></p>
        </div>

        <div class="menu-section main-dishes">
          <h4>Main Dishes</h4>
          <p>{{ menus.mainDishes[0].name }} <span>{{ menus.mainDishes[0].quantity }}</span></p>
          <p>{{ menus.mainDishes[1].name }} <span>{{ menus.mainDishes[1].quantity }}</span></p>
        </div>

        <div class="menu-section drinks">
          <h4>Drinks</h4>
          <p>{{ menus.drinks[0].name }} <span class="spacer"></span> <span>{{ menus.drinks[0].quantity }}</span></p>
          <p>{{ menus.drinks[1].name }} <span class="spacer"></span> <span>{{ menus.drinks[1].quantity }}</span></p>
        </div>

        <div class="menu-price">
          <h4>Price</h4>
          <p>{{ menus.price }} soles</p>
        </div>

      </div>
      <button @click=goBack class="go-back-button">Go back to Menus</button>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  padding: 20px;
  margin-left: 200px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 0;
  flex: 1;
  display: grid;
}

.menu-header {
  background-color: #FF7338;
  padding: 20px;
  border-radius: 8px 8px 0 0;
  max-width: 1000px;
  text-align: center;
  max-height: 76.5px;
  font-size: 24px;
  color: #FFFFFF;
  font-weight: bold;
}

.menu-content {
  background-color: #FFCFBB;
  padding: 20px;
  border-radius: 0 0 8px 8px;
  max-width: 100%;
  margin: auto;
  text-align: center;
  display: grid;
}

.menu-card {
  background-color: #FFA07A;
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
}

.menu-section {
  margin: 10px 0;
  display: grid;
}

.menu-section h4 {
  margin-bottom: 10px;
}

.menu-section p {
  display: flex;
  justify-content: space-between;
}

.go-back-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FF7F50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.go-back-button:hover {
  background-color: #FF6347;
}

.spacer {
  margin: 0 90px;
}

</style>