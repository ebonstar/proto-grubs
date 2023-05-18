<script>
	import { RECIPES } from './recipes.js';
	import { activeTags, inactiveTags } from '../store.js';

	let active;
	let inactive;
	activeTags.subscribe((value) => {
		active = value;
	});
	inactiveTags.subscribe((value) => {
		inactive = value;
	});

	const recipes = RECIPES.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
	let searchTerm = '';
	$: filteredRecipes = recipes.filter(
		(recipe) =>
			recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(!active.length || active.every((tag) => recipe.tags.includes(tag)))
	);

	function activateTag(tag) {
		activeTags = activeTags.update((tags) => [tags, ...activeTags]);
		inactiveTags = inactiveTags.update((tags) => tags.filter((i) => i !== tag));
	}

	function deactivateTag(tag) {
		activeTags = activeTags.update((tags) => tags.filter((i) => i !== tag));
		inactiveTags = inactiveTags.update((tags) => [tags, ...inactiveTags].sort());
	}
</script>

<svelte:head>
	<title>Recipes</title>
</svelte:head>

<div>
	<h1>Recipes</h1>
	<input type="text" bind:value={searchTerm} placeholder="Search recipe name or ingredient" />

	{#each active as tag}
		<button on:click={() => deactivateTag(tag)} class="tag is-black">{tag}</button>
	{/each}

	<div class="all-tags">
		{#each inactive as tag}
			<button on:click={() => activateTag(tag)} class="tag is-outline is-black">{tag}</button>
		{/each}
	</div>

	<ul class="recipe-list">
		{#each filteredRecipes as recipe}
			<li><a href="/recipe?name={recipe.name}">{recipe.name}</a></li>
		{/each}
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

	.recipe-list a {
		color: black;
	}
</style>
