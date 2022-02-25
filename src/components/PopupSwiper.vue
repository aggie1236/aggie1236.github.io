<template>
  <PopupContainer v-on="$listener">
    <SwiperContainer>
      <slot name="content" />
    </SwiperContainer>
  </PopupContainer>
</template>

<script>
import PopupContainer from "./PopupContanier.vue";
import SwiperContainer from "./SwiperContainer.vue";
export default {
  name: "work",
  components: {
    PopupContainer,
    SwiperContainer,
  },
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
