<template>
  <section>
    <h2>Portfolio</h2>
    <p>
      In here, you'll find a selection of my previous work.
      <br />If you want to see more, do not hesitate in contacting me!
    </p>

    <ul class="ul">
      <li><img class="img" src="../assets/img/img-1.jpeg" alt="Portfolio image" /></li>
      <li><img class="img" src="../assets/img/img-2.jpeg" alt="Portfolio image" /></li>
      <li><img class="img" src="../assets/img/img-3.jpeg" alt="Portfolio image" /></li>
      <li><img class="img" src="../assets/img/img-5.jpeg" alt="Portfolio image" /></li>
    </ul>
  </section>
</template>

<script>
export default { name: "Portfolio" };
</script>

<style scoped>
.img {
  max-width: 20vw;
}

.ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0 0 0;
}

@media (max-width: 980px) {
  .img {
    max-width: 42.75vw;
  }

  .ul {
    justify-content: space-evenly;
  }
}
</style>