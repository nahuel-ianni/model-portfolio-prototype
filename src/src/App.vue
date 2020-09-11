<template>
  <div class="container">
    <header>
      <nav>
        <ul class="navigation-links">
          <li>
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <HeroPanel />

      <section class="content-panel">
        <ContactInformation />
        <router-view />

        <hr />
        <hr class="vertical" />
      </section>
    </main>
  </div>
</template>

<script>
import { ContactInformation, HeroPanel } from "./components";

export default {
  name: "App",
  components: {
    ContactInformation,
    HeroPanel,
  },
};
</script>

<style src="./assets/css/style.css" lang="css"></style>

<style scoped>
.container {
  background: linear-gradient(
    135deg,
    /* to right, */ var(--high-contrast-color) var(--panel-size),
    var(--low-contrast-color) var(--panel-size) calc(var(--panel-size) * 2)
  );
  border-top: var(--space-unit) solid var(--low-contrast-color);
  height: 100vh;
  padding: var(--space-unit) 0;
}
.content-panel {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 2rem;
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
  padding-bottom: 0.3rem;
  transition: all 0.2s ease-in-out;
}
.nav-link:hover,
.nav-link:focus {
  background-size: 95% 1px;
}
.navigation-links {
  display: flex;
  gap: 1.5rem;
}

hr {
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  bottom: 2.25%;
  height: 0;
  position: absolute;
  right: 2%;
  width: 20%;
}
.vertical {
  transform: rotate(90deg);
  transform-origin: 100% 50%;
}
</style>
