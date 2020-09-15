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
  padding: 10% 0 0 0;
}

.h2 {
  color: var(--high-contrast-color);
  font-weight: 600;
  mix-blend-mode: exclusion;
}

.link:before {
  bottom: -1px;
}

@media (max-width: 980px) {
  .h2 {
    color: var(--low-contrast-color);
    mix-blend-mode: unset;
  }

  .section {
    margin: 20% 0;
    padding: 0;
  }
}
</style>