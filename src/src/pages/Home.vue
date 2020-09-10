<template>
  <section>
    <ContactInformation />
    <Carousel />
  </section>
</template>

<script>
import { Carousel, ContactInformation } from "../components";

export default {
  name: "Home",
  components: {
    Carousel,
    ContactInformation,
  },
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 2rem;
}
</style>