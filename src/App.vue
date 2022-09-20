<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/Page/TheHeader.vue";
import TheFooter from "./components/Page/TheFooter.vue";
</script>

<template>
  <div v-cloak id="app" class="page-app">
    <TheHeader />
    <main class="page-main">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>
