<template>
  <div class="hello flex items-center justify-center transition-all">
    <h1 class="font-bold text-7xl md:text-6xl border-b-4 border-white">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
