<template>
  <section>
    <div class="header">
      <h1>Monique B.</h1>
      <p>Abstract photographer</p>
    </div>

    <p>BOTTOM</p>
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
  padding: 2rem;
  text-align: center;
}

.header {
  display: flex;
  flex-direction: column;
  margin: auto;
  transform: rotate(-180deg);
  writing-mode: tb-rl;
}
</style>