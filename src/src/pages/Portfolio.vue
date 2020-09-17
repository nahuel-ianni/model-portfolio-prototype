<template>
  <section>
    <h2>Portfolio</h2>
    <p>
      In here, you'll find a selection of my previous work.
      <br />If you want to see more, do not hesitate in contacting me!
    </p>

    <ul class="ul">
      <li v-for="index in items" :key="index">
        <ModalImage :src="`img-${index}`" />
      </li>
    </ul>
  </section>
</template>

<script>
import { ModalImage } from "../components";

export default {
  name: "Portfolio",

  props: { items: Number, },

  components: { ModalImage },
};
</script>

<style scoped>
.ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0 0 0;
}

@media (max-width: 980px) {
  .ul {
    justify-content: space-evenly;
  }
}
</style>