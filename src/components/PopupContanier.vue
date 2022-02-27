<template>
  <div
    class="popup flex items-center w-full h-full top-0 left-0 justify-center fixed p-4 z-9999"
  >
    <div
      class="popup-black absolute w-full h-full top-0 left-0"
      @click="close"
    ></div>
    <div
      class="popup-box bg-white relative shadow-lg shadow-black min-w-min rounded-md"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {},
  methods: {
    onClick() {
      this.$emit("onClick");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.popup {
}
.popup-black {
  background-color: rgba(0, 0, 0, 0.3);
}
.popup-box {
  width: 80%;
}
</style>
