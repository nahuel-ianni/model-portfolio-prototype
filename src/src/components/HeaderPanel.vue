<template>
  <section class="section">
    <div class="title">
      <h1>Anastasia Arbos</h1>
      <p>Fashion model photographer</p>
    </div>

    <p class="subtitle">
      I moved to Milan
      <br />and want to shoot.
      <br />
      <br />Get in touch,
      <br />let's work together.
    </p>
  </section>
</template>

<style scoped>
.section {
  align-items: center;
  display: grid;
  grid-template-rows: 1fr auto;
  height: calc(100vh - var(--margin-top));
}

.subtitle {
  background-color: var(--low-contrast-color);
  color: var(--high-contrast-color);
  padding: 2.6rem 3rem;
  width: 100%;
}

.title {
  padding: 0 3rem;
  transform: rotate(180deg);
  writing-mode: tb-rl;
}

@media (max-width: 850px) {
  .section {
    display: flex;
    flex-direction: column;
    gap: var(--space-unit);
    height: auto;
    text-align: center;
  }

  .subtitle {
    padding: var(--space-unit);
  }

  .subtitle br:first-child,
  .subtitle br:last-child {
    display: none;
  }

  .title {
    transform: unset;
    writing-mode: unset;
  }
}
</style>