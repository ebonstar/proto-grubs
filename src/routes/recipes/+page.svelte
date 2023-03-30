<script>
	import { RECIPES } from './recipes.js';

	const recipes = RECIPES.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

	let inactiveTags = [
		'30min',
		'breakfast',
		'cocktails',
		'dessert',
		'dinner',
		'easy',
		'from:Anna',
		'from:Hugo',
		'from:Justin',
		'gluten-free',
		'healthy',
		'high-protein',
		'lunch',
		'one-pot',
		'paleo',
		'protein',
		'snack',
		'vegan',
		'vegetarian'
	];
	let activeTags = [];

	function activateTag(tag) {
		activeTags = [tag, ...activeTags];
		inactiveTags = inactiveTags.filter((i) => i !== tag);
	}

	function deactivateTag(tag) {
		activeTags = activeTags.filter((i) => i !== tag);
		inactiveTags = [tag, ...inactiveTags].sort();
	}
</script>

<svelte:head>
	<title>Recipes</title>
</svelte:head>

<div>
	<h1>Recipes</h1>
	<input type="text" placeholder="Search recipe name or ingredient" />

	{#each activeTags as activeTag}
		<button on:click={() => deactivateTag(activeTag)} class="tag is-black">{activeTag}</button>
	{/each}

	<div class="all-tags">
		{#each inactiveTags as tag}
			<button on:click={() => activateTag(tag)} class="tag is-outline is-black">{tag}</button>
		{/each}
	</div>

	<ul class="recipe-list">
		{#if activeTags.length > 0}
			{#each recipes as recipe}
				{#if activeTags.every((tag) => recipe.tags.includes(tag))}
					<li>{recipe.name}</li>
				{/if}
			{/each}
		{:else}
			{#each recipes as recipe}
				<li>{recipe.name}</li>
			{/each}
		{/if}
	</ul>
</div>

<style>
	input {
		border-color: black;
	}

	.all-tags {
		margin: 1rem 0;
		max-height: 10rem;
		overflow: auto;
	}

	.tag {
		font-size: 1.2rem;
		font-weight: 400;
		padding: 0.8rem 1rem;
	}

	.recipe-list li {
		list-style-type: none;
		margin: 0;
	}
</style>
