// @ts-expect-error add types for vader later;
import vader from 'vader-sentiment';

export function getSentimentAnalysisScore(text: string) {
	const score = vader.SentimentIntensityAnalyzer.polarity_scores(text);
	return score.compound;
}
