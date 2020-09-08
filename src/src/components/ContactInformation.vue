<template>
  <section>
    <h2>Cooperation</h2>

    <ul>
      <li>
        <a href="mailto:monique@ap.com">monique@ap.com</a>
      </li>
      <li>
        <a href="tel:+46812031580">+46 8 120 315 80</a>
      </li>
      <li>
        <p>
          inst:
          <a href="http://" target="_blank" rel="noopener noreferrer">@moniqueb</a>
        </p>
      </li>
      <li>
        <p>
          behance:
          <a href="http://" target="_blank" rel="noopener noreferrer">moniqueb</a>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ContactInformation",
};
</script>

<style scoped>
h2 {
  margin: 0;
}
p {
  margin: 0;
}
ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 15rem));
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>