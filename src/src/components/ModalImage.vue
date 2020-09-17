<template>
  <div>
    <img @click="onClick()" class="img" :src="this.source" alt="Portfolio image" />

    <article @click="onClick()" class="modal" :class="{'modal-visible': showModal}">
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
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  right: 3rem;
  top: 1rem;
  transition: 0.3s ease-in-out;
  z-index: 550;
}

.close:focus,
.close:hover {
  color: #bbb;
  cursor: pointer;
  text-decoration: none;
}

.img {
  cursor: pointer;
  max-width: 20vw;
  transition: all 0.2s ease;
}

.img:hover {
  transform: scale(1.05);
}

.modal {
  background-color: rgba(0, 0, 0, 0.9);
  display: none;
  height: 100%;
  left: 0;
  overflow: auto;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 500;
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

@media (max-width: 980px) {
  .img {
    max-width: 42.75vw;
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>