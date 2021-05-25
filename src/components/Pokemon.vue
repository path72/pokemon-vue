// %%%%%%%%%%%%%%%%%%%%%%%% 
// %  COMPONENT: Pokemon  % 
// %%%%%%%%%%%%%%%%%%%%%%%% 

// # COMPONENT BODY # 
<template>
  <div>
    <h1>{{ msg }}</h1>
	<div class="card" v-for="(pokemon,index) in pokemons" :key="index">
		<div class="card-body">{{pokemon.name}}</div>
	</div>
  </div>
</template>

// # PLUGS & SOCKETS # 
<script>

// * component socket: ... * //
// ...

// * component plug: Pokemon * //
export default {
	name: "Pokemon",
	props: {
		msg: String,
	},
	data() {
		return {
			pokemons: []
		}
	},
	mounted() {
		this.axios.get(this.base_url+'pokemon')
			.then(resp => {
				this.pokemons = resp.data.results;
				console.log('this.pokemons',resp.data.results);
			}) 
	}
};

</script>

// # SCOPED STYLE MANAGEMENT # 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
