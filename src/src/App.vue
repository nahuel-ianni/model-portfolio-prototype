<template>
  <div>
    <header>
      <SiteNavigation />
    </header>

    <main class="main">
      <HeaderPanel />
      <router-view />
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
}

@media (max-width: 850px) {
  .main {
    display: flex;
    flex-direction: column;
    padding: var(--space-unit) 0;
  }
}
</style>
