<template>
  <div>
    <img src="../assets/images/job.png" alt="" class="m-auto" />
    <div class="content px-10 pb-4">
      <p>
        維護與開發人力銀行求職者端網站開發，主要使用前端框架VueJS，
        新專案由設計師出稿，前端高度還原設計規格，並開發可共用元件以利重複使用。
      </p>
      <a
        href="https://www.104.com.tw/company/12v3o7uw"
        target="_blank"
        class="inline-block bg-sky-800 text-white py-1 px-10 rounded mt-4 border-0 font-bold"
        >前往網站</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Job",
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
