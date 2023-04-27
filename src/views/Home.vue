<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <img src="../assets/logo.png" alt="Vue logo">
    <h1>Hola mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Succes</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'no-entry' })
    },
  },
};
</script>

<style></style>
