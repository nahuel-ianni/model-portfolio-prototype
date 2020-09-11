<template>
  <section>
    <div class="header">
      <h1>Anastasia Arbos</h1>
      <p>Fashion model and photographer</p>
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

<script>
export default {
  name: "HeroPanel",
};
</script>

<style scoped>
h1,
p {
  margin: 0;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
section > p {
  background-color: var(--low-contrast-color);
  color: var(--high-contrast-color);
  font-weight: 300;
  padding: 3rem;
  width: 50vw;
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