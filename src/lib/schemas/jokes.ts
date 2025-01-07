import { z } from 'zod';

export const singleJokeSchema = z.object({
	category: z.string(),
	delivery: z.string(),
	error: z.boolean(),
	id: z.number(),
	lang: z.string(),
	setup: z.string(),
	type: z.string(),
});
