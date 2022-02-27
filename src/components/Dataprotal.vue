<template>
  <div class="">
    <img src="../assets/images/dataprotal.png" alt="" />
    <div class="content px-10 pb-4">
      <p>
        內部權限申請表單系統／SPA／Vue，主要開發可快速組合的表單/表格共用元件。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dataprotal",
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
img {
  max-height: 440px;
  margin: auto;
}
</style>
