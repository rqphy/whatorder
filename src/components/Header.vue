<template>
  <header class="nav">
    <ul class="nav__links">
      <li v-for="page in pages" :key="page">
        <a :href="page.path" class="nav__link"> {{ page.name }}</a>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    pages: Array,
  },
};
</script>
<style lang="scss" scoped>
.nav {
  margin-top: 20px;
  &__links {
    display: flex;
  }

  &__link {
    margin: 10px;
    font-family: var(--font);
    font-weight: 600;
    color: var(--mainDark);
  }
}
</style>
