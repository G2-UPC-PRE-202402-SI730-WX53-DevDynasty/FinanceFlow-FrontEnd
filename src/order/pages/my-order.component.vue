<script>
import 'primeicons/primeicons.css';


export default {
  name: "my-order",
  data() {
    return {
      orders: []
    };
  },
  methods: {

  }
};
</script>

<template>
  <div class="order-container">
    <div class="header-container">
      <div class="header">
        <h1>MyOrders</h1>
      </div>
    </div>

    <div class="order-list">
      <div class="order-card">
        <pv-card>
          <div class="card-content">
            <div class="icon-container">
              <i class="pi pi-file-check" style="font-size: 7.5rem; color: black;"></i>
            </div>
            <div class="info-container">
              <h2>Order #0001</h2>
              <p><strong>Restaurant:</strong> <a href="#"> Ochi</a></p>
              <p><strong>Status:</strong>In progress</p>
              <p><strong>Date:</strong> 10/10/2024</p>
              <pv-button label="see details" class="see-details-button">See Details</pv-button>
            </div>
          </div>
        </pv-card>
      </div>

      <div class="order-card">
        <pv-card>
          <div class="card-content">
            <div class="icon-container">
              <i class="pi pi-file-check" style="font-size: 7.5rem; color: black;"></i>
            </div>
            <div class="info-container">
              <h2>Order #0002</h2>
              <p><strong>Restaurant:</strong> <a href="#"> La Mar</a></p>
              <p><strong>Status:</strong>In progress</p>
              <p><strong>Date:</strong> 12/10/2024</p>
              <pv-button label="see details" class="see-details-button">See Details</pv-button>
            </div>
          </div>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-container {
  background-color: #fbeae5;
  padding: 20px;
}

.header-container {
  background-color: #FF7338;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 0px;
  max-width: 750px;
  margin-left: 400px;
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
  border-radius: 8px;
  max-width: 750px;
  margin-left: 400px;
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
  min-width: 650px;
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
  text-align: left;
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
}

.see-details-button:hover {
  background-color: #ff9f33;
}
</style>