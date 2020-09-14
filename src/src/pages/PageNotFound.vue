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
.section {
  padding: 17% 0 0 0;
}

.h2 {
  color: var(--high-contrast-color);
  font-size: 2.5rem;
  font-weight: 600;
  mix-blend-mode: exclusion;
}

.link:before {
  bottom: -1px;
}
</style>