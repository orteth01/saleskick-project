<script lang="ts">
	import { onMount } from 'svelte';
	import { collection, onSnapshot } from 'firebase/firestore';

	import { db } from '$lib/third-party/firebase';
	import type { SentimentAnalysisRecord } from '$lib/types/sentimentAnalysis';
	import SentimentBarChart from '$lib/components/SentimentBarChart.svelte';
	import SentimentCardList from '$lib/components/SentimentCardList.svelte';

	import { sentimentAnalysis } from '../../store/sentimentAnalysis';

	onMount(() => {
		const collectionRef = collection(db, 'sentiment');

		const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
			const data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			})) as SentimentAnalysisRecord[];
			sentimentAnalysis.set(data.sort((a, b) => b.submittedAt - a.submittedAt));
		});

		return () => unsubscribe();
	});
</script>

<main class="grid h-screen grid-cols-[1fr_2fr] grid-rows-[auto_1fr]">
	<header class="col-span-full border-b p-4 text-xl font-bold">
		<h1>Sentiment analysis dashboard</h1>
	</header>
	<section class="overflow-y-auto p-4">
		<SentimentCardList />
	</section>
	<section class="p-4">
		<SentimentBarChart />
	</section>
</main>
