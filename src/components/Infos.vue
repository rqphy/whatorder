<template>
  <div class="infos">
    <p class="infos__length">NUMBER OF TITLES: {{ length }}</p>
    <p class="infos__time">WATCH TIME: {{ watchTime }}</p>
  </div>
</template>
<script>
export default {
  name: "Infos",
  props: {
    length: Number,
    watchTime: String,
  },
};
</script>
<style lang="scss" scoped>
.infos {
  width: 80%;
  font-family: var(--font);
  font-weight: 600;
  color: var(--mainDark);
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
