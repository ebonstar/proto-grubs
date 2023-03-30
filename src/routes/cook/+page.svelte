<script>
  import { page } from '$app/stores';
  import { today } from '../store.js';

	const recipe = $page.url.searchParams.get('name');

  const markAsDone = () => {
    today.update(rs => {
      return rs.map(r => {
        if (r.name === recipe) {
          r.cooked = true;
        }
        return r;
      });
    });
  }
</script>

<svelte:head>
	<title>Cooking Recipe: {recipe}</title>
</svelte:head>

<div class="fullscreen">
	<h2>{recipe}</h2>
	<div class="ingredients">
		<h4>Ingredients</h4>
		<label> <input type="checkbox" />2 tsp cumin seeds</label><br />
		<label> <input type="checkbox" />pinch chilli flakes</label><br />
		<label> <input type="checkbox" />2 tbsp olive oil</label><br />
		<label>
			<input type="checkbox" />600g carrots, washed and coarsely grated (no need to peel)</label
		><br />
		<label> <input type="checkbox" />140g split red lentils</label><br />
		<label> <input type="checkbox" />1l hot vegetable stock (from a cube is fine)</label><br />
		<label> <input type="checkbox" />125ml milk (to make it dairy-free, see 'try' below)</label><br
		/>
		<label> <input type="checkbox" />plain yogurt and naan bread, to serve</label><br />
	</div>
	<h4>Steps</h4>
	<ol>
		<li>
			STEP 1 Heat a large saucepan and dry-fry 2 tsp cumin seeds and a pinch of chilli flakes for 1
			min, or until they start to jump around the pan and release their aromas.
		</li>
		<li>
			STEP 2 Scoop out about half with a spoon and set aside. Add 2 tbsp olive oil, 600g coarsely
			grated carrots, 140g split red lentils, 1l hot vegetable stock and 125ml milk to the pan and
			bring to the boil.
		</li>
		<li>STEP 3 Simmer for 15 mins until the lentils have swollen and softened.</li>
		<li>
			STEP 4 Whizz the soup with a stick blender or in a food processor until smooth (or leave it
			chunky if you prefer).
		</li>
		<li>
			STEP 5 Season to taste and finish with a dollop of plain yogurt and a sprinkling of the
			reserved toasted spices. Serve with warmed naan breads.
		</li>
	</ol>
	<div class="actions">
    <a href="/"><button class="is-black is-outline">Back</button></a>
		<button on:click={markAsDone} class="is-black">Mark as Done!</button>
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

	.ingredients {
		margin-bottom: 2rem;
	}

	.actions {
		display: flex;
		justify-content: space-between;
	}
</style>
