<template>
  <div>
    <header>
      <SiteNavigation />
    </header>

    <main class="container">
      <Banner class="banner" />

      <div class="contact desktop">
        <h2>Contact me</h2>
        <ContactInformation />
      </div>

      <router-view class="content" />

      <hr class="desktop rule" />
      <hr class="desktop rule vertical" />
    </main>

    <footer></footer>
  </div>
</template>

<script>
import { Banner, ContactInformation, SiteNavigation } from "./components";

export default {
  name: "App",

  components: {
    Banner,
    ContactInformation,
    SiteNavigation,
  },
};
</script>

<style src="./assets/css/style.css" lang="css"></style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1.25rem);
}

.content {
  flex-grow: 1;
}

@media (min-width: 940px) {
  .banner {
    grid-area: left;
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-rows: auto 1fr;
    grid-template-areas: "left top" "left bottom";
  }

  .contact {
    grid-area: top;
  }

  .content {
    grid-area: bottom;
    margin: 0 2.95rem 2.75rem 0;
  }

  .rule {
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    bottom: 1.5%;
    height: 0;
    position: fixed;
    right: 1.15%;
    width: 20%;
    z-index: 25;
  }

  .vertical {
    transform: rotate(90deg);
    transform-origin: 100% 50%;
  }
}
</style>