<template>
  <div>
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-4 fs-4 fw-light">2023</span>
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
      <textarea placeholder="What happend today?"></textarea>
    </div>
    <FloatingBtn icon="fa-save"/>
    <img
      src="https://img.freepik.com/free-photo/trees-forest-backgrounds_23-2148914433.jpg?w=1380&t=st=1682590447~exp=1682591047~hmac=9749be96b208ff784fa7dd857325c0097d2bc129392a3d0584e0fa8b01949a67"
      alt="picture"
      class="img-thumbnail"
    />
  </div>
</template>

<script>
export default {
  components: {
    FloatingBtn: () => import("../components/FloatingBtn"),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 2rem;
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
