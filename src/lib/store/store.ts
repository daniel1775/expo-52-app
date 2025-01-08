import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAppStore = create(
	persist(() => ({}), {
		name: 'appStore',
		storage: createJSONStorage(() => AsyncStorage),
	}),
);
