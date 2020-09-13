<template>
  <div>
    <header>
      <SiteNavigation />
    </header>

    <main>
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
