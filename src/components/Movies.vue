<template>
  <ul class="movies">
    <li
      class="movies__movie"
      v-for="(movie, index) in movies"
      v-bind:key="movie"
    >
      #{{ index + 1 }} - {{ movie }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "Movies",
  props: {
    movies: Array,
  },
};
</script>

<style lang="scss" scoped>
.movies {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;

  &__movie {
    width: 98%;
    height: 40px;
    margin: 2px 0;
    border-radius: 14px;
    background-color: var(--mainDark);
    color: var(--mainWhite);
    font-family: var(--font);
    font-size: 14px;
    line-height: 40px;
    letter-spacing: 0.5px;
    padding-left: 4%;
  }
}
</style>
