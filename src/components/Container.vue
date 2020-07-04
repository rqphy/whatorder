<template>
  <div class="container">
    <Burger v-if="openMenu" />
    <Title v-if="!openMenu" text="whatorder" />
    <Illustration v-if="!openMenu" :theme="theme" />
    <Infos
      v-if="!openMenu"
      :watchTime="infos.time"
      :length="infos.movies.length"
    />
    <Movies v-if="!openMenu" :movies="infos.movies" />
    <Gradient v-if="!openMenu" />
    <div class="burger" @click="updateOpenMenu">
      <div class="burger__background" v-if="!openMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          class="burger__icon"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
            fill="rgba(245,245,245,1)"
          />
        </svg>
      </div>
      <div class="burger__background burger__background--open" v-if="openMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          class="burger__icon"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            fill="rgba(5,5,5,1)"
          />
        </svg>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Title from "@/components/Title.vue";
import Illustration from "@/components/Illustration.vue";
import Infos from "@/components/Infos.vue";
import Movies from "@/components/Movies.vue";
import Burger from "@/components/Burger.vue";
import Gradient from "@/components/Gradient.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Container",
  components: {
    Title,
    Illustration,
    Infos,
    Movies,
    Burger,
    Gradient,
    Footer,
  },
  props: {
    infos: Object,
    theme: String,
  },
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    updateOpenMenu: function() {
      this.openMenu = !this.openMenu;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.burger {
  height: 56px;
  width: 56px;
  position: fixed;
  z-index: 2;
  bottom: 70px;
  right: 5%;

  &__background {
    border-radius: 50%;
    background: var(--mainDark);
    height: 100%;
    width: 100%;
    &--open {
      background: var(--mainWhite);
    }
  }
  &__icon {
    transform: translate(50%, 50%);
  }
}
</style>
