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
          <input
            type="file"
            @change="onSelectedImage"
            ref="imageSelector"
            v-show="false"
            accept="image/png, image/jpeg"
          />

          <button
            v-if="localEntry.id"
            class="btn btn-danger"
            @click="onDeleteEntry"
          >
            Borrar
            <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary" @click="selectImage">
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
      v-if="localEntry.picture && !localImage"
      :src="localEntry.picture"
      alt="picture"
      class="img-thumbnail"
    />
    <img
      v-if="localImage"
      :src="localImage"
      alt="picture"
      class="img-thumbnail"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import getDates from "../helpers/getDates";
import Swal from "sweetalert2";
import uploadImage from "../helpers/uploadImage";

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
      localImage: null,
      localFile: null,
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
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),
    async loadEntry() {
      let entry;
      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }
      this.localEntry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Wait please",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      const picture = await uploadImage(this.localFile);
      this.localEntry.picture = picture;

      if (this.localEntry.id) {
        await this.updateEntry(this.localEntry);
      } else {
        const id = await this.createEntry(this.localEntry);
        this.$router.push({ name: "entry", params: { id } });
      }
      this.file = null;
      Swal.fire("Saved", "", "success");
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      });

      if (isConfirmed) {
        new Swal({
          title: "Wait please",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        await this.deleteEntry(this.localEntry.id);
        this.$router.push({ name: "no-entry" });
        Swal.fire("Deleted", "", "success");
      }
    },
    onSelectedImage(event) {
      const file = event.target.files[0];
      if (!file) {
        this.localImage = null;
        this.localFile = null;
        return;
      }
      this.localFile = file;
      const reader = new FileReader();
      // FileReader is an object that allows to read the content of a file
      reader.onload = () => (this.localImage = reader.result);
      // onload means that when the file is loaded, the function will be executed
      reader.readAsDataURL(file);
      // readAsDataURL is a method that allows to read the content of a file as a URL
    },
    selectImage() {
      this.$refs.imageSelector.click();
      // now we can click the button to select the image, to trigger the event on input type file
      // so we can hide the input type file and show the button only
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
