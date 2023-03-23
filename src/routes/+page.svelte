<script>
	import CookingList from './CookingList.svelte';
</script>

<svelte:head>
	<title>Today</title>
</svelte:head>

<section>
	<h1>Today</h1>
	<div class="card">
		Current meal plan:
		<x-flex wrap="wrap" ai="center">
			<x-cell><h4 class="plan">Paleo week 4</h4></x-cell>
			<x-cell>(day 3 of 7)</x-cell>
		</x-flex>
		Upcoming meal plan: none
	</div>
	<CookingList />
</section>

<style>
	div.card {
		background: black;
		color: white;
		padding: 1rem;
		margin-bottom: 2rem;
	}

	.plan {
		margin: 0;
		color: white;
	}
</style>
