<template>
  <article class="article">
    <Flickity class="carousel" ref="flickity" :options="settings">
      <img class="img" src="../assets/img/img-1.jpeg" alt="Picture from a set." />
      <img class="img" src="../assets/img/img-2.jpeg" alt="Picture from a set." />
      <img class="img" src="../assets/img/img-3.jpeg" alt="Picture from a set." />
      <img class="img" src="../assets/img/img-4.jpeg" alt="Picture from a set." />
    </Flickity>

    <div class="controls">
      <svg class="svg" viewBox="0 0 320 512" @click="previous()">
        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
      </svg>
      <svg class="svg" viewBox="0 0 320 512" @click="next()">
        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
      </svg>
    </div>
  </article>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "Carousel",

  components: {
    Flickity,
  },

  data() {
    return {
      settings: {
        autoPlay: 5000,
        cellAlign: "left",
        initialIndex: Math.floor(Math.random() * Math.floor(4)),
        pageDots: false,
        pauseAutoPlayOnHover: true,
        prevNextButtons: false,
        setGallerySize: false,
        wrapAround: true,
      },
    };
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
  },
};
</script>

<style scoped>
.article {
  height: 100%;
  position: relative;
  width: 100%;
}

.carousel {
  height: 100%;
}

.controls {
  background-color: var(--low-contrast-color);
  bottom: 0;
  display: flex;
  gap: 1.25rem;
  height: auto;
  padding: 0.75rem;
  position: absolute;
  right: 14.975%;
  width: auto;
}

.img {
  height: 100%;
  margin-right: 1rem;
  object-fit: cover;
  object-position: top;
  width: 85%;
}

.svg {
  fill: var(--high-contrast-color);
  width: 1rem;
}

.svg:hover {
  cursor: pointer;
}
</style>