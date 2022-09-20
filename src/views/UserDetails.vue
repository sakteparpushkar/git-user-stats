<template>
  <div class="mrg-20">
    <img src="@/assets/back-icon.svg" alt="Back" @click="backToUserPage" />

    <img v-if="state.avtar_url" :src="state.avtar_url" alt="Users Img" class="img" />
    <img v-else src="@/assets/rubber-duck.svg" alt="Users Img" class="img" />
    <h1>{{ route.params.userName }}</h1>

    <UserRepos :repos="state.repos" />
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

import UserRepos from "../components/Users/UserRepos.vue";

const router = useRouter();
const route = useRoute();
const state = reactive({
  repos: [],
  avtar_url: "",
});
onMounted(() => {
  axios
    .get(`https://api.github.com/users/${route.params.userName}/repos`)
    .then((res) => {
      state.repos = res?.data;
      state.avtar_url =
        res?.data?.[0]?.owner.avatar_url;
      console.log(state);
    })
    .catch((error) => {
      console.log("Get Repos API returns with error", error);
    });
});

function backToUserPage() {
  router.push({ path: "/" });
}
</script>

<style>
h1 {
  text-align: center;
}

table {
  width: 100%;
}

.img {
  width: var(--cardWidth);
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
