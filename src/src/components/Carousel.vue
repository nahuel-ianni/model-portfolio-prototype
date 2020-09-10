<template>
  <div>
    <Flickity :options="settings">
      <img src="../assets/img/img-1.jpeg" alt />
      <img src="../assets/img/img-2.jpeg" alt />
      <img src="../assets/img/img-3.jpeg" alt />
      <img src="../assets/img/img-4.jpeg" alt />
    </Flickity>

    <!-- <button @click="previous()">Custom Previous Button</button>
    <button @click="next()">Custom Next Button</button>-->
  </div>
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
        cellAlign: "left",
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
      },
    };
  },

  // methods: {
  //   next() {
  //     this.$refs.flickity.next();
  //   },

  //   previous() {
  //     this.$refs.flickity.previous();
  //   },
  // },
};
</script>

<style scoped>
div {
  background-color: var(--low-contrast-color);
  height: 100%;
}
img {
  height: 100%;
  object-fit: cover;
  object-position: top;
  width: 90%;
}
</style>