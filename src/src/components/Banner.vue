<template>
  <article class="article">
    <div class="title">
      <h1>Anastasia Arbos</h1>
      <p>Fashion model photographer</p>
    </div>

    <p class="legend">
      I've moved to Milan
      <br />and want to shoot.
      <br />
      <br />Get in touch,
      <br />let's work together.
    </p>
  </article>
</template>

<script>
export default { name: "Banner" };
</script>

<style scoped>
.article {
  text-align: center;
}

.legend {
  color: var(--high-contrast-color);
}

.legend br:first-child,
.legend br:last-child {
  display: none;
}

.title {
  background-color: var(--high-contrast-color);
  margin: 0 -0.25rem;
  padding: 1.25rem 0.125rem 0.125rem;
}
</style>