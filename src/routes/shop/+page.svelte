<script>
	const ingredients = [
		{
			name: '2 tsp cumin seeds',
			recipe: 'Spiced carrot & lentil soup (tomorrow)',
			aisle: 'spices'
		},
		{
			name: 'pinch chilli flakes',
			recipe: 'Spiced carrot & lentil soup (tomorrow)',
			aisle: 'spices'
		},
		{
			name: '2 tbsp olive oil',
			recipe: 'Spiced carrot & lentil soup (tomorrow)',
			aisle: 'cooking oils'
		},
		{ name: '600g carrots', recipe: 'Spiced carrot & lentil soup (tomorrow)', aisle: 'produce' },
		{
			name: '140g split red lentils',
			recipe: 'Spiced carrot & lentil soup (tomorrow)',
			aisle: 'dried goods'
		},
		{
			name: '1l hot vegetable stock',
			recipe: 'Spiced carrot & lentil soup (tomorrow)',
			aisle: 'canned goods'
		},
		{ name: '125ml milk', recipe: 'Spiced carrot & lentil soup (tomorrow)', aisle: 'dairy' },
		{
			name: 'plain yogurt and naan bread',
			recipe: 'Spiced carrot & lentil soup (tomorrow)',
			aisle: 'dairy/bakery'
		},
		{
			name: '2 boneless, skinless chicken breasts',
			recipe: 'Chicken pesto orzo salad (in 2 days)',
			aisle: 'meat'
		},
		{ name: '1 lemon', recipe: 'Chicken pesto orzo salad (in 2 days)', aisle: 'produce' },
		{ name: '3 garlic cloves', recipe: 'Chicken pesto orzo salad (in 2 days)', aisle: 'produce' },
		{
			name: '1 tbsp olive oil',
			recipe: 'Chicken pesto orzo salad (in 2 days)',
			aisle: 'cooking oils'
		},
		{ name: '25g flaked almonds', recipe: 'Chicken pesto orzo salad (in 2 days)', aisle: 'nuts' },
		{
			name: 'large bunch of flat-leaf parsley',
			recipe: 'Chicken pesto orzo salad (in 2 days)',
			aisle: 'produce'
		},
		{
			name: 'small bunch of basil',
			recipe: 'Chicken pesto orzo salad (in 2 days)',
			aisle: 'produce'
		},
		{
			name: 'small bunch of mint, leaves picked',
			recipe: 'Chicken pesto orzo salad (in 2 days)',
			aisle: 'produce'
		},
		{
			name: '25g parmesan, grated',
			recipe: 'Chicken pesto orzo salad (in 2 days)',
			aisle: 'cheese'
		},
		{
			name: '100ml extra virgin olive oil',
			recipe: 'Chicken pesto orzo salad (in 2 days)',
			aisle: 'cooking oils'
		},
		{ name: '250g orzo', recipe: 'Chicken pesto orzo salad (in 2 days)', aisle: 'pasta' },
		{
			name: '16 asparagus spears',
			recipe: 'Chicken pesto orzo salad (in 2 days)',
			aisle: 'produce'
		}
	];

	const byRecipe = ingredients.reduce(
		(acc, i) => ({
			...acc,
			[i.recipe]: [...(acc[i.recipe] ?? []), i]
		}),
		{}
	);

	const byAisle = ingredients.reduce(
		(acc, i) => ({
			...acc,
			[i.aisle]: [...(acc[i.aisle] ?? []), i]
		}),
		{}
	);

	const VIEW_BY_RECIPE = 'List ingredients by Recipe';
	const VIEW_BY_AISLE = 'List ingredients by Aisle';

	let selectedView = VIEW_BY_RECIPE;
	let view = byRecipe;

	function updateData() {
		if (selectedView === VIEW_BY_RECIPE) {
			view = byRecipe;
		} else if (selectedView === VIEW_BY_AISLE) {
			view = byAisle;
		}
	}
</script>

<svelte:head>
	<title>Shopping List</title>
</svelte:head>

<div>
	<h2>Shopping List</h2>
	<div class="ingredients">
		<select
			bind:value={selectedView}
			on:change={updateData}
			class="fullwidth"
			id="exampleRecipientInput"
		>
			<option value={VIEW_BY_RECIPE} selected="">{VIEW_BY_RECIPE}</option>
			<option value={VIEW_BY_AISLE}>{VIEW_BY_AISLE}</option>
		</select>

		{#each Object.entries(view) as [heading, list]}
			<h6>{heading}:</h6>

			<ul class="no-style">
				{#each list as item}
					<li>
						<input type="checkbox" />
						<span>{item.name}</span>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>

<style>
	select {
		margin-bottom: 1rem;
	}
	h6:first-letter {
		text-transform: uppercase;
	}
	input {
		margin-right: 1rem;
	}
</style>
