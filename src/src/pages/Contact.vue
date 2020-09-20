<template>
  <section class="section">
    <h2>Contact me</h2>

    <p>
      I'm always open to new opportunities.
      <br />Inquiries of all kinds are welcomed!
    </p>

    <ContactInformation />
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
.section {
  background-color: var(--high-contrast-color);
}
</style>