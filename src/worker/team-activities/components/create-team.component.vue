<script>

export default {
  name: "create-team",

  data() {
    return {
      teamName: ""
    }
  },

  methods: {
    createTeam() {
      console.log(this.teamName);
      localStorage.setItem("teamName", this.teamName);
      this.$router.push("/team-activities/leader");
    }
  }

}

</script>

<template>
  <div class="create-container">
    <div class="create-header">
      Team Leader
    </div>
    <div class="create-content">
      <div class="card-container">
        <Card>
          <div class="card-header">
            Create a Team
          </div>
          <div class="card">
            <div class="create-team-form">
              <label for="teamName">Enter the name of your team: </label>
              <span class="spacer"></span>
              <input type="text" v-model="teamName" id="teamName" class="input-field" placeholder="Enter team name here" />
              <br>
              <Button @click="createTeam" class="create-button">Create Team</Button>
            </div>
          </div>
        </Card>
      </div>
      <p class="description">*As the leader of your team, you will have to choose a name. To let your teammates join it, you should share the special code provided.</p>

    </div>
  </div>
</template>

<style scoped>

.create-container {
  padding: 20px;
  margin-left: 200px;
  justify-content: center;
}


.create-header {
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

.create-content {
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


.create-button {
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