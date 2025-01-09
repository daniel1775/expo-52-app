import { StateCreator } from 'zustand';

import { TypeSingleJoke } from '@/lib/types/joke';

export type TypeCreateJokeSlice = {
	currentJokeData: TypeSingleJoke | null;
	setCurrentJokeData: (jokeData: TypeSingleJoke | null) => void;
};

export const createJokeSlice: StateCreator<TypeCreateJokeSlice> = (set) => ({
	currentJokeData: null,
	setCurrentJokeData: (jokeData) => set({ currentJokeData: jokeData }),
});
