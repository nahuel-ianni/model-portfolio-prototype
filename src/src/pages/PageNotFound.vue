<template>
  <div>
    <h2>We couldn't find the page you were looking for!</h2>
    <p>
      Click
      <router-link class="link" to="/">here to go back home</router-link>.
    </p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
div {
  margin-top: 13%;
}
h2 {
  color: var(--high-contrast-color);
  font-size: 2.5rem;
  font-weight: 600;
  mix-blend-mode: exclusion;
}

.link:before {
  bottom: -1px;
}
</style>