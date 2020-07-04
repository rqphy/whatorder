<template>
  <Container :infos="infos" />
</template>
<script>
import Container from "@/components/Container.vue";

export default {
  name: "FF",
  components: {
    Container,
  },
  data() {
    return {
      infos: {
        time: "18 Hours",
        movies: [
          "The Fast and the Furious (2001)",
          "2 Fast 2 Furious (2003)",
          "Fast & Furious (2009)",
          "Fast Five (2011)",
          "Furious 6 (2013)",
          "Fast and Furious: Tokyo Drift (2006)",
          "Furious 7 (2015)",
          "The Fate of the Furious (2017)",
          "Fast & Furious Presents: Hobbs & Shaw (2019)",
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
<style lang="scss" scoped></style>
