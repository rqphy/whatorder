<template>
  <h1 class="title">{{ text }}</h1>
</template>
<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-family: var(--font);
  font-size: var(--smallTitle);
  text-transform: uppercase;
  color: var(--mainDark);
}
</style>
