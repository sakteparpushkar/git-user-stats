<script setup>
import UserCard from "./UserCard.vue";

import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const usersList = computed(() => store.getters.getUserList);
</script>

<template>
  <div class="greetings">
    <h1>Top Users</h1>
    <div class="main-section">
      <div v-if="usersList.length === 0" class="center">
        <span class='center__label'>User Not Found</span>
      </div>
      <div v-else class="card" v-for="user in usersList">
        <UserCard :user="user" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 800;
  font-size: 2.6rem;
  text-align: center;
}

.main-section {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.card {
  box-sizing: border-box;
  transition: 0.3s;
  background: #fff;
  border-radius: 5px;
  width: var(--cardWidth);
  margin: var(--cardMargin);
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
