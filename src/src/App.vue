<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li>
            <a class="nav-link" href="">Home</a>
          </li>
          <li>
            <a class="nav-link" href="">About</a>
          </li>
          <li>
            <a class="nav-link" href="">Portfolio</a>
          </li>
          <li>
            <a class="nav-link" href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <HeroPanel />
      <Home />
    </main>
  </div>
</template>

<script>
import { Home } from "./pages";
import { HeroPanel } from "./components";

export default {
  name: "App",
  components: {
    HeroPanel,
    Home,
  },
};
</script>

<style src="./assets/css/style.css" lang="css"></style>

<style scoped>
main {
  display: grid;
  grid-template-columns: minmax(auto, 16.5rem) auto;
}
nav {
  position: fixed;
  right: 3rem;
  top: 2.5rem;
}
ul {
  display: flex;
  gap: 1.5rem;
}

.container {
  background: linear-gradient(
    to right,
    var(--high-contrast-color) var(--panel-size),
    var(--low-contrast-color) var(--panel-size) calc(var(--panel-size) * 2)
  );
  border-top: var(--space-unit) solid var(--low-contrast-color);
  height: 100vh;
  padding: var(--space-unit) 0;
}
.nav-link {
  background-image: linear-gradient(
    90deg,
    var(--high-contrast-color),
    var(--high-contrast-color)
  );
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  color: var(--high-contrast-color);
  padding-bottom: .3rem;
  transition: all .2s ease-in-out;
}
.nav-link:hover,
.nav-link:focus {
  background-size: 95% 1px;
}
</style>
