<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <!-- <swiper-slide v-for="(card, index) in list" :key="index">
      <slot v-bind="{ ...card, index }" />
    </swiper-slide> -->
    <swiper-slide>
      <slot />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/swiper-bundle.css";

export default {
  name: "Swiperrr",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    list: Array,
    swiperWidth: Number,
    spaceBetween: Number,
  },
  computed: {
    swiperOption() {
      return {
        width: this.swiperWidth,
        spaceBetween: this.spaceBetween,
        autoplay: {
          disableOnInteraction: false,
        },
      };
    },
  },
  mounted() {},
  methods: {},
};
</script>
