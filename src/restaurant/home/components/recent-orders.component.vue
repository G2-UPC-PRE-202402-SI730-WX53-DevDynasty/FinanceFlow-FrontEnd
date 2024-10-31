<script>
export default {
  name: 'recent-orders',
  data(){
    return {
      orders: [
        {
          id: '0001',
          status: 'Sent',
          team: 'Legends'
        },
        {
          id: '0002',
          status: 'Sent',
          team: 'Treasure'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="recent-orders-wrapper">
    <!--Header-->
    <div class="header">
      <h1>Recent Orders</h1>
    </div>

    <!--Content-->
    <div class="order-list">
      <pv-card v-for="order in orders" :key="order.id" class="order-card">
        <template #content>
          <div class="card-content">
            <div class="card-order-icon">
              <img src="@/assets/order-icon.png" alt="order-icon" class="order-icon"/>
            </div>
            <div class="card-order-info">
              <h2>Order #{{order.id}}</h2>
              <p>Status: {{order.status}}</p>
              <p>Team: {{order.team}}</p>
            </div>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.recent-orders-wrapper {
  max-width: 470px;
  background-color: #ffcfbb;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 700px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.header {
  background-color: #ff5a22;
  color: white;
  text-align: center;
  padding: 20px 0;
  border-radius: 5px 5px 0 0;
  flex-shrink: 0;
}

h1{
  margin: 0;
  font-size: 2rem;
}

.order-list {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
}

.order-card{
  max-width: 395px;
  width: 100%;
  background-color: #faeae7;
  border-radius: 5px;
  padding: 5px;
  margin: 0 auto;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.card-order-icon{
  flex-shrink: 0;
  margin: 0 20px;
  padding: 15px;
}

.order-icon{
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.card-order-info{
  width: 100%;
  max-width: 190px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.card-order-info h2 {
  text-align: center;
  font-size: 1.1rem;
  margin: 4px;
}

.card-order-info p {
  font-size: 0.9rem;
  margin: 0;
}
</style>