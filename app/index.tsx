import { useMemo } from 'react';
import { Text, View } from 'react-native';

import { ButtonPrimary } from '@/UI/atoms/ButtonPrimary';
import { useGetSingleJoke } from '@/fetching/useQueryBasic';

export default function Index() {
	const { jokeData, refetch } = useGetSingleJoke();

	const renderJokeMessage = useMemo(() => {
		if (jokeData) {
			return `${jokeData.setup}\n\n${jokeData.delivery}`;
		}
		return 'Press the button to get a awesome joke';
	}, [jokeData]);

	return (
		<View className='px-8 flex-1 justify-center'>
			<View className='border-neutral-gray border rounded-md p-4 mb-5'>
				<Text className='text-black text-center text-xl'>{renderJokeMessage}</Text>
			</View>
			<View className='flex flex-row justify-center'>
				<ButtonPrimary text='Get Joke' onPress={() => refetch()} />
			</View>
		</View>
	);
}
