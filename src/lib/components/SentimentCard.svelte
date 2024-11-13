<script>
	export let text = '';
	export let submittedAt = 0;
	export let compoundScore = 0;
</script>

<div class="space-y-2 rounded-lg border bg-white p-4 shadow-md">
	<p class="text-sm text-gray-400">{new Date(submittedAt)}</p>
	<p class="text-base">{text}</p>
	<p
		class={`text-lg font-semibold ${
			compoundScore > 0.05
				? 'text-green-500'
				: compoundScore < -0.05
					? 'text-red-500'
					: 'text-yellow-400'
		}`}
	>
		Sentiment Score: {compoundScore.toFixed(3)}
	</p>
</div>
