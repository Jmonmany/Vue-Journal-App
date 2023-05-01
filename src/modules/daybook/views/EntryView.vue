<template>
  <div>
    <template v-if="localEntry"
      ><div class="entry-title d-flex justify-content-between p-2">
        <div>
          <span class="text-success fs-3 fw-bold">{{ day }}</span>
          <span class="mx-1 fs-3">{{ month }}</span>
          <span class="mx-4 fs-4 fw-light">{{ year }}, {{ weekday }}</span>
        </div>
        <div>
          <button class="btn btn-danger">
            Borrar
            <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary">
            Subir foto
            <i class="fa fa-upload"></i>
          </button>
        </div>
      </div>
      <hr />
      <div class="d-flex flex-column px-3 h-75">
        <textarea
          placeholder="What happend today?"
          v-model="localEntry.text"
        ></textarea>
      </div>
    </template>

    <FloatingBtn icon="fa-save" @on:click="saveEntry" />
    <img
      src="https://img.freepik.com/free-photo/trees-forest-backgrounds_23-2148914433.jpg?w=1380&t=st=1682590447~exp=1682591047~hmac=9749be96b208ff784fa7dd857325c0097d2bc129392a3d0584e0fa8b01949a67"
      alt="picture"
      class="img-thumbnail"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import getDates from "../helpers/getDates";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    FloatingBtn: () => import("../components/FloatingBtn"),
  },

  data() {
    return {
      localEntry: null,
    };
  },

  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDates(this.localEntry.date);
      return day;
    },
    month() {
      const { month } = getDates(this.localEntry.date);
      return month;
    },
    year() {
      const { year } = getDates(this.localEntry.date);
      return year;
    },
    weekday() {
      const { weekday } = getDates(this.localEntry.date);
      return weekday;
    },
  },
  methods: {
    ...mapActions("journal", ["updateEntry"]),
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({ name: "no-entry" });
      this.localEntry = entry;
    },
    async saveEntry() {
      this.updateEntry(this.localEntry);
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 1rem;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: black, $alpha: 0.2);
}
</style>
