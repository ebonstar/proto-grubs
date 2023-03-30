<script>
	import { today } from './store.js';
	import CookingItem from './CookingItem.svelte';
	import NutritionItem from './NutritionItem.svelte';
	import { nutrition } from './data.js';

	let recipes;

	today.subscribe((value) => {
		recipes = value;
	});

	let showNutrition = true;

	const toggleNutrition = () => (showNutrition = !showNutrition);
</script>

<h3>Let's cook!</h3>
<div>
	{#each recipes as recipe}
		<CookingItem {...recipe} />
	{/each}
</div>
<div class="nutrition-header">
	<h5>Estimated daily nutrition</h5>
	<button class="is-white" on:click={toggleNutrition}>{showNutrition ? '▲' : '▼'}</button>
</div>
{#if showNutrition}
	<div class="nutrition-data">
		{#each nutrition as item}
			<NutritionItem {...item} />
		{/each}
	</div>
{/if}

<style>
	.nutrition-header {
		display: flex;
		align-items: start;
		justify-content: space-between;
	}

	.nutrition-header button {
		padding: 0.6rem 1rem;
	}

	.nutrition-data {
		border: 2px solid black;
		padding: 1rem;
		margin-bottom: 2rem;
	}
</style>
