<template>
  <div>
    <header>
      <SiteNavigation />
    </header>

    <main class="main">
      <HeaderPanel />

      <div>
        <ContactInformation class="desktop" />
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import { ContactInformation, HeaderPanel, SiteNavigation } from "./components";

export default {
  name: "App",

  components: {
    ContactInformation,
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

@media (max-width: 980px) {
  .main {
    display: flex;
    flex-direction: column;
    padding: var(--space-unit) 0;
  }
}
</style>
