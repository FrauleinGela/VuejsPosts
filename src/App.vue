<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
export default {
  name: "app",
  components: {
    TheHeader
  }
};
</script>

<style>
body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
</style>
