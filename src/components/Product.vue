<template>
	<div>
		<router-link :to="{name: 'products'}">Back to movies</router-link>
		<h1>{{ product.title }}</h1>
		<hr>
		<div class="row mb-2">
			<div class="col-sm-5">
				<div class="poster">
					<img :src="'https://image.tmdb.org/t/p/w342/' + product.poster_path" alt="...">
				</div>
			</div>
			<div class="col-sm-7">
				<div class="info">
					<table class="table table-hover">
						<tbody>
							<tr>
								<td>Original title</td>
								<td>{{product.original_title}}</td>
							</tr>
							<tr>
								<td>Rating</td>
								<td>{{product.vote_average}}</td>
							</tr>
							<tr>
								<td>Release date</td>
								<td>{{product.release_date}}</td>
							</tr>
						</tbody>
					</table>
				</div>
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
		<div class="row description">
			<div class="col-sm-12">
				{{product.overview}}
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			id(){
				return this.$route.params.id;
			},
			product(){
				return this.$store.getters['products/item'](this.id);
			},
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