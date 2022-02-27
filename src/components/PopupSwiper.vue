<template>
  <PopupContainer>
    <!-- <SwiperContainer v-bind="$attrs">
      xxx
      <slot name="content" />
    </SwiperContainer> -->
    <slot />
  </PopupContainer>
</template>

<script>
import PopupContainer from "./PopupContanier.vue";
// import SwiperContainer from "./SwiperContainer.vue";
export default {
  name: "popupContainer",
  components: {
    PopupContainer,
    // SwiperContainer,
  },
  props: {},
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped>
.work {
}
</style>
