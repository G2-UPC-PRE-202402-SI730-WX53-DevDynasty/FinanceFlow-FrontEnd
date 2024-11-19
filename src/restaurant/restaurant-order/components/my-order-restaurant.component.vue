<script>
export default {
  name: "my-order-restaurant",
  data() {
    return {
      orders: [
        {
          id: 1,
          title: "Order #0001",
          restaurant: "Ochi",
          status: "In Process",
          date: "08/10/2024",
          link: "/order-details-restaurant"
        },
        {
          id: 2,
          title: "Order #0002",
          restaurant: "La Mar",
          status: "In Process",
          date: "08/10/2024",
          link: "/order-details-restaurant"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="main-container">
    <sidenav-bar-restaurant></sidenav-bar-restaurant>
    <div class="orders-container">
      <div class="header-container">
        <div class="header">
          <h3 class="orders-title">Orders</h3>
        </div>
      </div>

      <div class="orders-list">
        <div class="order-card" v-for="order in orders" :key="order.id">
          <mat-card appearance="outlined">
            <div class="order-content">
              <i class="pi pi-receipt" style="font-size: 48px;"></i>

              <div class="info-container">
                <p class="order-title">{{ order.title }}</p>
                <div class="details-container">
                  <p><strong>Restaurant:</strong> {{ order.restaurant }}</p>
                  <p><strong>Status:</strong> {{ order.status }}</p>
                  <p><strong>Date:</strong> {{ order.date }}</p>
                </div>
                <router-link class="read-more-button" :to="order.link">See details</router-link>
              </div>
            </div>
          </mat-card>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.main-container {
  display: flex;
}

.orders-container {
  padding: 20px;
  min-width: 750px;
  margin-left: 350px;
}

.header-container {
  background-color: #FF7F50;
  padding: 20px;
  border-radius: 0px;
  margin-bottom: 0;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.orders-title {
  margin: 0;
  font-size: 28px;
  text-align: center;
}

.orders-list {
  background-color: #FFCFBB;
  padding: 40px;
  border-radius: 8px;
  min-height: 690px;
  margin-top: 0px;
}

.order-card {
  margin: 40px 0;
}

.order-content {
  display: flex;
  background: #FAEAE7;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 250px;
  align-items: center;
  overflow: visible;
}

.order-icon {
  font-size: 9rem;
  margin-right: 20px;
  flex-shrink: 0;
  margin-top: 10px;
  margin-left: 30px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  overflow: visible;
}

.info-container {
  margin-left: 30px;
  font-size: 16px;
  flex-grow: 1;
}

.details-container {
  margin-top: 30px;
}

.read-more-button {
  color: white;
  text-decoration: none;
  border-radius: 5px;
  padding: 12px 10px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  max-width: 100px;
  background-color: #FF8C00;
}

.read-more-button:hover {
  background-color: #ff9f33;
}

.order-title {
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left;
  margin-left: 50px;
  font-weight: bold;
}
</style>
