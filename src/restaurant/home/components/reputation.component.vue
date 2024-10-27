<script>
export default {
  name: "reputation-component",
  data() {
    return {
      info: {
        rating: 5,
        clients: 10
      },
      comments: [
        { id: 1, author: "Salina T.", text: "Such a good restaurant. I would love to order from here again soon! It was fast, and delicious." },
        { id: 2, author: "Michael R.", text: "I really enjoyed the meal. Yet I wish it was spicier, I will make sure to add a note next time, though." },
      ]
    }
  },
  methods: {
    renderStars(rating) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    }
  }
}
</script>

<template>
  <div class="reputation-wrapper">
    <!--Header-->
    <div class="header">
      <h1>Reputation</h1>
    </div>

    <!--Content-->
    <!--stars-received-->
    <div class="stars-received">
      <div class="stars-received-header">
        <h2>Stars received</h2>
      </div>
      <div class="stars-received-content">
        <p><span class="stars">{{ renderStars(info.rating) }}</span></p>
        <p class="stars-received-info">Out of {{ info.clients }} clients</p>
      </div>
    </div>

    <!--comments-->
    <div class="comments">
      <div class="comments-header">
        <h2>Comments</h2>
      </div>
      <div class="comments-list">
        <pv-card v-for="comment in comments" :key="comment.id" class="comment-card">
          <template #content>
            <div class="comment">
              <pv-avatar icon="pi pi-user" shape="circle" class="comment-avatar"/>
              <div class="comment-content">
                <h4>{{ comment.author }}</h4>
                <p>{{ comment.text }}</p>
              </div>
            </div>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reputation-wrapper {
  max-width: 470px;
  background-color: #ffcfbb;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 700px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.header {
  background-color: #ff5a22;
  color: white;
  text-align: center;
  padding: 20px 0;
  border-radius: 5px 5px 0 0;
  flex-shrink: 0;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

.stars-received {
  padding: 20px 25px;
}

.stars-received-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.stars-received-content {
  text-align: center;
  margin-top: 10px;
}

.stars {
  font-size: 60px;
  margin: 0;
}

.stars-received-info {
  font-size: 1rem;
}

.comments {
  padding: 20px 25px 20px 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
}

.comments-header h2 {
  margin: 0;
  font-size: 1.5rem;
  text-align: left;
}

.comments-list {
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  min-height: 0;
}

.comment-card {
  background-color: #faeae7;
  padding: 10px;
  border-radius: 5px;
}

.comment {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.comment-avatar {
  flex-shrink: 0;
}

.comment-content h4 {
  margin: 0;
  font-size: 1rem;
}

.comment-content p {
  margin: 5px 0 0 0;
  font-size: 0.9rem;
  color: #333;
}
</style>