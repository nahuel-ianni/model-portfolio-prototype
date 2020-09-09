<template>
  <section>
    <h2>Cooperation</h2>

    <ul>
      <li>
        <a href="mailto:anastasia@arbos.com">anastasia@arbos.com</a>
      </li>
      <li>
        <a href="tel:+3902120135623">+39 02 120 135 623</a>
      </li>
      <li>
        <p>
          inst:
          <a href="http://" target="_blank" rel="noopener noreferrer">@anastasia.arbos</a>
        </p>
      </li>
      <li>
        <p>
          behance:
          <a href="http://" target="_blank" rel="noopener noreferrer">anastasia.arbos</a>
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
a,
p {
  color: var(--high-contrast-color);
  font-size: 0.9rem;
  font-weight: 200;
  mix-blend-mode: exclusion;
}
h2,
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