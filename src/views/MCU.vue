<template>
  <Title text="whatorder" />
</template>
<script>
import Title from "@/components/Title.vue";

export default {
  name: "MCU",
  components: {
    Title,
  },
  data() {
    return {
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
};
</script>
<style lang="scss" scoped></style>
