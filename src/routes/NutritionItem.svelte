<script>
	export let amount;
	export let percentage;
</script>

<div class="nutrition-line" class:excess={percentage > 100}>
	{amount}
	<div class="chart">
		<progress max="100" value={percentage} />
		<div class="percentage">{percentage}%</div>
	</div>
</div>

<style>
	.nutrition-line {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 90%;
	}

	.chart {
		display: flex;
		align-items: center;
	}

	progress {
		accent-color: #000;
		width: 10rem;
	}

	.excess progress {
		accent-color: #ff5722;
	}

	.percentage {
		font-size: 80%;
		width: 50px;
		text-align: right;
	}

	.excess .percentage {
		color: #e64a19;
	}
</style>
