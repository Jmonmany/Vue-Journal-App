<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">27</span>
      <span class="mx-1 fs-5">April</span>
      <span class="mx-2 fw-light">2023, THU</span>
    </div>
    <div class="entry-description">
      Laboris velit est et minim laborum. Ullamco ut eiusmod excepteur aliquip
      aute dolor mollit duis eiusmod minim. Adipisicing eiusmod duis labore
      consequat quis veniam ea Lorem irure magna adipisicing tempor adipisicing
      incididunt. Mollit eiusmod eu ex eu aliquip amet magna ut qui voluptate.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: #666;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 40%);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 0.8rem;
    color: #666;
  }
}
</style>
