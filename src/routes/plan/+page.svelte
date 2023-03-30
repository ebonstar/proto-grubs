<script>
	import { MEAL_PLANS } from './plans.js';
</script>

<svelte:head>
	<title>Plan</title>
</svelte:head>

<div class="card">
	<h5>Current plan</h5>
	<x-cell><h4 class="plan">Paleo week 4 (day 3 of 7) ✏️</h4></x-cell>
</div>
<div class="card">
	<h5>Next plan</h5>
</div>
<h1>Meal plans</h1>
<ul class="plans-list">
	{#each MEAL_PLANS as plan}
		<li>{plan.name}</li>
	{/each}
</ul>

<style>
	.card {
		padding: 1rem;
		margin-bottom: 1rem;
		background: black;
		color: white;
	}
	.card h4,
	h5 {
		color: white;
	}

	.plans-list li {
		list-style-type: none;
		margin: 0;
	}
</style>
