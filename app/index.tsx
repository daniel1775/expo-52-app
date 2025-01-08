import { Text, View } from 'react-native';

import { useGetSingleJoke } from '@/fetching/useQueryBasic';
import { useAppStore } from '@/src/lib/store/store';

export default function Index() {
	const { jokeData } = useGetSingleJoke();
	const { name } = useAppStore();

	return (
		<View className=''>
			<Text className='text-black'>{jokeData?.delivery}</Text>
			<Text className='text-black'>{name}</Text>
		</View>
	);
}
