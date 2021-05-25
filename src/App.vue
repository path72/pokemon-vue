// %%%%%%%%%%%%%%%%%%%%%%%% 
// % ROOT COMPONENT: App  % 
// %%%%%%%%%%%%%%%%%%%%%%%% 

// # COMPONENT BODY # 
<template>
  <div id="app"> <!-- un solo figlio di <template> ! -->
    <img alt="Vue logo" src="./assets/logo.png" />
	<Pokemon msg="Cicio no xe per barca" />
  </div>
</template>

// # PLUGS & SOCKETS # 
<script>

// * socket component: Pokemon * //
import Pokemon from "./components/Pokemon.vue";

// * plug component: App & its further components * //
export default {
  name: "App",
  components: {
	Pokemon
  },
};

</script>

// # SCOPED STYLE MANAGEMENT # 
<style lang="scss">

// * retrieved style * //
@import "./assets/scss/app.scss";

// * main style * //
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
