import { StateCreator } from 'zustand';

export type TypeCreateGeneralSlice = {
	id: number;
	name: string;
};

export const craeteGeneralSlice: StateCreator<TypeCreateGeneralSlice> = (set) => ({
	id: 1,
	name: 'John Doe',
	setName: (name: string) => set({ name }),
	setId: (id: number) => set({ id }),
});
