<script>

export default {
  name: 'add-menu',
  data() {
    return {
      menu: {
        appetizers: [
          { name: '', quantity: 0 },
          { name: '', quantity: 0 }
        ],
        mainDishes: [
          { name: '', quantity: 0 },
          { name: '', quantity: 0 }
        ],
        drinks: [
          { name: '', quantity: 0 },
          { name: '', quantity: 0 }
        ],
        price: 0
      }
    }
  },

  methods: {
    addMenu() {
      localStorage.setItem('menu', JSON.stringify(this.menu))
      console.log('Menu added')
    },

    onCancel() {
      this.$router.push('/menus')
    }
  }
}

</script>

<template>
  <div class="menu-form-container">
    <div class="menu-header">
      Menus
    </div>
    <div class="menu-content">
    <div class="menu-card">
      <h3>Create a Menu</h3>
      <p>*You will create a menu and define its price here</p>

      <div class="menu-section appetizers">
        <h4>Appetizers</h4>
        <input type="text" v-model="menu.appetizers[0].name" placeholder="Appetizer 1">
        <input type="number" v-model="menu.appetizers[0].quantity" placeholder="Quantity">
        <input type="text" v-model="menu.appetizers[1].name" placeholder="Appetizer 2">
        <input type="number" v-model="menu.appetizers[1].quantity" placeholder="Quantity">
      </div>

      <div class="menu-section main-dishes">
        <h4>Main Dishes</h4>
        <input type="text" v-model="menu.mainDishes[0].name" placeholder="Main Dish 1">
        <input type="number" v-model="menu.mainDishes[0].quantity" placeholder="Quantity">
        <input type="text" v-model="menu.mainDishes[1].name" placeholder="Main Dish 2">
        <input type="number" v-model="menu.mainDishes[1].quantity" placeholder="Quantity">
      </div>

      <div class="menu-section drinks">
        <h4>Drinks</h4>
        <input type="text" v-model="menu.drinks[0].name" placeholder="Drink 1">
        <input type="number" v-model="menu.drinks[0].quantity" placeholder="Quantity">
        <input type="text" v-model="menu.drinks[1].name" placeholder="Drink 2">
        <input type="number" v-model="menu.drinks[1].quantity" placeholder="Quantity">
      </div>

      <div class="menu-section price">
        <h4>Price</h4>
        <input type="number" v-model="menu.price" placeholder="Price">
        <span>soles</span>
      </div>


    </div>
      <div class="buttons">
        <button @click="onCancel">Cancel</button>
        <button @click="addMenu">Add Menu</button>
      </div>
    </div>
  </div>
</template>


<style scoped>

.menu-form-container {
  text-align: center;
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
  max-width: 880px;
  margin: auto;
  text-align: center;
  display: grid;
}

.menu-card {
  background-color: #FFA07A;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  margin: 0 auto;
}

.menu-section {
  margin: 10px 0;
}

.menu-section h4 {
  margin-bottom: 10px;
}

.menu-section input {
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #FF7F50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: #FF6347;
}

</style>