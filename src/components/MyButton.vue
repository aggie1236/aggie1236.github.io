<template>
  <div class="work relative box-border p-4 inline-block cursor-pointer">
    <div
      class="bg-gradient-to-br bg-white h-full w-full rounded-2xl shadow-md hover:shadow-lg flex items-center justify-center"
    >
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "work",
  props: {
    name: String,
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
  width: 180px;
  height: 180px;
}
.work > div {
}
</style>
