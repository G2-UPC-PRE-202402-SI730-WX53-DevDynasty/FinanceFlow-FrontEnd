<script>
import 'primeicons/primeicons.css';


export default {
  name: "my-order",
  data() {
    return {
      orders: [
        {id: 1, name: 'Order #0001', restaurant: 'Ochi', status: 'In progress', date: '10/10/2024'},
        {id: 2, name: 'Order #0002', restaurant: 'La Mar', status: 'In progress', date: '12/10/2024'}
      ]
    };
  },
  methods: {
    goDetails(orderId) {
      this.$router.push({ name: 'order-details', params: { orderId } });
    }
  }
};
</script>

<template>
  <div class="order-container">
    <div class="header-container">
      <div class="header">
        <h1>Orders</h1>
      </div>
    </div>

    <div class="order-list">
      <div class="order-card" v-for="order in orders" :key="order.id">
        <Card>
          <div class="card-content">
            <div class="icon-container">
              <i class="pi pi-file-check" style="font-size: 7.5rem; color: black;"></i>
            </div>
            <div class="info-container">
              <h2> {{order.name}}</h2>
              <p><strong>Restaurant:</strong> <a href="#"> {{order.restaurant}}</a></p>
              <p><strong>Status:</strong> {{order.status}}</p>
              <p><strong>Date:</strong> {{order.date}}</p>
              <button label="see details" class="see-details-button" @click="goDetails(order.id)">See Details</button>
            </div>
          </div>
        </Card>
      </div>

    </div>
  </div>
</template>

<style scoped>
.order-container {
  background-color:#FAEAE7;
  padding: 20px;

}

.header-container {
  background-color: #FF7338;
  padding: 20px;
  border-radius: 0;
  margin-bottom: 0px;
  max-width: 750px;
  margin-left: 580px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.order-list {
  background-color: #FFCFBB;
  padding: 20px;
  border-radius: 0;
  max-width: 750px;
  margin-left: 580px;
  min-height: 700px;
}

.order-card {
  margin: 55px 0;
}

.card-content {
  display: flex;
  background: #FAEAE7;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 250px;
  max-width: 629px;
  margin-left: 5px;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 80px;
}

.info-container {
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
  align-content: flex-end;
  margin-left: 120px;
  color: black;
}

.info-container h2 {
  margin-bottom: 5px;
  text-align: center;
  width: 100%;
  color: black;
}

.see-details-button {
  background-color: #FF7338;
  color: white;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  min-width: 250px;
  min-height: 35px;
}

.see-details-button:hover {
  background-color: #ff9f33;
}
</style>
