import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { craeteGeneralSlice, TypeCreateGeneralSlice } from './slices/general';

export const useAppStore = create<TypeCreateGeneralSlice>()(
	persist(
		(...a) => ({
			...craeteGeneralSlice(...a),
		}),
		{
			name: 'appStore',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
