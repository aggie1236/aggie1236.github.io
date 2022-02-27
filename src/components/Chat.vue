<template>
  <div class="p-4">
    <img src="../assets/images/chat.png" class="m-auto" alt="" />
    <div class="content px-10 py-4">
      <p>Side Project/Vue/Nuxt/Websocket 偽裝成vscode的即時聊天系統</p>
      <p>使用heroku架設，第一次進去需要稍等啟動。</p>
      <a
        href="https://ide-chat.herokuapp.com/"
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
}
</style>
