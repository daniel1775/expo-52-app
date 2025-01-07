import { Text, View } from 'react-native';

import { useGetSingleJoke } from '@/src/lib/fetching/useQueryBasic';

export default function Index() {
	const { jokeData } = useGetSingleJoke();

	return (
		<View className=''>
			<Text className='text-black'>{jokeData?.delivery}</Text>
		</View>
	);
}
