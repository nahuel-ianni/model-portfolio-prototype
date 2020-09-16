<template>
  <section class="section">
    <article>
      <h2>Welcome!</h2>

      <p class="p">
        <br />I'm Anastasia, a passionate photographer.
        <br />
        <br />I've been part of the fashion industry for over 20 years now, as well as a hobbist landscape lover.
        <br />I try to find beauty wherever I go and immortalize the through the lens of my camera, a faithful companion always at my side.
      </p>
    </article>

    <img
      class="desktop img"
      src="../assets/img/img-about.jpeg"
      alt="Myself, looking at you through the lens of a camera"
    />
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.img {
  margin: auto 0 auto auto;
  width: 25vw;
}

.p {
  color: var(--high-contrast-color);
  font-weight: 200;
  mix-blend-mode: exclusion;
}

.section {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr auto;
}

@media (max-width: 980px) {
  .section {
    display: block;
  }
}
</style>