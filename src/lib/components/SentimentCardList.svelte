<script lang="ts">
	import { sentimentAnalysis } from '../../store/sentimentAnalysis';
	import SentimentCard from './SentimentCard.svelte';
</script>

<ul class="flex flex-col gap-4">
	{#each $sentimentAnalysis as { text, submittedAt, compoundScore }}
		<SentimentCard {text} {submittedAt} {compoundScore} />
	{/each}
</ul>
