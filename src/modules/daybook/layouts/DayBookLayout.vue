<template>
  <div>
    <NavBar />
    <div class="d-flix">
      <div class="col-4"><EntryList /></div>
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () =>
      import(/* webpackChunkName: "daybook-navbar" */ "../components/NavBar"),
    EntryList: () =>
      import(/* webpackChunkName: "entry-list" */ "../components/EntryList"),
  },
};
</script>

<style></style>
