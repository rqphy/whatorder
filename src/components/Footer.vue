<template>
  <footer>
    <p>
      whatorder is a personnal project created to understand Vue.js. You can
      find the code on
      <a target="_blank" href="https://github.com/rqphy/whatorder">GitHub</a>.
    </p>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
footer {
  border-top: 1px solid var(--mainDark);
  margin-top: 30px;
  height: 250px;
  width: 100%;
  font-family: var(--font);
  text-align: center;
}
p {
  margin-top: 20px;
  color: var(--mainDark);
}

a {
}
</style>
