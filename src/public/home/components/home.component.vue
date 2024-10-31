<script>
import 'primeicons/primeicons.css';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  data() {
    return {};
  }
};
</script>

<template>
  <div class="main-container">

    <div class="recent-restaurants-container">
      <div class="header-container">
        <div class="header">
          <h2>Recent Restaurants</h2>
          <span class="pi pi-angle-right angle-right"></span>
        </div>
      </div>

      <div class="restaurants-list">
        <div class="restaurant-card">
          <Card>
            <div class="card-content">
              <div class="image-container">
                <img src="https://via.placeholder.com/150" alt="Restaurant Image"/>
              </div>
              <div class="info-container">
                <h3>La Mar</h3>
                <p><strong>Address:</strong> <a href="#">Santiago de Surco</a></p>
                <p><strong>Schedule:</strong> 12:00 - 18:00</p>
                <p><strong class="rating-label">Rating:</strong>
                  <span v-for="n in 5" :key="n" class="pi pi-star-fill star"></span>

                </p>
                <pv-button label="Read more" class="read-more-button">Read more</pv-button>
              </div>
            </div>
          </Card>
        </div>

        <div class="restaurant-card">
          <Card>
            <div class="card-content">
              <div class="image-container">
                <img src="https://via.placeholder.com/150" alt="Restaurant Image"/>
              </div>
              <div class="info-container">
                <h3>Palm & Vine</h3>
                <p><strong>Address:</strong> <a href="#">Santiago de Surco</a></p>
                <p><strong>Schedule:</strong> 12:00 - 18:00</p>
                <p><strong class="rating-label">Rating:</strong>
                  <span v-for="n in 5" :key="n" class="pi pi-star-fill star"></span>
                </p>
                <pv-button label="Read more" class="read-more-button">Read more</pv-button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>


    <div class="recent-orders-container">
      <div class="recent-orders-header-container">
        <div class="recent-orders-header">
          <h2>Recent Orders</h2>
          <span class="pi pi-angle-right recent-orders-angle-right"></span>
        </div>
      </div>

      <div class="recent-orders-list">
        <div class="recent-order-card">
          <Card>
            <div class="recent-order-card-content">
              <div class="recent-order-icon-container">
                <i class="pi pi-receipt" style="font-size: 48px;"></i>
              </div>
              <div class="recent-order-info-container">
                <h3>Order #0001</h3>
                <p><strong>Status:</strong> Sent</p>
                <p><strong>Restaurant:</strong> La Mar</p>
              </div>
            </div>
          </Card>
        </div>

        <div class="recent-order-card">
          <Card>
            <div class="recent-order-card-content">
              <div class="recent-order-icon-container">
                <i class="pi pi-receipt" style="font-size: 48px;"></i>
              </div>
              <div class="recent-order-info-container">
                <h3>Order #0002</h3>
                <p><strong>Status:</strong> Sent</p>
                <p><strong>Restaurant:</strong> La Mar</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: flex-start;
  gap: 80px;
}
.recent-restaurants-container {
  padding: 20px;
}

.header-container {
  background-color: #FF7F50;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 0px;
  max-width: 550px;
  margin-left: 300px;

}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}


.restaurants-list {
  background-color: #FFCFBB;
  padding: 20px;
  border-radius: 8px;
  max-width: 550px;
  margin-left: 300px;
  min-height: 600px;
}

.restaurant-card {
  margin: 55px 0;
}

.card-content {
  display: flex;
  background: #FAEAE7;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 250px;

}

.image-container img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 40px;
}

.info-container {
  margin-left: 30px;
  font-size: 16px;
}

.info-container h3 {
  margin-bottom: 5px;
  text-align: center;
  width: 100%;
}

.read-more-button {
  background-color: #FF8C00;
  color: white;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
}

.read-more-button:hover {
  background-color: #ff9f33;
}

.angle-right {
  font-size: 32px;
  color: white;
}

.star {
  margin-right: 4px;
}

.rating-label {
  margin-right: 10px;
}

.recent-orders-container {
  background-color: #fbeae5;
  padding: 20px;
  margin-left: 20px;

}

.recent-orders-header-container {
  background-color: #FF7F50;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 0px;
  max-width: 450px;
}

.recent-orders-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.recent-orders-angle-right {
  font-size: 32px;
  color: white;
}

.recent-orders-list {
  background-color: #FFCFBB;
  padding: 40px;
  border-radius: 8px;
  max-width:450px;
  min-height: 700px;
}

.recent-order-card {
  margin: 35px 0;
}

.recent-order-card-content {
  display: flex;
  background: #FAEAE7;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  min-width: 280px;


}

.recent-order-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.recent-order-info-container {
  margin-left: 20px;
  font-size: 16px;
  text-align: left;
}

.recent-order-info-container h3 {
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
}


</style>