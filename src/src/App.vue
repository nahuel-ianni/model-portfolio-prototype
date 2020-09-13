<template>
  <div>
    <header>
      <SiteNavigation />
    </header>

    <main class="main">
      <HeaderPanel />
    </main>
  </div>
</template>

<script>
import { HeaderPanel, SiteNavigation } from "./components";

export default {
  name: "App",
  components: {
    HeaderPanel,
    SiteNavigation,
  },
};
</script>

<style src="./assets/css/style.css" lang="css"></style>

<style scoped>
.main {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
}
</style>
