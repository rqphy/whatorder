<template>
  <header class="nav">
    <ul class="nav__links">
      <li>
        <a class="nav__link" href="/">MCU</a>
      </li>
      <li>
        <a class="nav__link" href="/ff">Fast&furious</a>
      </li>
      <li>
        <a class="nav__link" href="/xmens">XMens</a>
      </li>
      <li>
        <a class="nav__link" href="/infos">Infos</a>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "Header",
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
    color: var(--mainDark);
  }
}
</style>
