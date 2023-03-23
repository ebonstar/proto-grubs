<script>
  let cooked = false;
</script>

<div class="row">
	<div class="details">
		<h5>Paleo Breakfast Bowl</h5>
    <div class="details">Prep time: 15 minutes</div>
    <div class="details">Cook time: 30 minutes</div>
	</div>
  <button class="button is-black is-outline">Cook!</button>
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
</style>
