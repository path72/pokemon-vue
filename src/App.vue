// %%%%%%%%%%%%%%%%%%%%%%%% 
// % ROOT COMPONENT: App  % 
// %%%%%%%%%%%%%%%%%%%%%%%% 

// # COMPONENT BODY # 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Pokemon msg="Cicio no xe per barca" />
  </div>
</template>

// # PLUGS & SOCKETS # 
<script>

// * component socket: Pokemon * //
import Pokemon from "./components/Pokemon.vue";

// * component plug: App * //
export default {
  name: "App",
  components: {
    Pokemon,
  },
};

</script>

// # SCOPED STYLE MANAGEMENT # 
<style lang="scss">

// * EXTA STYLE * //
@import "./assets/scss/app.scss"; 

// * ROOT STYLE * //
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
