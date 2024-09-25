<script>
import 'primeicons/primeicons.css';
import {
  faBell,
  faHome,
  faPeopleGroup,
  faReceipt,
  faSignOut,
  faUser,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'sidenav-bar',
  methods: {
    faSignOut() {
      return faSignOut
    },
    faBell() {
      return faBell
    },
    faUser() {
      return faUser
    },
    faPeopleGroup() {
      return faPeopleGroup
    },
    faReceipt() {
      return faReceipt
    },
    faUtensils() {
      return faUtensils
    },
    faHome() {
      return faHome
    }
  },
  components: {FontAwesomeIcon},
  data() {
    return {}
  }
}

</script>

<template>
  <div class="sidenav">
    <router-link to="/" class="sn-item">
      <font-awesome-icon :icon="faHome()" /> Home
    </router-link>
    <router-link to="/restaurants" class="sn-item">
      <font-awesome-icon :icon="faUtensils()" /> Restaurants
    </router-link>
    <router-link to="/orders" class="sn-item">
      <font-awesome-icon :icon="faReceipt()"/> My orders
    </router-link>
    <router-link to="/team-activities" class="sn-item">
      <font-awesome-icon :icon="faPeopleGroup()"/> Team activities
    </router-link>
    <router-link to="/profile" class="sn-item">
      <font-awesome-icon :icon="faUser()"/> Profile
    </router-link>
    <router-link to="/" class="sn-item">
      <font-awesome-icon :icon="faBell()"/> Notifications
    </router-link>

    <div class="logo">
      <img src="@/assets/logo-gastrogo.png" alt="GastroGo Logo"/>
    </div>

    <router-link to="/" class="sn-item logout">
      <font-awesome-icon :icon="faSignOut()"/> Logout
    </router-link>
  </div>

</template>

<style scoped>



.sidenav {
  width: 240px;
  background: #1C8DA6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  color: #FFFFFF;
  margin: 0;
  position: fixed;
  bottom: 0;
  top: 0;
}

.sn-item {
  padding: 15px;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 500;
  width: 100%;
}

.sn-item:hover {
  background: #165873;
}

.logo {
  margin-top: 20px;
}

.logo img {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  object-fit: contain;
}

.logout {
  margin-top: auto;
  background: #165873;
}

</style>
