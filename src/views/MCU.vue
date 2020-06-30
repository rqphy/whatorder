<template>
  <div class="container">
    <Title text="whatorder" />
    <Illustration theme="mcu" />
    <Infos :watchTime="infos.time" :length="infos.movies.length" />
    <Movies :movies="infos.movies" />
    <Burger v-if="openMenu" />
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
  </div>
</template>
<script>
import Title from "@/components/Title.vue";
import Illustration from "@/components/Illustration.vue";
import Infos from "@/components/Infos.vue";
import Movies from "@/components/Movies.vue";
import Burger from "@/components/Burger.vue";

export default {
  name: "MCU",
  components: {
    Title,
    Illustration,
    Infos,
    Movies,
    Burger,
  },
  data() {
    return {
      openMenu: false,
      infos: {
        time: "32 Hours",
        movies: [
          "Captain America: The First Avenger (2011)",
          "Captain Marvel (2019)",
          "Iron Man (2008)",
          "Iron Man 2 (2010)",
          "The Incredible Hulk (2008)",
          "Thor (2011)",
          "The Avengers (2012)",
          "Thor: The Dark World (2013)",
          "Guardians of the Galaxy (2014)",
          "Guardians of the Galaxy Vol. 2 (2017)",
          "Iron Man 3 (2013)",
          "Captain America: The Winter Soldier (2014)",
          "Avengers: Age of Ultron (2015)",
          "Ant-Man (2015)",
          "Captain America: Civil War (2016)",
          "Black Panther (2018)",
          "Spider-Man: Homecoming (2017)",
          "Doctor Strange (2016)",
          "Thor: Ragnarok (2017)",
          "Ant-Man and the Wasp (2018)",
          "Avengers: Infinity War (2018)",
          "Avengers: Endgame (2019)",
          "Spider-Man: Far From Home (2019)",
        ],
      },
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
  border: 3px solid green;
  bottom: 126px;
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
