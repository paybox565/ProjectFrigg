<template>
	<div>
		<h1>Movies</h1>
		<div class="row">
			<div class="col-sm-4" v-for="product in products">
				<div class="card">
					<div class="card-image">
						<router-link :to="'/products/' + product.id">
							<img :src="'https://image.tmdb.org/t/p/w342/' + product.poster_path" class="card-img-top" alt="...">
						</router-link>
					</div>
					<div class="card-body">
						<h5 class="card-title">
							<router-link :to="'/products/' + product.id">
								<a>{{ product.title }}</a>
							</router-link>
						</h5>
						<button v-if="inCart.indexOf(product.id) === -1"
								@click="addToCart(product.id)"
								class="btn btn-primary">
							Add to cart
						</button>
						<button v-else
								@click="removeFromCart(product.id)"
								class="btn btn-warning">
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		created(){
			this.$store.dispatch('products/loadItems');
		},
		computed: {
			...mapGetters('products', {
				products: 'items'
			}),
			...mapGetters('cart', {
				inCart: 'products'
			})
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			})
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
	.col-sm-4 {
		padding-bottom: 15px;
	}
	.card-image {
		height: 372px;
		overflow: hidden;
	}
	.card-title {
		height: 80px;
		overflow: hidden;
	}
</style>