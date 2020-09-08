<template>
  <div class="container">
    <ContactInformation />
  </div>
</template>

<script>
import { ContactInformation } from "./components";

export default {
  name: "App",
  components: {
    ContactInformation,
  },
};
</script>

<style src="./assets/css/style.css" lang="css"></style>

<style scoped>
.container {
  background: linear-gradient(
    to right,
    var(--high-contrast-color) var(--panel-size),
    var(--low-contrast-color) var(--panel-size) calc(var(--panel-size) * 2)
  );
  border-top: var(--space-unit) solid var(--low-contrast-color);
  height: 100vh;
  padding: var(--space-unit);
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
