<template>
  <div>
    <header></header>

    <main>
      <Banner />
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
