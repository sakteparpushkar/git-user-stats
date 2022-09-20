<script setup>
import { onMounted } from "vue";
import UserList from "../components/Users/UserList.vue";
import { useStore } from "vuex";

const store = useStore();
onMounted(() => {
  store.dispatch("getUserList");
});
</script>

<template>
  <div>
    <UserList />
  </div>
</template>
