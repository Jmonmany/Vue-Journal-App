<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No Selected</h1>
    <FloatingBtn @on:click="goToAddEntry" />
  </div>
</template>

<script>
export default {
  components: {
    FloatingBtn: () =>
      import(
        /* webpackChunkName: "floating-btn" */ "../components/FloatingBtn"
      ),
  },
  methods: {
    goToAddEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
}
</style>
