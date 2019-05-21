import axios from 'axios';
import * as config from '@/shared/config.js';

export default {
	namespaced: true,
	state: {
		items: []
	},
	getters: {
		items(state){
			return state.items;
		},
		itemsMap(state){
			let itemsMap = {};

			for(let i = 0; i < state.items.length; i++){
				let product = state.items[i];
				itemsMap[product.id] = product;
			}

			return itemsMap;
		},
		item: (state, getters) => (id) => {
			return getters.itemsMap[id];
		}
	},
	mutations: {
		clearItems(state){
			state.items = [];
		},
		loadItems(state, data){
			state.items = data;
		}
	},
	actions: {
		loadItems(store) {
			store.commit('clearItems');

			axios.get(`https://api.themoviedb.org/3/discover/movie${config.APIkey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
				.then(response => {
					store.commit('loadItems', response.data.results);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}
};