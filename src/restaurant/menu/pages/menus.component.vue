<script>
import 'primeicons/primeicons.css';


export default {
  name: "menus",
  data() {
    return {
      menus: [
        { id: 1, name: 'Menu #0001', date: '08/10/2024'},
        { id: 2, name: 'Menu #0002', date: '07/10/2024'}
      ]
    };
  },
  methods: {
    seeDetails(menuId) {
      this.$router.push(`/menus/${menuId}`);
    },

    addMenu() {
      this.$router.push('/add-menu');
    }
  }
};
</script>

<template>
  <div class="menu-container">
    <div class="header-container">
      <div class="header">
        <h1>Menus</h1>
      </div>
    </div>

    <div class="menu-list">
      <div class="menu-card" v-for="menu in menus" :key="menu.id">
        <Card>
          <div class="card-content">
            <div class="icon-container">
              <i class="pi pi-file-check" style="font-size: 7.5rem; color: black;"></i>
            </div>
            <div class="info-container">
              <h2> {{ menu.name }}</h2>
              <p><strong>Date:</strong> {{menu.date}}</p>
              <button label="see details" class="see-details-button" @click="seeDetails(menu.id)">See Details</button>
            </div>
          </div>
        </Card>

      </div>

      <button label="Add Menu" class="add-menu-button" @click="addMenu">Add Menu</button>

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

.header-container {
  background-color: #FF7338;
  padding: 20px;
  border-radius: 8px 8px 0 0;
  margin-bottom: 0;
  max-width: 750px;
  margin-left: 200px;
  text-align: center;
  font-weight: bold;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
}

.menu-list {
  background-color: #FFCFBB;
  padding: 20px;
  border-radius: 0;
  max-width: 750px;
  margin-left: 200px;
  min-height: 700px;
}

.menu-card {
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
  margin-bottom: 50px;
  text-align: center;
  width: 100%;
  color: black;
}

.info-container p {
  margin-bottom: 50px;
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

.add-menu-button {
  background-color: #FF7338;
  color: white;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin: 0 180px;
  font-weight: bold;
  min-width: 250px;
  min-height: 35px;
}

.add-menu-button:hover {
  background-color: #ff9f33;
}

</style>