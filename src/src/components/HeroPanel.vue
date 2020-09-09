<template>
  <section>
    <div class="header">
      <h1>Monique B.</h1>
      <p>Abstract photographer</p>
    </div>

    <p>
      My mission is to
      <br />immortalize beautiful
      <br />moments before they're
      <br />gone forever.
    </p>
  </section>
</template>

<script>
export default {
  name: "HeroPanel",
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
}
h1,
p {
  margin: 0;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100vh - calc(var(--space-unit) * 2));
}
section > p {
  background-color: var(--low-contrast-color);
  color: var(--high-contrast-color);
  font-weight: 300;
  padding: 3rem;
}

.header {
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding: 0 3rem;
  transform: rotate(-180deg);
  writing-mode: tb-rl;
}
</style>