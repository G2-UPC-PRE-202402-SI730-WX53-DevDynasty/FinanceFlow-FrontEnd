<script>
export default {
  name: "order-details",

  data() {
    return {
      showConfirmation: false,
      showDeleteConfirmation: false,
      order: {
        restaurant: "Ochi",
        date: "10/10/2024",
        deliveryTime: "14:00",
        orderNumber: "#0001",
        status: "In progress",
        appetizers: [
          { name: "Edamame", quantity: 20 },
          { name: "Gyozas", quantity: 5 },
        ],
        mainDishes: [
          { name: "Sushi Nigiri", quantity: 21 },
          { name: "Ramen de Cerdo", quantity: 4 },
        ],
        drinks: [
          { name: "Sake", quantity: 5 },
          { name: "Té verde", quantity: 20 },
        ],
      },
    };
  },
  methods: {
    goToOrder() {
      this.$router.push({ name: "my-order" });
    },
    cancelOrder() {
      this.showConfirmation = true;
    },
    closeConfirmation() {
      this.showConfirmation = false;
    },
    confirmCancellation() {
      this.showConfirmation = false;
      this.showDeleteConfirmation = true;
    },
  },
};
</script>


<template>
  <div class="order-container">
    <div class="order-details-list">
      <div class="header">
        <h1>Order Details</h1>
        <p class="small-text">Check the details of your order or cancel it</p>
      </div>
      <div class="order-card">
        <Card>
          <div class="card-content">
            <div class="info-container">
              <div class="column">
                <p><strong>Restaurant:</strong> <a href="#"> {{ order.restaurant }}</a></p>
                <p><strong>Date:</strong> {{order.date}}</p>
                <p><strong>Delivery Time:</strong> {{order.deliveryTime}} </p>
              </div>
              <div class="column">
                <p><strong>Order {{order.orderNumber}}</strong></p>
                <p><strong>Status:</strong> {{order.status}}</p>
                <p><router-link to="/order-tracker">Check the tracker</router-link></p>
              </div>
            </div>
          </div>
        </Card>
        <div class="menu-card">
          <Card>
            <div class="card-content">
              <div class="menu-item-container">
                <h2>Appetizers</h2>
                <div class="menu-items">
                  <div class="menu-item" v-for="item in order.appetizers" :key="item.name">
                    <p><strong> {{item.name}}:</strong> {{item.quantity}}</p>
                  </div>
                </div>
                <h2>Main Dishes</h2>
                <div class="menu-items">
                  <div class="menu-item" v-for="item in order.mainDishes" :key="item.name">
                    <p><strong>{{item.name}}:</strong> {{item.quantity}}</p>
                  </div>

                </div>
                <h2>Drinks</h2>
                <div class="menu-items">
                  <div class="menu-item" v-for="item in order.drinks" :key="item.name">
                    <p><strong> {{item.name}}:</strong> {{item.quantity}}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div class="button-container">
        <button class="action-button" @click="goToOrder()">Go back to Orders</button>
        <button class="action-button" @click="cancelOrder()">Cancel Order</button>
      </div>
    </div>


    <div v-if="showConfirmation" class="confirmation-message">
      <div class="confirmation-content">
        <h3>Are you sure you want to cancel the order?</h3>
        <p class="confirmation-text">Your order will be cancelled and we will notify the restaurant. There is no turning back.</p>
        <button @click="closeConfirmation" class="accept-button">Cancel</button>
        <button @click="confirmCancellation" class="accept-button">Accept</button>
      </div>
    </div>


    <div v-if="showDeleteConfirmation" class="confirmation-message">
      <div class="confirmation-content">
        <h3>Order successfully cancelled!</h3>
        <p class="confirmation-text">Your order has been cancelled! Feel free to order again soon!</p>
        <button @click="goToOrder" class="accept-button">Go back to Orders</button>
      </div>
    </div>



  </div>
</template>

<style scoped>
.order-container {
  background-color: #fbeae5;
  padding: 20px;
}
.header {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.small-text {
  font-size: 1rem;
  color: black;
  margin-top: 3px;
}
.order-details-list {
  background-color: #FFCFBB;
  padding: 20px;
  border-radius: 0px;
  max-width: 730px;
  margin-left: 580px;
  min-height: 877px;
  margin-top: 80px;
}
.card-content {
  display: flex;
  flex-direction: column;
  background: #FAEAE7;
  padding: 5px;
  border-radius: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  max-width: 650px;
  min-height: 150px;
}
.order-card, .menu-card {
  margin: 20px 0;
}
.info-container {
  display: flex;
  justify-content: space-between;
}
.column {
  flex: 1;
  padding: 10px;
  margin-left: 30px;
}
.menu-item-container {
  margin-left: 40px;
}
.menu-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}
.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-right: 20px;
}
.menu-item p {
  margin-right: 10px;
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 90px;
}

.action-button {
  background-color: #FF7338;
  border: none;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  min-width: 285px;
  min-height: 40px;
}

.action-button:hover {
  background-color: #ff9f33;
}

.confirmation-message {
  position: fixed;
  top: 50%;
  margin-left: 920px;
  transform: translate(-50%, -50%);
  background-color: #FF7338;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  min-width: 590px;
  min-height: 187px;
}
.accept-button {
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  margin-right: 10px;
  min-width: 193px;
  min-height: 48px;
}

</style>
