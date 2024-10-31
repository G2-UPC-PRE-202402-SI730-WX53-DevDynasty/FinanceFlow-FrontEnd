<script>
export default {
  name: 'OrderDetailsView',
  data() {
    return {
      showPaymentDialog: false,
      showCommentDialog: false,
      restaurant: {
        name: "Restaurant's Name",
        orderId: '#00000003',
        status: 'In process',
        date: '08/10/2024',
        deliveryTime: '14:00'
      },
      appetizers: [
        {name: 'Edamame', quantity: 20},
        {name: 'Gyozas', quantity: 5}
      ],
      mainDishes: [
        {name: 'Sushi Nigiri', quantity: 21},
        {name: 'Ramen de Cerdo', quantity: 4}
      ],
      drinks: [
        {name: 'Sake', quantity: 5},
        {name: 'Té Verde', quantity: 20}
      ]
    }
  },
  methods: {
    cancelOrder() {
      // Acción para cancelar el pedido
    },
    payOrder() {
      this.showPaymentDialog = true;
    },
    confirmPayment() {
      this.showPaymentDialog = false;
      this.showCommentDialog = true;
    },
    goToOrders() {
      this.showCommentDialog = false;
    }
  }
}
</script>

<template>
  <div :class="{'blur-background': showPaymentDialog || showCommentDialog}" class="order-details">
    <div class="order-wrapper">
      <h2>Order Details</h2>
      <p>Enter the hour you want to receive your order</p>
      <p class="note">*You only have 2 minutes to cancel the order after it's done</p>

      <div class="order-info">
        <div class="order-info-section">
          <p><strong>Restaurant:</strong> {{ restaurant.name }}</p>
          <p><strong>Date:</strong> {{ restaurant.date }}</p>
          <p><strong>Delivery Time:</strong> <span class="delivery-time-display">{{ restaurant.deliveryTime }}</span>
          </p>
        </div>
        <div class="order-info-section">
          <p><strong>Order Id:</strong> {{ restaurant.orderId }}</p>
          <p><strong>Status:</strong> {{ restaurant.status }}</p>
        </div>
      </div>

      <div class="menu-section">
        <h3>Appetizers</h3>
        <div class="menu-row">
          <span class="item-name">{{ appetizers[0].name }}</span>
          <span class="item-quantity">{{ appetizers[0].quantity }}</span>
          <span class="item-name">{{ appetizers[1].name }}</span>
          <span class="item-quantity">{{ appetizers[1].quantity }}</span>
        </div>

        <h3>Main Dishes</h3>
        <div class="menu-row">
          <span class="item-name">{{ mainDishes[0].name }}</span>
          <span class="item-quantity">{{ mainDishes[0].quantity }}</span>
          <span class="item-name">{{ mainDishes[1].name }}</span>
          <span class="item-quantity">{{ mainDishes[1].quantity }}</span>
        </div>

        <h3>Drinks</h3>
        <div class="menu-row">
          <span class="item-name">{{ drinks[0].name }}</span>
          <span class="item-quantity">{{ drinks[0].quantity }}</span>
          <span class="item-name">{{ drinks[1].name }}</span>
          <span class="item-quantity">{{ drinks[1].quantity }}</span>
        </div>
      </div>

      <div class="buttons">
        <pv-button label="Cancel" class="cancel-button" @click="cancelOrder"/>
        <pv-button label="Pay Order" class="pay-button" @click="payOrder"/>
      </div>
    </div>
    <p-dialog v-model:visible="showPaymentDialog" :style="{ width: '400px' }" modal class="payment-dialog">
      <div class="payment-dialog-content">
        <h3 class="dialog-header">Details of the Payment</h3>
        <p class="payment-note">
          *Remember that payment will be charged from each team member’s (including leader) account on an equal manner.
        </p>
        <div class="payment-info">
          <p><strong>Legends</strong> <span class="info-value">25 workers</span></p>
          <p><strong>Order #00000001</strong> <span class="info-value">Total: S/. 400.50</span></p>
          <p><strong>Each member pays:</strong> <span class="info-value">S/. 16.02</span></p>
          <p><strong>Each member pays for tip:</strong> <span class="info-value">S/. 7.00</span></p>
        </div>
        <pv-button label="Confirm Payment" class="confirm-payment-button" @click="confirmPayment"/>
      </div>
    </p-dialog>
    <p-dialog v-model:visible="showCommentDialog" :style="{ width: '400px' }" modal>
      <div class="dialog-content">
        <h3 class="dialog-header">Order Created!</h3>
        <p>Your order was accepted and it will arrive at the hour you have chosen!</p>
        <pv-button label="Go to My Orders" class="confirm-payment-button" @click="goToOrders"/>
      </div>
    </p-dialog>
  </div>
</template>

<style scoped>
.order-details {
  padding: 20px;
  margin-left: 240px;
  background-color: #ffe9e2;
  box-sizing: border-box;
  min-width: 550px;
}

.order-wrapper {
  background-color: #ffcfbb;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.order-info {
  display: flex;
  justify-content: space-between;
  background-color: #ffe9e2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 1rem;
}

.order-info-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.delivery-time-display {
  display: inline-block;
  width: 60px;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
}

.menu-section {
  margin-top: 20px;
  background-color: #ffe9e2;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
}

.menu-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
}

.item-name {
  width: 15%;
  font-weight: bold;
}

.item-quantity {
  width: 21%;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  margin: 0 40px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 0 20px;
}

.cancel-button, .pay-button {
  width: 45%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.cancel-button {
  background-color: #ff5a22;
  color: white;
}

.pay-button {
  background-color: #ff5a22;
  color: white;
}

.payment-dialog .dialog-header {
  background-color: #ff5a22;
  color: white;
  text-align: center;
}

.payment-dialog-content {
  background-color: #ff5a22;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.payment-note {
  font-size: 0.9rem;
  color: #f8f9fa;
  margin-bottom: 20px;
}

.payment-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}

.payment-info p {
  display: flex;
  justify-content: space-between;
}

.info-value {
  font-weight: bold;
  color: #f8f9fa;
}

.confirm-payment-button {
  width: 100%;
  margin-top: 20px;
  background-color: white;
  color: #ff5a22;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}

.dialog-header {
  color: white;
  text-align: center;
}

.dialog-content {
  background-color: #ff5a22;
  padding: 20px;
  text-align: center;
  color: white;
  border-radius: 8px;
}

.confirm-payment-button {
  background-color: white;
  color: #ff5a22;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  width: 100%;
}

.blur-background {
  filter: blur(5px);
  transition: filter 0.3s ease;
}
</style>