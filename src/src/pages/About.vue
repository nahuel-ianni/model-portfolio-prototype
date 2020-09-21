<template>
  <section class="section">
    <article>
      <h2 class="title">Welcome!</h2>

      <p>
        <br />I'm Anastasia, a passionate photographer.
        <br />
        <br />I've been part of the fashion industry for over 20 years, as well as a hobbist landscape lover.
        <br />I try to find beauty wherever I go and immortalize it through the lens of my camera, a faithful companion always at my side.
      </p>
    </article>

    <img
      class="img"
      src="../assets/img/img-about.jpeg"
      alt="Myself, looking at you through the lens of a camera"
    />
  </section>
</template>

<script>
export default { name: "About" };
</script>

<style scoped>
.img {
  margin: auto;
  width: 100%;
}

.section {
  background-color: var(--high-contrast-color);
}

@media (min-width: 940px) {
  .img {
    object-fit: cover;
    object-position: center;
    height: 100%;
  }

  .section {
    color: var(--high-contrast-color);
    display: grid;
    font-weight: 200;
    gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
    mix-blend-mode: exclusion;
  }

  .title {
    font-weight: 400;
  }
}
</style>