<script context="module">
	import { Chart } from 'chart.js/auto';
</script>

<script lang="ts">
	import { sentimentAnalysis } from '../../store/sentimentAnalysis';
	import { onMount } from 'svelte';
	import { categorizeSentiment } from '$lib/utils/categorizeSentiment';

	let chartElement: HTMLCanvasElement;
	let chartInstance: Chart;

	onMount(() => {
		let chartData = {
			labels: ['Negative', 'Neutral', 'Positive'],
			datasets: [
				{
					label: 'Sentiment Distribution',
					data: [],
					backgroundColor: ['#F44336', '#FFEB3B', '#4CAF50'],
					borderColor: ['#D32F2F', '#FBC02D', '#388E3C'],
					borderWidth: 1
				}
			]
		};

		chartInstance = new Chart(chartElement, {
			type: 'bar',
			data: chartData,
			options: {
				responsive: true,
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});

	sentimentAnalysis.subscribe((records) => {
		if (chartInstance) {
			const sentimentCategories = categorizeSentiment(
				records.map((record) => record.compoundScore)
			);
			chartInstance.data.datasets[0].data = sentimentCategories;
			chartInstance.update();
		}
	});
</script>

<canvas bind:this={chartElement}></canvas>
