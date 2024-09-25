<script>

import 'primeicons/primeicons.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'leader',
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

    <div class="leader-content">
      <div class="leader-header">
        Team Leader
      </div>
      <div class="card-container">
        <pv-card>
          <div class="card-header">
            Your Team
          </div>
          <div class="card">
            <p><strong>Legends:</strong> <span>25 workers</span></p>
            <p>Add coworker: 75T-U12</p>
          </div>
        </pv-card>

        <pv-card>
          <div class="card-header">
            Team preferences
          </div>

          <div class="card team-preferences">
            <p><strong>Most ordered dishes</strong></p>
            <p>Noodles, Lasagna, Lomo Saltado</p>

            <p><strong>Top restaurants of the team</strong></p>
            <p>La Mar, Palm & Vine</p>
          </div>
        </pv-card>

        <pv-card>
          <div class="card-header">
            Voting
          </div>
          <div class="card voting">
            <p>Voting code for meal: 23E-R45</p>
            <div class="vote-options">
              <div class="vote-item">
                <p><strong>Ochi</strong></p>
                <pv-button class="vote-button"><font-awesome-icon :icon="faCheck()"></font-awesome-icon></pv-button>
                <p class="results">24</p>
              </div>
              <div class="vote-item">
                <p><strong>Palm & Vine</strong></p>
                <pv-button class="vote-button"><font-awesome-icon :icon="faCheck()"></font-awesome-icon></pv-button>
                <p class="results">1</p>
              </div>
            </div>
          </div>
        </pv-card>

        <pv-card>
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
        </pv-card>

        <pv-card>
          <div class="card-header">
            Order Payment
          </div>

          <div class="card order-payment">
            <p><strong>Legends</strong> - 25 workers</p>
            <p>Oshi - Order #00000001 - Total: S/. 400.50</p>
            <p>Each member pays: S/. 16.02</p>
            <p>Each member pays for tip: S/. 7.00</p>
            <pv-button class="pay-button">Pay</pv-button>
          </div>
        </pv-card>

      </div>
    </div>

  </div>
</template>

<style scoped>

.leader-container {
  padding: 20px;
  margin-left: 80px;
  min-height: 0;
  flex: 1;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}


.leader-header {
  background-color: #FF7338;
  padding: 20px;
  border-radius: 8px 8px 0 0;
  max-width: 800px;
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

.pay-button {
  background-color: #FF7338;
  color: white;
  border: none;
  padding: 10px;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}

.results {
  margin-top: 5px;
}

select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #FF7338;
  width: 100%;
}


</style>

