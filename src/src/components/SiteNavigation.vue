<template>
  <nav class="nav">
    <svg class="mobile svg" viewBox="0 0 448 512">
      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
    </svg>

    <ul class="ul" :class="{'expanded-menu': expandMenu}">
      <li><router-link class="a" to="/">Home</router-link></li>
      <li><router-link class="a" to="/about">About</router-link></li>
      <li><router-link class="a" to="/portfolio">Portfolio</router-link></li>
      <li><router-link class="a mobile" to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      expandMenu: false,
    };
  },

  methods: {
    toggleMenuVisibility: function (event) {
      if (this.expandMenu || event.target.localName === "path" || event.target.localName === "svg")
        this.expandMenu = !this.expandMenu;
    },
  },

  created: function () {
    window.addEventListener("click", this.toggleMenuVisibility);
  },

  destroyed: function () {
    window.removeEventListener("click", this.toggleMenuVisibility);
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

.nav {
  position: absolute;
  right: calc(var(--space-unit) * 1.5);
  text-align: right;
  top: var(--space-unit);
  z-index: 100;
}

.svg {
  cursor: pointer;
  fill: var(--low-contrast-color);
  width: 1.25rem;
}

.ul {
  display: flex;
  gap: 1.5rem;
}

@media (max-width: 850px) {
  .expanded-menu {
    left: 0vw !important;
  }

  .nav {
    right: calc(var(--space-unit) / 2);
    top: calc(var(--space-unit) / 1.5);
  }

  .ul {
    background-color: var(--low-contrast-color);
    flex-direction: column;
    height: 100%;
    left: 100%;
    overflow: hidden;
    padding: calc(var(--space-unit) / 2);
    position: fixed;
    right: 0;
    transition: left 0.2s ease-in-out;
  }
}
</style>