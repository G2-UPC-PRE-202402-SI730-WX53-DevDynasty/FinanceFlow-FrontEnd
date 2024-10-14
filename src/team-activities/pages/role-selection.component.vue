<script>

export default {
  name: 'role-selection',

  methods: {
    goToLeader() {
      this.$router.push('/team-activities/create-team');
    },

    goToMember() {
      this.$router.push('/team-activities/join-a-team');
    }
  }
}

</script>

<template>
  <div class="roles">
  <div class="role-header">
  What is your role?
  </div>
  <div class="role-selection">
    <p>Remember that each member (including the leader) have to add a method of payment since it will be automatically done after confirming an order.</p>
    <div class="role-buttons">
      <button @click="goToLeader" class="role-button">
        Team Leader
      </button>
      <p class="description">*You will be the one making the order for your team!</p>

    <button @click="goToMember" class="role-button">
      Team Member
    </button>
    <p class="description">*You will join the team of your leader and vote for the restaurant you want!</p>
    </div>
  </div>
  </div>
</template>

<style scoped>

.roles {
  padding: 20px;
  margin-left: 80px;
}


.role-header {
  background-color: #FF7338;
  padding: 20px;
  border-radius: 8px 8px 0 0;
  max-width: 600px;
  text-align: center;
  max-height: 76.5px;
  font-size: 24px;
  color: #FFFFFF;
  font-weight: bold;
}

.role-selection {
  background-color: #FFCFBB;
  padding: 2rem;
  border-radius: 0 0 8px 8px;
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.role-buttons {
  margin-top: 1rem;
}

.role-button {
  background-color: #FF7338;
  color: #FFFFFF;
  padding: 2rem 3rem;
  border: none;
  border-radius: 5px;
  margin: 1rem;
  font-size: 16px;
  cursor: pointer;
}

a {
  text-decoration: none !important;
  color: #FFFFFF;
}

a:hover {
  text-decoration: none !important;
  color: #000000;
}

.role-button:hover {
  background-color: #FAB091;
}

.description {
  font-size: 14px;
  color: #000000;
  margin-top: 0.5rem;
}

</style>