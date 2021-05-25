// %%%%%%%%%%%%%%%%%%%%%%%% 
// %     AXIOS PLUGIN     % 
// %%%%%%%%%%%%%%%%%%%%%%%% 

// axios summons (from /node_modules/axios/ ??)
import axios from 'axios'; // ! lo vede, ma come?

const BASE_URL = 'https://pokeapi.co/api/v2/';

// plug axios related properties into Vue
export default {
	install(Vue) {
		Vue.prototype.axios = axios;
		Vue.prototype.base_url = BASE_URL;
	}
}