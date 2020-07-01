<template>
  <div class="test"></div>
</template>
<script>
export default {
  name: "Gradient",
};
</script>
<style lang="scss" scoped>
.test {
  height: 190px;
  width: 100%;
  position: fixed;
  bottom: -20px;
  left: 0;
  background: rgb(245, 245, 245);
  background: linear-gradient(
    0deg,
    rgba(245, 245, 245, 1) 90%,
    rgba(245, 245, 245, 0.2) 100%
  );
  filter: blur(15px);
  -webkit-filter: blur(15px);
}
</style>
