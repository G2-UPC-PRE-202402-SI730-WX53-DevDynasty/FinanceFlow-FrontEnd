<script >
export default {
  name: "order-tracker",
  methods: {
    goToOrder() {
      this.$router.push({ name: "my-order" });
    },
  },
}
</script>

<template>
  <div class="order-container">
    <div class="order-tracker-details">
      <div class="header">
        <h1>Order Tracker</h1>
        <p class="small-text"> Check where your order is! </p>
      </div>
      <div class="order-tracker-card">
        <Card>
          <div class="card-content">
            <img src="../../assets/order-tracker.png" alt="OrderTracker image" class="orderTracker-image"/>
            <div class="info-card">
              <p><strong>Your order is: </strong></p>
              <div class="tracker-item">
                <span>Status </span>
                <input type="text">
                <span>Will arrive in </span>
                <input type="text">
              </div>

              <p><strong>Estimated time to arrive: </strong> Between 13:50 - 14:00</p>

            </div>
          </div>
        </Card>
      </div>
      <button label="Go back to Orders" class="goBack-button" @click="goToOrder()">Go back to Orders</button>
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
.order-tracker-details {
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
  min-height: 620px;
}
.goBack-button {
  background-color: #FF7338;
  border: none;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  min-width: 285px;
  min-height: 40px;
  margin-left: 27%;
  margin-top: 45px;

}
.goBack-button:hover {
  background-color: #ff9f33;
}
.orderTracker-image{
  margin-top: 20px;
  max-width: 600px;
  height: auto;
  margin-left: 20px;

}
.info-card{
  margin-top: 30px;
  margin-left: 20px;

}
.tracker-item{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
}
.info-card p:last-of-type {
  text-align: center;
  margin-top: 10%;
}


</style>