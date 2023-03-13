<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'true' : undefined}>
				<a href="/">Today</a>
			</li>
			<li aria-current={$page.url.pathname === '/recipes' ? 'true' : undefined}>
				<a href="/recipes">Recipes</a>
			</li>
			<li aria-current={$page.url.pathname === '/plan' ? 'true' : undefined}>
				<a href="/plan">Plan</a>
			</li>
			<li aria-current={$page.url.pathname === '/shop' ? 'true' : undefined}>
				<a href="/shop">Shop</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}
	li {
		position: relative;
		height: 100%;
		margin: 0;
	}
	li a {
		display: flex;
		padding: 0.8rem;
		color: black;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
	}

	li a:hover {
		color: var(--accent-1);
	}

	li[aria-current='true'] a {
		text-decoration: underline;
		text-underline-position: under;
  	text-decoration-thickness: 3px;
	}
</style>