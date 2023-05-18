<script>
	import { marked } from 'marked';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const recipe = browser ? $page.url.searchParams.get('name') : 'Unknown recipe';
	let ingredientsData = `### Ingredients

- 250g dried fettuccine pasta
- 40g butter
- 2 tbsp extra virgin olive oil
- 400g button mushrooms, sliced
- 180g pkt Taste one pan creamy chicken recipe base
- 300ml ctn thickened cream
- 1 tbsp fresh thyme leaves, plus extra to serve
- 1 tsp Dijon mustard

#### Steps

1. Cook the pasta in a saucepan of boiling water following packet directions or until al dente. Drain and return to the pan.
2. Meanwhile, heat the butter and oil in a frying pan over medium-high heat. Add the mushrooms and cook, stirring occasionally, for 5-8 minutes or until golden. Add the recipe base, cream, thyme and mustard to the pan and bring to the boil. Simmer for 5 minutes or until the sauce thickens slightly.
3. Add the mushroom sauce to the pasta and toss to combine. Divide among serving bowls. Sprinkle with extra thyme to serve.`;
	let ingredientsEdit = false;

	function toggleEdit() {
		ingredientsEdit = !ingredientsEdit;
	}
</script>

<svelte:head>
	<title>Cooking Recipe: {recipe}</title>
</svelte:head>

<div class="fullscreen">
	<h2>{recipe}</h2>
	<button class="is-black is-small" on:click={toggleEdit}
		>{ingredientsEdit ? '👀 Preview changes' : '✏️ Edit recipe'}</button
	>

	{#if ingredientsEdit}
		<textarea type="text" bind:value={ingredientsData} rows="20" />
	{:else}
		{@html marked(ingredientsData)}
	{/if}
	<div class="actions">
		<a href="{base}/recipes"><button class="is-black is-outline">Cancel</button></a>
		<a href="{base}/recipes"><button class="is-black">Save</button></a>
	</div>
</div>

<style>
	.fullscreen {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 1rem;
		background: white;
	}

	textarea {
		line-height: 2em;
	}

	.actions {
		display: flex;
		justify-content: space-between;
	}
</style>
