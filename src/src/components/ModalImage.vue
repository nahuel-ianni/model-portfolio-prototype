<template>
  <div @click="onClick()">
    <img class="img" :src="this.source" alt="Portfolio image" />

    <article class="modal" :class="{'modal-visible': showModal}">
      <span class="close">&times;</span>
      <img class="modal-content" :src="this.source" />
    </article>
  </div>
</template>

<script>
export default {
  name: "ModalImage",

  props: { src: String },

  data() {
    return { showModal: false };
  },

  computed: {
    source: function () {
      return require(`@/assets/img/${this.src}.jpeg`);
    },
  },

  methods: {
    onClick() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
.close {
  color: var(--high-contrast-color);
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  right: 1rem;
  top: 0;
  transition: 0.3s ease-in-out;
  z-index: 550;
}

.img {
  cursor: pointer;
  max-width: 42.75vw;
  transition: all 0.2s ease;
}

.img:hover {
  transform: scale(1.025);
}

.modal {
  background-color: rgba(0, 0, 0, 0.9);
  display: none;
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.modal-content {
  animation-name: zoom;
  animation-duration: 0.6s;
  object-fit: contain;
  width: 95%;
}

.modal-visible {
  display: flex;
  justify-content: center;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@media (min-width: 900px) {
  .img {
    width: 25vw;
  }
}
</style>