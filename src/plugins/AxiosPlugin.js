// %%%%%%%%%%%%%%%%%%%%%%%% 
// %     AXIOS PLUGIN     % 
// %%%%%%%%%%%%%%%%%%%%%%%% 

// axios summons (from /node_modules/axios/ ??)
import axios from 'axios'; // ! mi trovo dove? 

const BASE_URL = 'https://pokeapi.co/api/v2/';

// nuove proprietà di Vue
export default {
	install(Vue) {
		// axios come proprietà di Vue (this.axios)
		Vue.prototype.axios = axios;
		// base_url come proprietà di Vue (this.base_url)
		Vue.prototype.base_url = BASE_URL;
	}
}
