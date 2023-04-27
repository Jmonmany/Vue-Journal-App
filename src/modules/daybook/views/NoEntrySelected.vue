<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No Selected</h1>
    <FloatingBtn />
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
};
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
}
</style>
