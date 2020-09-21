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
  display: flex;
  flex-direction: column;
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

@media (min-width: 940px) {
  .article {
    height: calc(100vh - 1.25rem);
    position: sticky;
    top: 1rem;
    z-index: 1;
  }

  .legend {
    height: 192px;
    padding: 2.25rem 3.5rem 2.25rem 1rem;
  }

  .legend br:first-child,
  .legend br:last-child {
    display: inline-block;
  }

  .title {
    align-content: flex-start;
    display: grid;
    flex-grow: 1;
    justify-content: center;
    margin: 0;
    padding: 0 1rem 0 0;
    transform: rotate(180deg);
    writing-mode: tb-rl;
  }
}
</style>