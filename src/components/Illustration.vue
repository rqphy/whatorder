<template>
  <img
    :src="require(`@/assets/${theme}.png`)"
    :alt="`Illustration of ${theme}`"
  />
</template>
<script>
export default {
  name: "Illustration",
  props: {
    theme: String,
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  margin-top: 32px;
}
</style>
