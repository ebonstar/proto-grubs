<script>
	const tags = [
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
		'keto',
		'low-carb',
		'lunch',
		'onepot',
		'paleo',
		'protein',
		'snack',
		'vegan',
		'vegetarian'
	];
	const activeTags = [];
</script>

<svelte:head>
	<title>Recipes</title>
</svelte:head>

<div class="text-column">
	<h1>Recipes</h1>
	<input type="text" placeholder="Search recipe name or ingredient" />

	{#each activeTags as activeTag}
		<button class="tag is-black">{activeTag}</button>
	{/each}

	<div class="all-tags">
		{#each tags as tag}
			<button class="tag is-outline is-black">{tag}</button>
		{/each}
	</div>
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
</style>
