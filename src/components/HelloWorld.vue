<template>
  <div
    class="hello flex items-center justify-center transition-all"
    :class="[classNew]"
  >
    <svg class="intro" viewbox="0 0 200 86">
      <text
        text-anchor="start"
        x="10"
        y="30"
        class="text text-stroke"
        clip-path="url(#text1)"
      >
        Where
      </text>
      <text
        text-anchor="start"
        x="10"
        y="50"
        class="text text-stroke"
        clip-path="url(#text2)"
      >
        Ideas
      </text>
      <text
        text-anchor="start"
        x="10"
        y="70"
        class="text text-stroke"
        clip-path="url(#text3)"
      >
        Begyin.
      </text>
      <text
        text-anchor="start"
        x="10"
        y="30"
        class="text text-stroke text-stroke-2"
        clip-path="url(#text1)"
      >
        Where
      </text>
      <text
        text-anchor="start"
        x="10"
        y="50"
        class="text text-stroke text-stroke-2"
        clip-path="url(#text2)"
      >
        Ideas
      </text>
      <text
        text-anchor="start"
        x="10"
        y="70"
        class="text text-stroke text-stroke-2"
        clip-path="url(#text3)"
      >
        Begyin.
      </text>
      <defs>
        <clipPath id="text1">
          <text text-anchor="start" x="10" y="30" class="text">Where</text>
        </clipPath>
        <clipPath id="text2">
          <text text-anchor="start" x="10" y="50" class="text">Ideas</text>
        </clipPath>
        <clipPath id="text3">
          <text text-anchor="start" x="10" y="70" class="text">Begyin.</text>
        </clipPath>
      </defs>
    </svg>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      classNew: "",
    };
  },
  mounted() {
    // this.$nextTick(()=> {
    //   this.classNew = 'go';
    // })
  },
};
</script>

<style scoped></style>
