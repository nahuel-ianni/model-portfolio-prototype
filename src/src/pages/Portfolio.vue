<template>
  <section>
    <h2>Portfolio</h2>
    <p>
      This is but a sample of my previous work.
      <br />Want to see more? Get in touch with me!
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
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 980px) {
  .ul {
    gap: 0;
    justify-content: space-evenly;
    margin-top: .25rem;
  }
}
</style>