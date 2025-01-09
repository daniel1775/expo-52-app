import { z } from 'zod';

import { singleJokeSchema } from '../schemas/jokes';

export type TypeSingleJoke = z.infer<typeof singleJokeSchema>;
