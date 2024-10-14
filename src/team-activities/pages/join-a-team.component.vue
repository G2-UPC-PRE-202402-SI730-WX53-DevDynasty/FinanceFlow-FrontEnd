<script>

export default {
  name: "join-team",

  data() {
    return {
      teamCode: ""
    }
  },

  methods: {
    joinTeam() {
      console.log(this.teamCode);
      this.$router.push("/team-activities/members");
    }
  }

}

</script>

<template>
  <div class="join-container">
    <div class="join-header">
      Team Member
    </div>
    <div class="join-content">
      <div class="card-container">
        <Card>
          <div class="card-header">
            Join a Team
          </div>
          <div class="card">
            <div class="join-team-form">
              <label for="teamCode">Enter code to join: </label>
              <span class="spacer"></span>
              <input type="text" v-model="teamCode" id="teamCode" class="input-field" placeholder="Enter team code here" />
              <br>
              <Button @click="joinTeam" class="join-button">Join Team</Button>
            </div>
          </div>
        </Card>
      </div>
      <p class="description">*The leader will provide you an unique code to join the team and process the orders.</p>

    </div>
  </div>
</template>

<style scoped>

.join-container {
  padding: 20px;
  margin-left: 200px;
  justify-content: center;
}


.join-header {
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

.join-content {
  background-color: #FFCFBB;
  padding: 20px;
  border-radius: 0 0 8px 8px;
  max-width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
}

Card {
  margin-top: 50px;
  margin-left: 700px;
  margin-right: 700px;
  height: 800px;
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
  display: block;
}


.join-button {
  background-color: #FF7338;
  color: #FFFFFF;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin: 1rem;
  font-size: 16px;
  cursor: pointer;
}

.input-field {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #FF7338;
  width: 280px;
  margin: 40px;
}

.spacer {
  margin-left: 48px;
}

</style>