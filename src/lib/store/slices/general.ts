import { StateCreator } from 'zustand';

export type TypeCreateGeneralSlice = {
	id: number;
	name: string;
	setName: (name: string) => void;
	setId: (id: number) => void;
};

export const createGeneralSlice: StateCreator<TypeCreateGeneralSlice> = (set) => ({
	id: 1,
	name: 'John Doe',
	setName: (name: string) => set({ name }),
	setId: (id: number) => set({ id }),
});
