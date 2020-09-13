<template>
  <div>
    <header>
      <SiteNavigation />
    </header>
  </div>
</template>

<script>
import { SiteNavigation } from "./components";

export default {
  name: "App",
  components: {
    SiteNavigation,
  },
};
</script>

<style src="./assets/css/style.css" lang="css"></style>
