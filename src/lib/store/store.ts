import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { createGeneralSlice, TypeCreateGeneralSlice } from './slices/general';
import { createJokeSlice, TypeCreateJokeSlice } from './slices/joke';

export const useAppStore = create<TypeCreateGeneralSlice & TypeCreateJokeSlice>()(
	persist(
		(...a) => ({
			...createGeneralSlice(...a),
			...createJokeSlice(...a),
		}),
		{
			name: 'appStore',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
