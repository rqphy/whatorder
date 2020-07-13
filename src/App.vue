<template>
  <div id="app">
    <router-view :pages="pagesInfos" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pagesInfos: [
        {
          name: "MCU",
          path: "/",
        },
        {
          name: "Fast&Furious",
          path: "ff",
        },
        {
          name: "XMens",
          path: "xmens",
        },
      ],
    };
  },
};
</script>

<style>
@import "css/reset.css";
@import "css/global.scss";
</style>
