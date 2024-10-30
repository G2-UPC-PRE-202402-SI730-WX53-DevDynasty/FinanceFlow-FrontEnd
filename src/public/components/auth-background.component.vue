<script>
export default {
  name: "AuthBackground",
  methods: {
    goToLogIn() {
      this.$router.push({ name: 'login' });
    },
},
};
</script>


<template>
  <div class="background-section">
    <img src="../../assets/backgroung-introduction.png" alt="Restaurant Image" class="restaurant-image" />
    <div class="background-text">
      <h2>
        Transform your meals <br>
        into a flavoury <br>
        experience&nbsp;beyond&nbsp;your <br>
        imaginations and get it <br>
        quickly!
      </h2>
    </div>
    <img src="../../assets/logo-gastrogo.png" alt="GastroGo Logo" class="Logo" @click="goToLogIn"/>
  </div>
</template>



<style scoped>
.background-section {
  width: 900px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.restaurant-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: -100px;
}
.background-text {
  position: relative;
  z-index: 1;
  padding: 20px;
  max-width: 300px;
  left: -120px;
  text-align: left;
  word-break: keep-all;
  max-width: 450px;
}
.background-text h2 {
  font-size: 36px;
  line-height: 1.2;
  margin: 0;
  white-space: normal;
}
.Logo {
  position: absolute;
  top: 20px;
  right: -950px;
  width: 150px;
}
</style>
