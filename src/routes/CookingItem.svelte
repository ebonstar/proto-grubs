<script>
	export let name;
	export let cooked = false;
	export let prep;
	export let cook;

	const toggleCooked = () => (cooked = !cooked);
</script>

<div class="row" class:cooked on:click={toggleCooked}>
	<div class="details">
		<h5>{name}</h5>
		{#if !cooked}
			{#if prep}<div>Prep time: {prep}</div>{/if}
			{#if cook}<div>Cook time: {cook}</div>{/if}
		{/if}
	</div>
	<button class="button is-black">{cooked ? 'Done ✓' : 'Cook!'}</button>
</div>

<style>
	.row {
		display: flex;
		align-items: start;
		justify-content: space-between;
		padding: 2rem 0;
		border-bottom: 2px solid black;
	}

	.row:first-of-type {
		padding-top: 0;
	}

	h5 {
		margin: 0;
	}

	button {
		width: 8rem;
	}

	.cooked button {
		padding: 0.4rem 1rem;
	}
</style>
