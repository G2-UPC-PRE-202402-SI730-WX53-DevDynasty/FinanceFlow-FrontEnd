<script>

import 'primeicons/primeicons.css'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'leader',

  data() {
    return {
      restaurants: [
        { id: 1, name: 'Ochi', votes: 24 },
        { id: 2, name: 'Palm & Vine', votes: 1},
        { id: 3, name: 'La Mar', votes: 0 }
      ],

      selectedRestaurant1: null,
      selectedRestaurant2: null,

    }
  },

  methods: {
    faCheck() {
      return faCheck
    }
  },

  components: {FontAwesomeIcon}
}

</script>

<template>
  <div class="leader-container">
    <div class="leader-header">
      Team Leader
    </div>
    <div class="leader-content">

      <div class="card-container">
        <Card>
          <div class="card-header">
            Your Team
          </div>
          <div class="card">
            <p><strong>Legends:</strong> <span>25 workers</span></p>
            <p>Add coworker: 75T-U12</p>
          </div>
        </Card>

        <Card>
          <div class="card-header">
            Team preferences
          </div>

          <div class="card team-preferences">
            <p><strong>Most ordered dishes</strong></p>
            <p>Noodles, Lasagna, Lomo Saltado</p>

            <p><strong>Top restaurants of the team</strong></p>
            <p>La Mar, Palm & Vine</p>
          </div>
        </Card>

        <Card>
          <div class="card-header">
            Voting
          </div>
          <div class="card voting">
            <p>Voting code for meal: 23E-R45</p>
            <div class="vote-options">
              <div class="vote-item">
                <select v-model="selectedRestaurant1">
                  <option v-for="restaurant in restaurants" :key="restaurant.id">
                    {{ restaurant.name }}
                  </option>
                </select>
                <Button class="vote-button">
                  <font-awesome-icon :icon="faCheck()"></font-awesome-icon>
                </Button>
                <p class="results"> 24 </p>
              </div>
              <span class="spacer"></span>
              <div class="vote-item">
                <select v-model="selectedRestaurant2">
                  <option v-for="restaurant in restaurants" :key="restaurant.id">
                    {{ restaurant.name }}
                  </option>
                </select>
                <Button class="vote-button">
                  <font-awesome-icon :icon="faCheck()"></font-awesome-icon>
                </Button>
                <p class="results"> 1 </p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div class="card-header">
            Rate the latest experience
          </div>

          <div class="card rate-experience">
            <p>Restaurant Name - Order #00000001</p>
            <select>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
              <option>Very Poor</option>
            </select>
          </div>
        </Card>

      </div>
    </div>

  </div>
</template>

<style scoped>

.leader-container {
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


.leader-header {
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

.leader-content {
  background-color: #FFCFBB;
  padding: 20px;
  border-radius: 0 0 8px 8px;
  max-width: 100%;
  margin: auto;
  text-align: center;
  display: grid;
}

.card-container {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.card-header {
  background-color: #FF7338;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
}

.card {
  background-color: #FAEAE7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}


.vote-options {
  display: flex;
  justify-content: space-between;
}

.vote-item {
  text-align: center;
}

.vote-button {
  background-color: #FF7338;
  color: white;
  border: none;
  padding: 10px;
  width: 60px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}

.vote-button :hover {
  background-color: #FAB091;
}

.results {
  margin-top: 10px;

}

select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #FF7338;
  width: 100%;
  margin-bottom: 20px;
}

.spacer {
  margin-left: 20px;
}


</style>

