<script>
	import { base } from '$app/paths';
	import CookingList from './CookingList.svelte';
	import { currentPlan, nextPlan, incoming } from './store.js';

	let current;
	let next;
	let showIncoming;

	currentPlan.subscribe((value) => {
		current = value;
	});

	nextPlan.subscribe((value) => {
		next = value;
	});

	incoming.subscribe((value) => {
		showIncoming = value;
	});

	function hideIncoming() {
		incoming.update(() => false);
	}
</script>

<svelte:head>
	<title>Today</title>
</svelte:head>

<section>
	<h1>Today</h1>
	<div class="card">
		Current meal plan:
		<x-flex wrap="wrap" ai="center">
			<x-cell><h4 class="plan">{current}</h4></x-cell>
			<x-cell>(day 3 of 7)</x-cell>
		</x-flex>
		{#if next}
			Coming up:
			<h5 class="plan">{next}</h5>
		{:else}
			Upcoming meal plan: none
		{/if}
	</div>
	<CookingList />
	{#if showIncoming}
		<h3>Incoming!</h3>
		<div class="card">
			Your friend <span class="special">Hugo</span> just shared his recipe for
			<span class="special">Banana and Bacon Stuffed French Toast with Peanut Butter Syrup</span>
			with you!
			<div class="card-actions">
				<button class="is-outline is-white" on:click={hideIncoming}>Decline</button>
				<a href="{base}/recipe?name=Banana and Bacon Stuffed French Toast with Peanut Butter Syrup"
					><button class="is-white" on:click={hideIncoming}>Save this recipe</button></a
				>
			</div>
		</div>
	{/if}
	<h3>♥</h3>
	Thanks for using Grubs! A short spiel about how we quit our jobs to work on this and we'd really appreciate
	you sharing Grubs with your friends. Like and subscribe!
</section>

<style>
	div.card {
		background: black;
		color: white;
		padding: 1rem;
		margin-bottom: 2rem;
	}

	.card .special {
		font-weight: 700;
		color: white;
		text-decoration: underline;
	}

	.card-actions {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
	}

	.plan {
		margin: 0;
		color: white;
	}
</style>
