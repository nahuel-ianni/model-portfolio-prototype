<template>
  <section class="section">
    <div class="div">
      <h1>Anastasia Arbos</h1>
      <p>Fashion model photographer</p>
    </div>

    <p>
      I moved to Milan
      <br />and want to shoot.
      <br />
      <br />Get in touch,
      <br />let's work together.
    </p>
  </section>
</template>

<style scoped>
.div {
  padding: 0 3rem;
  transform: rotate(180deg);
  writing-mode: tb-rl;
}

.section {
  align-items: center;
  display: grid;
  grid-template-rows: 1fr auto;
  height: calc(100vh - var(--margin-top));
}

.section > p {
  background-color: var(--low-contrast-color);
  color: var(--high-contrast-color);
  padding: 2.6rem 3rem;
}
</style>