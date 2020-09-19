<template>
  <section class="section">
    <h2 class="h2">We couldn't find the page you were looking for!</h2>
    <p>
      Click
      <router-link class="link" to="/">here to go back home</router-link>.
    </p>
  </section>
</template>

<script>
export default { name: "PageNotFound" };
</script>

<style scoped>
.link:before {
  bottom: -1px;
}

.section {
  background-color: var(--high-contrast-color);
}
</style>