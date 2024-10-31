<template>
  <div class="profile-container">
    </div>
          </div>
            <label for="phone">Telephone Number</label>
            <label for="dni">DNI</label>
          </div>
          <label for="address">Address</label>
          <label for="email">Email</label>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "Lucas",
        lastNames: "Fernandez",
        phone: "999888777",
        dni: "45789642",
        address: "Santiago de Surco, El Derby, 408",
        email: "lucasf@gmail.com",
        password: "",
        monthlyPayment: true,
        annualPayment: false,
      },
    };
  },
  methods: {
    saveData() {
      console.log("Data saved:", this.userData);
    },
    addPaymentMethod() {
      console.log("Adding a new payment method.");
    },
  },
};
</script>

<style scoped>
.profile-container {
}

  padding: 20px;
}

  align-items: center;
}

  background-color: #FFCFBB;
}

  padding: 10px;
  border-radius: 5px;
}

  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-weight: bold;
}

.save-button:hover {
  background-color: #ff9f33;
}

.space-form-suscription{
  padding: 30px;
}
.space-name-lastname{
  padding: 10px;
}
.subscription-box {
  margin-bottom: 20px;
}

.subscription-box h3 {
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
}

.conteiner-subscription-title{
  background-color: #FF7338;
  color: white;
  padding: 5px;
}

.subs-team-paid {
  display: flex;
  justify-content: space-between;
}

.subscription-details {
  font-size: 12px;
  background-color: #faeae7;
  margin-top: 0px;
  padding: 20px;
}
.subscription-details button {
  background-color: #FF7338;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
}
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
}

.payment-options {
  margin-top: 20px;
}
