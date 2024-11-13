/*
    from the vader docs: https://github.com/cjhutto/vaderSentiment

    positive sentiment: compound score >= 0.05
    neutral sentiment: (compound score > -0.05) and (compound score < 0.05)
    negative sentiment: compound score <= -0.05
    NOTE: The compound score is the one most commonly used for sentiment analysis by most researchers, including the authors.
*/

export function categorizeSentiment(scores: number[]) {
	let positive = 0;
	let neutral = 0;
	let negative = 0;

	scores.forEach((score) => {
		if (score >= 0.05) {
			positive++;
		} else if (score <= -0.05) {
			negative++;
		} else {
			neutral++;
		}
	});

	return [negative, neutral, positive];
}
