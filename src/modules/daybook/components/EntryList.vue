<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="term"
      />
    </div>
    <div class="entry-scrollarea">
      <EntryContent v-for="entry in entriesByTerm" :key="entry.id" :entry="entry"></EntryContent>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    EntryContent: () =>
      import(/* webpackChunkName: "entry-component" */ "./EntryContent"),
  },
  computed: {
    ...mapGetters("journal", ["getEntriesBtTerm"]),
    entriesByTerm() {
      return this.getEntriesBtTerm(this.term);
    },
  },
  data() {
    return {
      term: "",
    };
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
