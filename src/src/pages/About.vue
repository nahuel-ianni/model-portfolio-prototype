<template>
  <section class="section">
    <article>
      <h2>Welcome!</h2>

      <p>
        <br />I'm Anastasia, a passionate photographer.
        <br />
        <br />I've been part of the fashion industry for over 20 years now, as well as a hobbist landscape lover.
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
</style>