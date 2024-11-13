<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<section class="container mx-auto px-4">
	<form class="my-6 w-full" method="POST" use:enhance>
		<div>
			<input
				name="text"
				class="h-98 textarea w-full rounded-sm"
				placeholder="Enter text for sentiment analysis..."
			/>
		</div>
		{#if form?.errors?.text}<p class="text-red-600">{form.errors.text}</p>{/if}
		<div class="my-4">
			<button
				class="btn btn-outline w-1/3 rounded-sm bg-slate-700 text-white hover:bg-slate-600"
				type="submit">Submit</button
			>
		</div>
	</form>
</section>
