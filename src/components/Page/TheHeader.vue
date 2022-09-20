<template>
  <header class="page-header">
    <div class="page-header__item">
      <img
        alt="Git logo"
        class="logo"
        src="@/assets/github-icon.svg"
        width="40"
        @click="backToUserPage"
      />
      <span class="page-header__title">Github Userboard</span>
      <input
        type="text"
        placeholder="Search Users"
        v-if="isSearchBoxVisible"
        @input="searchList"
      />
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDebounce } from "../../composed/useDebounce";

const route = useRoute();
const router = useRouter();
const { searchStr, searchList } = useDebounce(2000, "getSearchedUser");

const isSearchBoxVisible = computed(() => route.fullPath === "/");

function backToUserPage() {
  router.push({ path: "/" });
}
</script>

<style scoped>
.page-header {
  display: flex;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 4.8rem;
  background: #292f36;
  box-shadow: 0 0 1rem 0.5rem rgba($color-black, 0.3);
}
.page-header__item {
  display: flex;
  align-items: center;
  width: 100%;
}

.page-header__title {
  color: white;
  font-size: 22px;
  top: 0;
  left: 2%;
  width: inherit;
}

input {
  float: right !important;
  width: 40%;
  border-radius: 12px;
  border: 1px solid #ada9a9;
  padding: 1% 3%;
  margin: 1% 1%;
  background-image: url(@/assets/search-icon.svg);
  background-repeat: no-repeat;
  outline: 0;
  background-position: 12px;
  background-size: 16px;
  height: 40px;
}
</style>
