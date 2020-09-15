<template>
  <div>
    <header>
      <SiteNavigation />
    </header>

    <main class="main">
      <HeaderPanel />

      <section class="content">
        <ContactInformation class="desktop" />
        <router-view />

        <hr class="desktop rule" />
        <hr class="desktop rule vertical" />
      </section>
    </main>

    <footer class="desktop"></footer>
  </div>
</template>

<script>
import { ContactInformation, HeaderPanel, SiteNavigation } from "./components";

export default {
  name: "App",

  components: {
    ContactInformation,
    HeaderPanel,
    SiteNavigation,
  },
};
</script>

<style src="./assets/css/style.css" lang="css"></style>

<style scoped>
.content {
  display: grid;
  gap: 2rem;
  grid-template-rows: auto minmax(50px, 100%);
  margin: 0 2.95rem 2.75rem 0;
}

.main {
  display: grid;
  grid-template-columns: auto 1fr;
}

.rule {
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  bottom: 1.5%;
  height: 0;
  position: absolute;
  right: 1.15%;
  width: 20%;
}

.vertical {
  transform: rotate(90deg);
  transform-origin: 100% 50%;
}

@media (max-width: 980px) {
  .content {
    border: .25rem solid var(--low-contrast-color);
    display: flex;
    height: 100%;
    margin: 0;
    padding: .75rem;
  }

  .main {
    background-color: var(--high-contrast-color);
    display: flex;
    flex-direction: column;
    height: calc(100vh - 1rem);
    padding-top: var(--space-unit);
  }
}
</style>
