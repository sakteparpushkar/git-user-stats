<template>
  <div class="mrg-20">
    <table class="mrg-tp-20">
      <tr v-for="repo in props.repos">
        <td>
          <a :href="repo.owner.html_url" target="_blank">{{ repo.name }}</a>
        </td>
        <td>
          <img alt="Watched logo" class="logo" src="@/assets/watch-icon.svg" />
          {{ repo.watchers_count }}
        </td>
        <td>
          <img alt="Star logo" class="logo" src="@/assets/star-icon.svg" />
          {{ repo.stargazers_count }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
const props = defineProps(["repos"]);
</script>

<style>
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
