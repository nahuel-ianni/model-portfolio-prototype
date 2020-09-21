<template>
  <div>
    <header>
      <SiteNavigation />
    </header>

    <main class="container">
      <Banner />

      <router-view class="content" />
    </main>
  </div>
</template>

<script>
import { Banner, SiteNavigation } from "./components";

export default {
  name: "App",

  components: {
    Banner,
    SiteNavigation,
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

@media (min-width: 900px) {
  .container {
    flex-direction: row;
  } 
}
</style>