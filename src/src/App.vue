<template>
  <div>
    <header></header>

    <main class="container">
      <Banner />

      <router-view class="content" />
    </main>
  </div>
</template>

<script>
import { Banner } from "./components";

export default {
  name: "App",

  components: {
    Banner,
  },
};
</script>

<style src="./assets/css/style.css" lang="css"></style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1.25rem);
}

.content {
  flex-grow: 1;
}
</style>