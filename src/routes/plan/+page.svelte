<script>
	import { page } from '$app/stores';
	import { MEAL_PLANS } from './plans.js';
	const planName = $page.url.searchParams.get('name');
</script>

<svelte:head>
	<title>Plan</title>
</svelte:head>

<div class="card">
	<h5>Current plan</h5>
	<h4>Paleo week 4 (day 3 of 7) ✏️</h4>
</div>
<div class="card">
	<h5>Next plan</h5>
	{#if planName}
		<a href="/usemealplan?name={planName}"><h4>{planName} (7 days) ✏️</h4></a>
		Starting 22 March 2023
	{:else}
		<a href="/usemealplan"><button class="is-outline is-white">+ Add a meal plan</button></a>
	{/if}
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

	.card h5 {
		margin: 0;
	}

	.card a {
		text-decoration: none;
	}

	.plans-list li {
		list-style-type: none;
		margin: 0;
	}
</style>
