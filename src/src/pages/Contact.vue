<template>
  <section class="section">
    <h2 class="mobile">Contact me</h2>

    <p>
      I'm always open to new opportunities.
      <br />Inquiries of all kinds are welcomed!
    </p>

    <ContactInformation class="mobile" />
  </section>
</template>

<script>
import { ContactInformation } from "../components";
export default {
  name: "Contact",

  components: { ContactInformation },
};
</script>

<style scoped>

@media (max-width: 980px) {
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
  }
}
</style>