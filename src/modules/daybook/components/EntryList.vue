<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search" />
    </div>
    <div class="entry-scrollarea">
      <EntryContent v-for="item in 100" :key="item"></EntryContent>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    EntryContent: () =>
      import(/* webpackChunkName: "entry-component" */ "./EntryContent"),
  },
};
</script>

<style lang="scss" scoped>
input {
  height: 2rem;
}

.entry-list-container {
  border-right: 1px solid #ccc;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
