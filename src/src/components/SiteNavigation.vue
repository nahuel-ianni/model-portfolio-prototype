<template>
  <nav @click="toggleMenu" class="nav">
    <svg class="nav-menu svg" viewBox="0 0 384 384">
      <rect class="nav-menu" x="0" y="277.333" width="384" height="42.667" />
      <rect class="nav-menu" x="0" y="170.667" width="384" height="42.667" />
      <rect class="nav-menu" x="0" y="64" width="384" height="42.667" />
    </svg>

    <ul class="ul" :class="{'expanded-menu': expandMenu}">
      <li><router-link class="a" to="/">Home</router-link></li>
      <li><router-link class="a" to="/portfolio">Portfolio</router-link></li>
      <li><router-link class="a" to="/about">About</router-link></li>
      <li><router-link class="a mobile" to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SiteNavigation",

  data: function () {
    return { expandMenu: false };
  },

  methods: {
    toggleMenu: function (event) {
      if (this.expandMenu || event.target.classList.contains("nav-menu"))
        this.expandMenu = !this.expandMenu;
    },
  },
};
</script>

<style scoped>
.a {
  background-image: linear-gradient(
    90deg,
    var(--high-contrast-color),
    var(--high-contrast-color)
  );
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  color: var(--high-contrast-color);
  padding-bottom: 0.2rem;
  transition: all 0.2s ease-in-out;
}

.a:hover,
.a:focus,
.router-link-exact-active {
  background-size: 95% 1px;
}

.expanded-menu {
  left: 0vw !important;
}

.nav {
  display: flex;
  flex-direction: column;
  text-align: right;
  z-index: 100;
}

.svg {
  cursor: pointer;
  fill: var(--high-contrast-color);
  position: fixed;
  mix-blend-mode: difference;
  right: 1rem;
  top: 1.125rem;
  width: 1.25rem;
  z-index: 125;
}

.ul {
  background: var(--low-contrast-color);
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 100%;
  padding: 4rem 1rem;
  position: fixed;
  right: 0;
  top: -1rem;
  transition: left 0.2s ease-in-out;
  z-index: 100;
}

.ul li {
  margin-bottom: 2rem;
}

@media (min-width: 980px) {
  .nav {
    position: fixed;
    right: 0;
    text-align: right;
    top: 2.75rem;
    transform: translateX(-100%);
    z-index: 100;
  }

  .svg {
    display: none;
  }

  .ul {
    background-color: unset;
    flex-direction: row;
    gap: 1.25rem;
    padding: 0;
    position: relative;
  }
}
</style>