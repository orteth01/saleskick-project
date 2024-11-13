import { saveSentimentAnalysis } from '$lib/third-party/firebase';
import { getSentimentAnalysisScore } from '$lib/third-party/vader';
import { fail, type Actions } from '@sveltejs/kit';
import { z, ZodError } from 'zod';

const textSchema = z.object({
	text: z
		.string({ required_error: 'Text is required' })
		.min(10, { message: 'Text must be at least 10 characters' })
		.trim()
});

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		try {
			const result = textSchema.parse(formData);
			const compoundScore = getSentimentAnalysisScore(result.text);

			await saveSentimentAnalysis({ text: result.text, compoundScore });

			return {
				success: true
			};
		} catch (err: unknown) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				return fail(400, { errors });
			}
		}
	}
} satisfies Actions;
