import { writable } from 'svelte/store';
import type { SentimentAnalysisRecord } from '$lib/types/sentimentAnalysis';

export const sentimentAnalysis = writable<SentimentAnalysisRecord[]>([]);
