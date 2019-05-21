export default {
	namespaced: true,
	state: {
		items: [
			{
				url: '/products',
				text: 'Products List'
			},
			{
				url: '/cart',
				text: 'Your Cart'
			},
			{
				url: '/about',
				text: 'About page'
			},
			{
				url: '/form',
				text: 'Movie request'
			}
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	}
};