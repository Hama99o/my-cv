<template>
  <div>
    <button class="btn modale-button" :class="buttonClass" @click="openModal" :disabled="disabledButton">
      <i :class="buttonIcon" v-if="buttonIcon"></i> {{buttonText}}
    </button>

    <div class="modal-container p-sm-5" :data-exists="exists" :data-show="isOpen" @click.self="closeModal">
      <div class="p-4 modal-content">
        <div class="d-flex justify-content-between">
          <h2>
            <i :class="modaleTitleIcon" v-if="modaleTitleIcon"></i> {{modaleTitle}}
          </h2>
          <button type="button" class="close d-flex align-items-start" aria-label="Close" @click.stop="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <slot class="my-3" />

        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click.stop="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modale',
  props: ['buttonText', 'buttonClass', 'buttonIcon', 'modaleTitle', 'modaleTitleIcon', 'disabledButton'],
  data () {
    return {
      isOpen: false,
      exists: false
    }
  },
  methods: {
    bodyScrollLock () {
      document.body.style.overflow = 'hidden'
    },
    bodyScrollUnlock () {
      document.body.style.overflow = 'auto'
    },
    openModal () {
      this.exists = true
      this.bodyScrollLock()
      this.$emit('open')

      setTimeout(() => {
        this.isOpen = true
      }, 0)
    },
    closeModal () {
      this.isOpen = false
      this.bodyScrollUnlock()

      setTimeout(() => {
        this.exists = false
        this.bodyScrollUnlock()
        this.$emit('close')
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .5);
  overflow-y: auto;

  display: none;
  align-items: flex-start;
  justify-content: center;

  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease-in-out;

  &[data-exists] {
    display: flex;
  }

  &[data-show] {
    opacity: 1;
    pointer-events: auto;

    & > .modal-content {
      transform: translateY(0);
    }
  }
}

.modal-content {
  cursor: auto;
  width: fit-content;
  width: -moz-fit-content;
  transform: translateY(-50px);
  transition: transform 200ms ease-in-out;
  background: $dark;
  color: $light;
}

@media (max-width: $sm) {
  .modal-content {
    width: 100%;
  }
}

.close {
  height: 24px;
}
</style>
