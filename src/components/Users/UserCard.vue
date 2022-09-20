<script setup>
const props = defineProps(["user"]);
</script>

<template>
  <div class="greetings">
    <img
      class="user-img"
      v-if="props.user?.avatar_url"
      :src="props.user?.avatar_url"
      alt="Users Img"
      onerror="this.onerror=null; this.src='@/assets/rubber-duck.svg'"
    />
    <img v-else src="@/assets/rubber-duck.svg" alt="Users Img" class="img" />
    <div class="container">
      <div>
        <router-link
          :to="{ name: 'user', params: { userName: props.user?.login } }"
          >{{ props.user?.login }}</router-link
        >
      </div>
      <a :href="props.user?.html_url" target="_blank"
        ><img src="@/assets/link-icon.svg" alt="Git Url" />github</a
      >
    </div>
  </div>
</template>

<style scoped>
.user-img {
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.container {
  padding: 2px 16px;
  text-align: center;
}
</style>
