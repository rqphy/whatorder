<template>
  <div class="page">
    <Container :infos="infos" theme="xmens" />
  </div>
</template>
<script>
import Container from "@/components/Container.vue";

export default {
  name: "XMENS",
  components: {
    Container,
  },
  data() {
    return {
      infos: {
        time: "24 Hours",
        movies: [
          "X-Men: First Class (2011)",
          "X-Men Origins : Wolverine (2009)",
          "X-Men (2000)",
          "X2 (2003)",
          "X-Men: The Last Stand (2006)",
          "The Wolverine (2013)",
          "X-Men : Days of Future Past (2014)",
          "X-Men : Apocalypse (2016)",
          "Dark Phoenix (2019)",
          "Deadpool (2016)",
          "Deadpool 2 (2018)",
          "Logan (2017)",
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
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.template {
  max-width: 1920px;
}
</style>
