<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { MEAL_PLANS } from '../plan/plans.js';
	import { nextPlan } from '../store.js';

	let selected;
	nextPlan.subscribe((value) => {
		selected = value;
	});

	const saveNextPlan = () => {
		nextPlan.update(() => selected);

		goto('/plan');
	};

	const flipDurationMs = 200;

	let mealPlanDays = [
		{
			id: 1,
			name: 'Day 1',
			items: [
				{ id: '235235', name: 'Greek yogurt with berries and honey' },
				{ id: '23423', name: 'Grilled chicken breast with mixed greens and avocado' },
				{ id: '234', name: 'Baked salmon with roasted vegetables' }
			]
		},
		{
			id: 2,
			name: 'Day 2',
			items: [
				{ id: '462', name: 'Oatmeal with almond milk, banana, and cinnamon' },
				{ id: '463', name: 'Turkey and hummus wrap with carrots and celery sticks' },
				{ id: '26246', name: 'Grilled chicken skewers with zucchini and squash' }
			]
		},
		{
			id: 3,
			name: 'Day 3',
			items: [
				{ id: '734', name: 'Smoothie bowl with frozen fruit, spinach, and almond milk' },
				{ id: '16', name: 'Tuna salad with mixed greens and tomato' },
				{ id: '264', name: 'Grilled steak with roasted sweet potatoes' }
			]
		},
		{
			id: 4,
			name: 'Day 4',
			items: [
				{ id: '5723', name: 'Scrambled eggs with spinach and whole-grain toast' },
				{ id: '8245', name: 'Quinoa and vegetable salad with chickpeas' },
				{ id: '235', name: 'Shrimp stir-fry with mixed vegetables and brown rice' }
			]
		},
		{
			id: 5,
			name: 'Day 5',
			items: [
				{ id: '24624', name: 'Cottage cheese with sliced peaches and almonds' },
				{ id: '72', name: 'Grilled chicken Caesar salad' },
				{ id: '0567', name: 'Baked chicken thighs with roasted broccoli and sweet potato fries' }
			]
		},
		{
			id: 6,

			name: 'Day 6',
			items: [
				{ id: '435', name: 'Greek yogurt with granola and sliced banana' },
				{ id: '246723', name: 'Turkey chili with mixed greens' },
				{ id: '25', name: 'Grilled salmon with mixed vegetables' }
			]
		},
		{
			id: 7,

			name: 'Day 7',
			items: [
				{ id: '1325', name: 'Egg and vegetable omelette' },
				{ id: '232', name: 'Turkey and Swiss cheese sandwich with carrot sticks' },
				{
					id: '61',
					name: 'Baked chicken breast with roasted Brussel sprouts and mashed sweet potatoes'
				}
			]
		}
	];

	function handleDndConsiderColumns(e) {
		mealPlanDays = e.detail.items;
	}
	function handleDndFinalizeColumns(e) {
		mealPlanDays = e.detail.items;
	}
	function handleDndConsiderCards(cid, e) {
		const colIdx = mealPlanDays.findIndex((c) => c.id === cid);
		mealPlanDays[colIdx].items = e.detail.items;
		mealPlanDays = [...mealPlanDays];
	}
	function handleDndFinalizeCards(cid, e) {
		const colIdx = mealPlanDays.findIndex((c) => c.id === cid);
		mealPlanDays[colIdx].items = e.detail.items;
		mealPlanDays = [...mealPlanDays];
	}
</script>

<svelte:head>
	<title>Use Meal Plan</title>
</svelte:head>

<div class="fullscreen">
	<h2>Choose meal plan:</h2>
	<select bind:value={selected}>
		{#each MEAL_PLANS as plan}
			<option value={plan.name}>{plan.name}</option>
		{/each}
	</select>

	{#if selected}
		<section
			class="board"
			use:dndzone={{ items: mealPlanDays, flipDurationMs, type: 'columns' }}
			on:consider={handleDndConsiderColumns}
			on:finalize={handleDndFinalizeColumns}
		>
			{#each mealPlanDays as column (column.id)}
				<div class="column" animate:flip={{ duration: flipDurationMs }}>
					<h5>{column.name}</h5>
					<div
						class="day"
						use:dndzone={{ items: column.items, flipDurationMs }}
						on:consider={(e) => handleDndConsiderCards(column.id, e)}
						on:finalize={(e) => handleDndFinalizeCards(column.id, e)}
					>
						{#each column.items as item (item.id)}
							<div class="recipe" animate:flip={{ duration: flipDurationMs }}>
								{item.name}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</section>

		<div class="option">
			<label for="startDate">Start plan on</label>
			<input id="startDate" type="date" value="2022-03-21" />
		</div>

		<div class="option">
			<label for="scale">Scale all meals (servings)</label>
			<input id="scale" type="number" value="3" />
			<input type="checkbox" /> Don't scale
		</div>

		<div class="option">
			<label>Add ingredients to shopping list</label><br />
			<input type="checkbox" class="switch is-black" checked="" />
		</div>
	{/if}

	<div class="actions">
		<a href="/plan"><button class="is-black is-outline">Back</button></a>
		<button class={selected ? 'is-black' : 'disabled'} on:click={saveNextPlan}
			>Save meal plan</button
		>
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

	select {
		margin-bottom: 1rem;
	}

	.day {
		border-bottom: 2px solid black;
		padding: 1rem;
		margin-bottom: 1rem;
	}

	.recipe {
		padding: 0.5rem 1rem;
		margin-bottom: 0.5rem;
		background: black;
		color: white;
	}

	.option {
		margin-bottom: 2rem;
	}

	.actions {
		display: flex;
		justify-content: space-between;
	}
</style>
