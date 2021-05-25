// %%%%%%%%%%%%%%%%%%%%%%%% 
// %       MAIN JS        % 
// %%%%%%%%%%%%%%%%%%%%%%%% 

// # FRAMEWORK summons # 
import Vue from "vue";

// # ROOT COMPONENT (id="app") summons # 
import App from "./App.vue"; // ! mi trovo dove sta main.js: /pokemon-vue/src/

// # AUX TOOLS summons # 
import AxiosPlugin from "./plugins/AxiosPlugin"; // ! mi trovo dove sta main.js: /pokemon-vue/src/

// # AUX TOOLS activation # 
Vue.use(AxiosPlugin);

// # FRAMEWORK SETTINGS # 
Vue.config.productionTip = false;

// # FRAMEWORK & ROOT COMPONENT activation # 
new Vue({
  render: (h) => h(App),
}).$mount("#app");

// alert('cicio no xe per barca');

/*
|---------------------------------------------------------------------------------------------------|
|																									|
| 	main.js	{import}	<---	Vue																	|
|			{import}	<---	{export} AxiosPlugin.js {import}	<--- 	axios					|
|			{import}	<---	{export} App.vue {import}			<--- 	bootstrap				|
|												 {import}			<---	{export} Pokemon.vue	|
|																									|
|---------------------------------------------------------------------------------------------------|
*/