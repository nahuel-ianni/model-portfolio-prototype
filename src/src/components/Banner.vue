<template>
  <section class="section">
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
  </section>
</template>

<script>
export default { name: "Banner" };
</script>

<style scoped>
.legend {
  color: var(--high-contrast-color);
}

.legend br:first-child,
.legend br:last-child {
  display: none;
}

.section {
  text-align: center;
}

.title {
  background-color: var(--high-contrast-color);
  margin: 0 -0.25rem;
  padding: 1rem 3rem 0.125rem;
}
</style>