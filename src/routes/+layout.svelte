<script>
	import Header from "./Header.svelte";
	import './skelet.min.css';
	import './styles.css';
</script>

<div class="app">
<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		width: 428px;
		height: 926px;
		border: 5px solid black;
		border-radius: 24px;
		background: white;
		overflow: scroll;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
