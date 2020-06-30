<template>
  <section class="menu">
    <Title text="whatorder" class="menu__title" />
    <ul class="menu__links">
      <li>
        <a class="menu__link" href="/">MCU</a>
      </li>
      <li>
        <a class="menu__link" href="/ff">Fast&furious</a>
      </li>
      <li>
        <a class="menu__link" href="/xmens">XMens</a>
      </li>
      <li>
        <a class="menu__link" href="/infos">Infos</a>
      </li>
    </ul>
  </section>
</template>
<script>
import Title from "@/components/Title.vue";

export default {
  name: "Burger",
  components: {
    Title,
  },
};
</script>
<style lang="scss" scoped>
.menu {
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background: var(--mainDark);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title,
  &__link {
    color: var(--mainWhite);
  }

  &__title {
    font-size: var(--smallTitle);
  }

  &__links {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;
  }

  &__link {
    text-decoration: underline;
    font-family: var(--font);
    font-size: 36px;
    text-transform: uppercase;
  }
}
</style>
